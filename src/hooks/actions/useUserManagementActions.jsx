import useHandlePut from '../request/useHandlePut'
import useHandlePost from '../request/useHandlePost'
import useHandleDelete from '../request/useHandleDelete'
import useHandleFetch from '../request/useHandleFetch'
import usePaginationLocalStorage from '../pagination/usePaginationLocalStorage'
import useUrlSyn from '../url/useUrlSyn'
import useUrlModifier from '../url/useUrlModifier'
import { setIData } from '../../redux/slices/dataSlice'
import { useFormDataUser, useFormDataUserEdit } from '../form_data'
import useAlert from '../alert/useAlert'

const useUserManagementActions = (command, dispatch)=>{
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
                    const putData = useFormDataUserEdit(command)
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

export default useUserManagementActions