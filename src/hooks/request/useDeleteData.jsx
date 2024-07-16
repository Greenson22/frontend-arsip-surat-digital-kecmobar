import axios from 'axios'

const useDeleteData = (url, token, call_back, call_back_err)=>{
     axios.delete(url, {
          headers: {
               'Authorization': `Token ${token}`
          }
     })
     .then(call_back)
     .catch(call_back_err)
}

export default useDeleteData