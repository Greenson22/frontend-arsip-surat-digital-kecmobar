import axios from "axios"

const usePutData = (url, data, token, call_back)=>{
     axios.put(url, data, {
          headers: {
               'Authorization': `Token ${token}`
          }
     })
     .then(call_back)
     .catch(error=>{
          console.log(error)
     })
}

export default usePutData