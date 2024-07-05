import useUrlModifier from '../useUrlModifier'
import useDeleteData from '../request/useDeleteData'

const useHandleDelete = (url, token, command, setCommand)=>{
     if (confirm("apakah anda ingin menghapus?")){
          const newUrl = useUrlModifier(url, command)
          useDeleteData(newUrl, token, (response)=>{
               console.log(response)
               setCommand(null)
          })
     }
}

export default useHandleDelete