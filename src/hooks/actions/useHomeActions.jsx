import { jwtDecode } from 'jwt-decode'

import useHandlePut from '../request/useHandlePut'
import useHandleFetch from '../request/useHandleFetch'
import usePaginationLocalStorage from '../pagination/usePaginationLocalStorage'
import useformDataUserEdit from '../form_data/useFormDataUserEdit'
import useFormDataPasswordChange from '../form_data/useFormDataPasswordChange'

const useHomeActions = (command, dispatch)=>{
     const token = localStorage.getItem('accessToken')
     const userId = jwtDecode(token).user_id
     const url = import.meta.env.VITE_USERS_API_KEY
     const apiUserId = import.meta.env.VITE_USERS_API_KEY.split('?')[0]+userId+'/'
     // console.log(command)
     if (command){
          switch(command.command){
               case 'put':
                    const data = useformDataUserEdit(command.form_id)
                    useHandlePut(apiUserId, token, data, dispatch)
                    break
               case 'put_password':
                    const dataPut = useFormDataPasswordChange(command)
                    useHandlePut(apiUserId, token, dataPut, dispatch)
                    break
          }
     }else{
          useHandleFetch(apiUserId, token, dispatch)
          usePaginationLocalStorage(url)
     }
}

export default useHomeActions