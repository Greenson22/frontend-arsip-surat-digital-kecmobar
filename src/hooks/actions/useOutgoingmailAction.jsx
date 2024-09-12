import { useFormDataOutgoingmail, useFormDataMultipleIncomingmail } from '../form_data'
import { useHandlePost, useHandleFetch, useHandleDelete, useHandlePut } from '../request'
import { usePaginationLocalStorage } from "../pagination"
import useResponseFormattedString from '../useResponseFormattedString'
import useErrorAlert from '../alert/useErrorAlert'
import { useUrlSyn, useUrlModifier } from '../url'
import { setIData } from '../../redux/slices/dataSlice'
import { setCommand } from '../../redux/slices/commandSlice'

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
                    usePaginationLocalStorage(command.navigation_link)
                    break
               case 'page_size':
                    useHandleFetch(command.url, token, dispatch)
                    usePaginationLocalStorage(command.url)
                    break
               case 'search':
                    const urlSyn = useUrlSyn(url, 'pagination')
                    const searchUrl = url+'?page=1&page_size=5+'+'&search='+command.words
                    useHandleFetch(searchUrl, token, dispatch)
                    break
          }
     }else{
          const pagination = JSON.parse(sessionStorage.getItem('pagination'))

          if (!pagination){
               sessionStorage.setItem('pagination', JSON.stringify({page: 1, page_size: 5}))
               dispatch(setCommand(null))
          }else{
               let newUrl = url+'?page='+pagination.page+'&page_size='+pagination.page_size
               useHandleFetch(newUrl, token, dispatch, error=>{
                    newUrl = url+'?page='+(pagination.page-1)+'&page_size='+pagination.page_size
                    usePaginationLocalStorage(newUrl)
                    window.location.reload()
               })
               usePaginationLocalStorage(newUrl)
          }
     }
}

export default useOutgoingmailAction