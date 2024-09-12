import usePostData from '../request/usePostData'
import useAlert from '../alert/useAlert'
import { setCommand } from '../../redux/slices/commandSlice'
import { useErrorAlert } from '../alert'
import { useResponseFormattedString } from '..'

const defaultErrorCallback = (error)=>{
     console.log(error)
     useErrorAlert('', useResponseFormattedString(error.response.data))
}

const useHandlePost = (url, token, data, command, dispatch, errorCallBack=defaultErrorCallback)=>{
     usePostData(url, data, token, 
     (response)=>{
          dispatch(setCommand(null))
          useAlert('success')
     }, errorCallBack)
}

export default useHandlePost