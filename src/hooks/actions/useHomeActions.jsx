import { jwtDecode } from 'jwt-decode'

import useHandlePut from '../request/useHandlePut'
import useHandleFetch from '../request/useHandleFetch'
import usePaginationLocalStorage from '../pagination/usePaginationLocalStorage'
import useFormDataUserProfile from '../form_data/useFormDataUserProfile'
import useFormDataPasswordChange from '../form_data/useFormDataPasswordChange'
import useAlert from '../alert/useAlert'

const useHomeActions = (command, page, pageSize, dispatch)=>{
     const token = localStorage.getItem('accessToken')
     const userId = jwtDecode(token).user_id
     const url = localStorage.getItem('hostname')+import.meta.env.VITE_USERS_API_KEY
     const apiUserId = localStorage.getItem('hostname')+import.meta.env.VITE_USERS_API_KEY.split('?')[0]+userId+'/'
     
     if (command){
          switch(command.command){
               case 'put':
                    const data = useFormDataUserProfile(command)
                    useAlert('loading_change_user_information')
                    useHandlePut(apiUserId, token, data, dispatch)
                    break
               case 'put_password':
                    const dataPut = useFormDataPasswordChange(command)
                    useAlert('loading_change_user_information')
                    useHandlePut(apiUserId, token, dataPut, dispatch)
                    break
          }
     }else{
          useHandleFetch(apiUserId, token, dispatch)
          usePaginationLocalStorage(url, dispatch)
     }
}

export default useHomeActions