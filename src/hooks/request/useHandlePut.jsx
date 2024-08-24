import usePutData from '../request/usePutData'
import useAlert from '../alert/useAlert'
import { setCommand } from '../../redux/slices/commandSlice'

const useHandlePut = (url, token, data, dispatch) => {
     usePutData(url, data, token, 
     (response)=>{
          console.log(response)
          dispatch(setCommand(null))
          useAlert('success_update')
     }, 
     (err)=>{
          console.log(err)
          useAlert('error_update')
     })
}

export default useHandlePut