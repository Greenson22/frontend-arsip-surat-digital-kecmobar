import axios from "axios"

const usePutData = (url, data, token, call_back, call_back_err)=>{
     axios.put(url, data, {
          headers: {
               'Authorization': `Bearer ${token}`
          }
     })
     .then(call_back)
     .catch(call_back_err)
}

export default usePutData