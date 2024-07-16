import usePostData from '../request/usePostData'
import useAlert from '../useAlert'

const useHandlePost = (url, token, command, setCommand)=>{
     usePostData(url, command.data, token, 
     (response)=>{
          console.log(response)
          setCommand(null)
          useAlert('success')
     }, 
     (err)=>{
          useAlert('error')
     })
}

export default useHandlePost