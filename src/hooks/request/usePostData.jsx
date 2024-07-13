import axios from "axios"

const usePostData = (url, data, token, call_back)=>{
     axios.post(url, data, {
          headers: {
               'Authorization': `Token ${token}`,
               'Content-Type': "multipart/form-data",
          }
     })
     .then(call_back)
     .catch(error=>{
          console.log(error)
     })
}

export default usePostData