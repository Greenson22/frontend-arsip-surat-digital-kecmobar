import axios from 'axios'

const useFetchDataFile = (url, token, call_back, callBackError)=>{
     axios.get(url, {
          headers: {
               'Authorization': `Bearer ${token}`
          }, 
          responseType: 'blob',
          // withCredentials: true
     })
     .then(call_back)
     .catch(callBackError)
}

export default useFetchDataFile