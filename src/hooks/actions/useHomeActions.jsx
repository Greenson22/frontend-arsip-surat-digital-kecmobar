import { jwtDecode } from 'jwt-decode'

import useHandlePut from '../request/useHandlePut'
import useHandleFetch from '../request/useHandleFetch'
import usePaginationLocalStorage from '../pagination/usePaginationLocalStorage'

const useHomeActions = (command, setData, setIData, setCommand)=>{
     const token = localStorage.getItem('accessToken')
     const userId = jwtDecode(token).user_id
     const url = import.meta.env.VITE_USERS_API_KEY
     const apiUserId = import.meta.env.VITE_USERS_API_KEY.split('?')[0]+userId+'/'
     
     if (command){
          switch(command.command){
               case 'put':
                    useHandlePut(url, token, command, setCommand)
                    break
          }
     }else{
          useHandleFetch(apiUserId, token, setData)
          usePaginationLocalStorage(url)
     }
}

export default useHomeActions