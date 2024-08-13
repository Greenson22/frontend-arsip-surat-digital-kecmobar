import usePostData from '../request/usePostData'
import useAlert from '../alert/useAlert'
import { setCommand } from '../../redux/slices/commandSlice'

const useHandlePost = (url, token, data, command, dispatch)=>{
     usePostData(url, data, token, 
     (response)=>{
          console.log(response)
          dispatch(setCommand(null))
          useAlert('success')

          const form = document.getElementById(command.form_id)
          form.reset()
     }, 
     (err)=>{
          useAlert('error')
     })
}

export default useHandlePost