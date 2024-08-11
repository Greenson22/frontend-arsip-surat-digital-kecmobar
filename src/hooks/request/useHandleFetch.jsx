import useFetchData from '../request/useFetchData'
import { setData } from '../../redux/slices/dataSlice'

const useHandleFetch = (newUrl, token, dispatch)=>{
     useFetchData(newUrl, token, 
     (response)=>{
          dispatch(setData(response['data']))
     }, (error)=>{
          console.log(error)
     })
}

export default useHandleFetch