import axios from 'axios'

const useDeleteData = (url, token, call_back)=>{
     axios.delete(url, {
          headers: {
               'Authorization': `Token ${token}`
          }
     })
     .then(call_back)
}

export default useDeleteData