import { useNavigate } from "react-router-dom"
import useAlert from "./useAlert"
import axios from "axios"
import useTokenValidation from "./useTokenValidation"

const useLoginValidate = (accessToken)=>{
     const navigate = useNavigate()

     accessToken = useTokenValidation(accessToken)

     if (!accessToken){
          useAlert('loading')
          const refrestToken = useTokenValidation(localStorage.getItem('refreshToken'))

          axios.post('http://localhost:8000/api/token/refresh/', {'refresh': refrestToken})
          .then((response)=>{
               localStorage.setItem('accessToken', response.data.access)
               window.refresh()
               useAlert('success_login')
          })
          .catch((error)=>{
               navigate('/login')
               useAlert('session_end')
          })
     }
}

export default useLoginValidate