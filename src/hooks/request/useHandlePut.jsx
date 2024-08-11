import usePutData from '../request/usePutData'
import useUrlModifier from '../url/useUrlModifier'
import useAlert from '../alert/useAlert'
import { setCommand } from '../../redux/slices/commandSlice'

const useHandlePut = (url, token, command, dispatch) => {
     const newUrl = useUrlModifier(url, command)
     usePutData(newUrl, command.data, token, 
     (response)=>{
          console.log(response)
          dispatch(setCommand(null))
          useAlert('success_update')
     }, 
     (err)=>{
          useAlert('error_update')
     })
}

export default useHandlePut