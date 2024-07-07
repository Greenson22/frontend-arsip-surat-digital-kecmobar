import usePutData from '../request/usePutData'
import useUrlModifier from '../useUrlModifier'

const useHandlePut = (url, token, command, setCommand) => {
     const newUrl = useUrlModifier(url, command)
     usePutData(newUrl, command.data, token, (response)=>{
          console.log(response)
          setCommand(null)
     })
}

export default useHandlePut