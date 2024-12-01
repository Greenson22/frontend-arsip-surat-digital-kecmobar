import usePutData from '../request/usePutData'
import useAlert from '../alert/useAlert'
import { setCommand } from '../../redux/slices/commandSlice'
import { useErrorAlert } from '../alert'
import { useResponseFormattedString } from '..'

const defaultErrorCallBack = (error)=>{
     console.log(error)
     useErrorAlert('', useResponseFormattedString(error.response.data))
}

const useHandlePut = (url, token, data, dispatch, errorCallBack=defaultErrorCallBack) => {
     usePutData(url, data, token, 
     (response)=>{
          dispatch(setCommand(null))
          useAlert('success_update')
     }, errorCallBack)
}

export default useHandlePut