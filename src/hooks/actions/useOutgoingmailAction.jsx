import { useFormDataOutgoingmail, useFormDataMultipleIncomingmail } from '../form_data'
import { useHandlePost, useHandleFetch, useHandleDelete, useHandlePut } from '../request'
import { usePaginationLocalStorage } from "../pagination"
import useResponseFormattedString from '../useResponseFormattedString'
import useErrorAlert from '../alert/useErrorAlert'
import { setIData } from '../../redux/slices/dataSlice'
import { setPage } from '../../redux/slices/paginationSlice'

const useOutgoingmailAction = (command, page, pageSize, dispatch)=>{
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
               case 'multiple_post':
                         const fileNote = command.file_note
                         fileNote.map((file, index)=>{
                              if (file.entities != null){
                                   const newUrl = url.split('?')[0]
                                   const data = useFormDataMultipleIncomingmail(file.name, file.entities, true)
                                   useHandlePost(newUrl, token, data, command, dispatch)
                              }else{
                                   console.log(file.name, ' entitiesnya null')
                              }
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
                    usePaginationLocalStorage(command.navigation_link, dispatch)
                    break
               case 'page_size':
                    useHandleFetch(command.url, token, dispatch)
                    usePaginationLocalStorage(command.url, dispatch)
                    break
               case 'search':
                    const searchUrl = url+'?page='+1+'&page_size='+pageSize+'&search='+command.words
                    useHandleFetch(searchUrl, token, dispatch)
                    break
          }
     }else{
          let newUrl = url+'?page='+page+'&page_size='+pageSize
          useHandleFetch(newUrl, token, dispatch, error=>{
               if (error) {
                    dispatch(setPage(page-1))
               }
          })
          usePaginationLocalStorage(newUrl, dispatch)
     }
}

export default useOutgoingmailAction