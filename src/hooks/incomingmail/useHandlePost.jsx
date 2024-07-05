import usePostData from '../request/usePostData'

const useHandlePost = (url, token, command, setCommand)=>{
     usePostData(url, command.data, token, (response)=>{
          console.log(response)
          setCommand(null)
     })
}

export default useHandlePost