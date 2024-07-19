import axios from 'axios'
import useFetchData from '../request/useFetchData'

const useHandleFetch = (newUrl, token, setData)=>{
     useFetchData(newUrl, token, (response)=>{
          setData(response['data'])
     }, 
     (error)=>{
          if (error.response && error.response.status == 401){
               console.log(error.response)
               axios.post()
          }
     })
}

export default useHandleFetch