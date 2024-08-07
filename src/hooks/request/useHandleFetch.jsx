import useFetchData from '../request/useFetchData'

const useHandleFetch = (newUrl, token, setData)=>{
     useFetchData(newUrl, token, 
     (response)=>{
          setData(response['data'])
     }, (error)=>{
          console.log(error)
     })
}

export default useHandleFetch