import { useNavigate } from "react-router-dom"
import useAlert from "./useAlert"
import axios from "axios"
import useTokenValidation from "./useTokenValidation"

const useLoginValidate = ()=>{
     const navigate = useNavigate()
     const accessToken = useTokenValidation(localStorage.getItem('accessToken'))

     if (!accessToken){
          useAlert('loading')
          const refrestToken = useTokenValidation(localStorage.getItem('refreshToken'))
          
          axios.post(import.meta.env.VITE_REFRESH_TOKEN_API_KEY, {'refresh': refrestToken})
          .then((response)=>{
               localStorage.setItem('accessToken', response.data.access)
               location.reload()
               useAlert('success_login')
               console.log('success login ulang')
          })
          .catch((error)=>{
               useAlert('session_end')
               navigate('/login')
          })
     }
}

export default useLoginValidate