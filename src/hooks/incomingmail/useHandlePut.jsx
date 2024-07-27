import usePutData from '../request/usePutData'
import useUrlModifier from '../url/useUrlModifier'
import useAlert from '../useAlert'

const useHandlePut = (url, token, command, setCommand) => {
     const newUrl = useUrlModifier(url, command)
     usePutData(newUrl, command.data, token, 
     (response)=>{
          console.log(response)
          setCommand(null)
          useAlert('success_update')
     }, 
     (err)=>{
          useAlert('error_update')
     })
}

export default useHandlePut