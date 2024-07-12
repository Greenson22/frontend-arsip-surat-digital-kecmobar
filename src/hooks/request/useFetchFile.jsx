import axios from 'axios'

const useFetchDataFile = (url, token, call_back)=>{
     axios.get(url, {
          headers: {
               'Authorization': `Token ${token}`
          }, 
          responseType: 'blob',
          // withCredentials: true
     })
     .then(call_back)
     .catch(error=>{
          console.log(error)
     })
}

export default useFetchDataFile