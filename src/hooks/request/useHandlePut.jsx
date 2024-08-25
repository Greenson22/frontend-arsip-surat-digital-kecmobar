import usePutData from '../request/usePutData'
import useAlert from '../alert/useAlert'
import { setCommand } from '../../redux/slices/commandSlice'

const defaultErrorCallBack = (err)=>{
     console.log(err)
     useAlert('error_update')
}

const useHandlePut = (url, token, data, dispatch, errorCallBack=defaultErrorCallBack) => {
     usePutData(url, data, token, 
     (response)=>{
          console.log(response)
          dispatch(setCommand(null))
          useAlert('success_update')
     }, errorCallBack)
}

export default useHandlePut