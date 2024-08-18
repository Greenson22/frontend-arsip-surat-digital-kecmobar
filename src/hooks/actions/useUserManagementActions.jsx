import useHandlePut from '../request/useHandlePut'
import useHandlePost from '../request/useHandlePost'
import useHandleDelete from '../request/useHandleDelete'
import useHandleFetch from '../request/useHandleFetch'
import usePaginationLocalStorage from '../pagination/usePaginationLocalStorage'
import useUrlSyn from '../url/useUrlSyn'
import useUrlModifier from '../url/useUrlModifier'
import { setIData } from '../../redux/slices/dataSlice'
import useFormDataEditIncomingmail from '../form_data/useFormDataEditIncomingmail'
import { useFormDataUser } from '../form_data'

const useUserManagementActions = (command, dispatch)=>{
     const url = import.meta.env.VITE_USERS_API_KEY
     const token = localStorage.getItem('accessToken')
     
     if (command){
          switch(command.command){
               case 'post':
                    console.log(command)
                    const newUrl = url.split('?')[0]
                    const data = useFormDataUser(command.form_id)
                    useHandlePost(newUrl, token, data, command, dispatch)
                    break
               case 'put':
                    const putData = useFormDataEditIncomingmail(command.form_id)
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

export default useUserManagementActions