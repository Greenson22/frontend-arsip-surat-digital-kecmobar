import usePostData from '../request/usePostData'
import useAlert from '../alert/useAlert'
import { setCommand } from '../../redux/slices/commandSlice'

const useHandlePost = (url, token, data, dispatch)=>{
     usePostData(url, data, token, 
     (response)=>{
          console.log(response)
          dispatch(setCommand(null))
          useAlert('success')
     }, 
     (err)=>{
          useAlert('error')
     })
}

export default useHandlePost