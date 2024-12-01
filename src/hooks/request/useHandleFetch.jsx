import useFetchData from '../request/useFetchData'
import { setData } from '../../redux/slices/dataSlice'
import { useErrorAlert } from '../alert'
import { useResponseFormattedString } from '..'

const defaultErrorCallback = (error)=>{
     useErrorAlert('', useResponseFormattedString(error.response.data))
     console.log(error)
}

const useHandleFetch = (newUrl, token, dispatch, errorCallback=defaultErrorCallback)=>{
     useFetchData(newUrl, token, 
     (response)=>{
          dispatch(setData(response['data']))
     }, errorCallback)
}

export default useHandleFetch