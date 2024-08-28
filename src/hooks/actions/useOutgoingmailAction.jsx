import { useFormDataOutgoingmail } from '../form_data'
import { useHandlePost, useHandleFetch, useHandleDelete, useHandlePut } from '../request'
import { usePaginationLocalStorage } from "../pagination"
import useResponseFormattedString from '../useResponseFormattedString'
import useErrorAlert from '../alert/useErrorAlert'
import { useUrlSyn, useUrlModifier } from '../url'
import { setIData } from '../../redux/slices/dataSlice'

const useOutgoingmailAction = (command, dispatch)=>{
     const url = import.meta.env.VITE_OUTGOINGMAIL_API_KEY
     const token = localStorage.getItem('accessToken')
     if (command){
          switch(command.command){
               case 'post':
                    const newUrl = url.split('?')[0]
                    const data = useFormDataOutgoingmail(command)
                    useHandlePost(newUrl, token, data, command, dispatch, (error)=>{
                         useErrorAlert('add_outgoingmail', useResponseFormattedString(error.response.data))
                    })
                    break
               case 'put':
                    const putData = useFormDataOutgoingmail(command)
                    const newPutUrl = useUrlModifier(url, command)
                    useHandlePut(newPutUrl, token, putData, dispatch)
                    break
               case 'delete':
                    useHandleDelete(url, token, command, dispatch)
                    break
               case 'view_data':
                    dispatch(setIData(command.index))
                    break
               case 'navigation':
                    useHandleFetch(command.navigation_link, token, dispatch)
                    usePaginationLocalStorage(command.navigation_link)
                    break
               case 'page_size':
                    useHandleFetch(command.url, token, dispatch)
                    usePaginationLocalStorage(command.url)
                    break
               case 'search':
                    const urlSyn = useUrlSyn(url, 'pagination')
                    const searchUrl = urlSyn+'&search='+command.words
                    useHandleFetch(searchUrl, token, dispatch)
                    break
          }
     }else{
          useHandleFetch(url, token, dispatch)
          usePaginationLocalStorage(url)
     }
}

export default useOutgoingmailAction