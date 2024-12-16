import { jwtDecode } from "jwt-decode"

const useTokenValidation = (accessToken)=>{
     if (accessToken != null && accessToken.length > 0){
          const jwt = jwtDecode(accessToken)
          const date = new Date()
          
          if (!(date.getTime() <= jwt.exp*1000)){
               return false
          }
     }
     return accessToken
}

export default useTokenValidation