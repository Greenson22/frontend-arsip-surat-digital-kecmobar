import axios from 'axios'

export const fetch_data = (url, token, call_back)=>{
     axios.get(url, {
          headers: {
               'Authorization': `Token ${token}`
          }
     })
     .then(call_back)
}

export const delete_data = (url, token, call_back)=>{
     axios.delete(url, {
          headers: {
               'Authorization': `Token ${token}`
          }
     })
     .then(call_back)
}