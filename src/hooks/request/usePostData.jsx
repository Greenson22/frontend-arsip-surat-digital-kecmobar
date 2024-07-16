import axios from "axios"

const usePostData = (url, data, token, call_back, call_back_err)=>{
     axios.post(url, data, {
          headers: {
               'Authorization': `Token ${token}`,
               'Content-Type': "multipart/form-data",
          }
     })
     .then(call_back)
     .catch(call_back_err)
}

export default usePostData