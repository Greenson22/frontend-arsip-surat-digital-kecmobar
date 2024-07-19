import axios from 'axios'

const useFetchData = (url, token, call_back, call_back_err)=>{
     axios.get(url, {
          headers: {
               'Authorization': `Bearer ${token}`
          }
     })
     .then(call_back)
     .catch(call_back_err)
}

export default useFetchData