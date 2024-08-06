import useHandleFetch from '../request/useHandleFetch'
import usePaginationLocalStorage from '../pagination/usePaginationLocalStorage'
import { jwtDecode } from 'jwt-decode'

const useHomeActions = (command, setData, setIData, setCommand)=>{
     const token = localStorage.getItem('accessToken')
     const userId = jwtDecode(token).user_id
     const url = import.meta.env.VITE_USERS_API_KEY.split('?')[0]+userId+'/'

     if (command){
          switch(command.command){}
     }else{
          useHandleFetch(url, token, setData)
          usePaginationLocalStorage(url)
     }
}

export default useHomeActions