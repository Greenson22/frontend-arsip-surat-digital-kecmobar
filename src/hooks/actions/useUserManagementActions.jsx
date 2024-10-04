import useHandlePut from '../request/useHandlePut'
import useHandlePost from '../request/useHandlePost'
import useHandleDelete from '../request/useHandleDelete'
import useHandleFetch from '../request/useHandleFetch'
import usePaginationLocalStorage from '../pagination/usePaginationLocalStorage'
import { setIData } from '../../redux/slices/dataSlice'
import { useFormDataUser } from '../form_data'
import { useUrlModifier } from '../url'
import { useAlert } from '../alert'
import { setPage } from '../../redux/slices/paginationSlice'

const useUserManagementActions = (command, page, pageSize, dispatch)=>{
     const url = import.meta.env.VITE_USERS_API_KEY
     const token = localStorage.getItem('accessToken')
     
     if (command){
          switch(command.command){
               case 'post':
                    const newUrl = url.split('?')[0]
                    const data = useFormDataUser(command)
                    useHandlePost(newUrl, token, data, command, dispatch)
                    break
               case 'put':
                    const putData = useFormDataUser(command)
                    const newPutUrl = useUrlModifier(url, command)
                    useAlert('loading_change_user_information')
                    useHandlePut(newPutUrl, token, putData, dispatch)
                    break
               case 'delete':
                    useHandleDelete(url, token, command, dispatch)
                    break
               case 'view_file':
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
                    if (page < 0)page = 0
                    dispatch(setPage(page-1))
               }
          })
          usePaginationLocalStorage(newUrl, dispatch)
     }
}

export default useUserManagementActions