import axios from 'axios'

const useFetchData = (url, token, call_back)=>{
     axios.get(url, {
          headers: {
               'Authorization': `Token ${token}`
          }
     })
     .then(call_back)
     .catch(error=>{
          console.log(error)
     })
}

export default useFetchData