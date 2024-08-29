import { useNavigate } from "react-router-dom"
import { useAlert, useErrorAlert } from "../alert/"
import axios from "axios"
import useTokenValidation from "./useTokenValidation"
import { useResponseFormattedString } from ".."

const useLoginValidate = ()=>{
     const navigate = useNavigate()
     const accessToken = useTokenValidation(localStorage.getItem('accessToken'))
     const refrestToken = useTokenValidation(localStorage.getItem('refreshToken'))
 
     if (!accessToken){
          useAlert('loading')
          
          axios.post(import.meta.env.VITE_REFRESH_TOKEN_API_KEY, {'refresh': refrestToken})
          .then((response)=>{
               localStorage.setItem('accessToken', response.data.access)
               location.reload()
               useAlert('success_login')
               console.log('success login ulang')
          })
          .catch((error)=>{
               useErrorAlert('', useResponseFormattedString(error.response.data))
               navigate('/login')
          })
     }
}

export default useLoginValidate