import useUrlModifier from '../url/useUrlModifier'
import useDeleteData from '../request/useDeleteData'
import useAlert from '../alert/useAlert'
import useConfirmAlert from '../alert/useConfirmAlert'

const useHandleDelete = (url, token, command, setCommand)=>{
     useConfirmAlert((result)=>{
          if (result.isConfirmed){
               const newUrl = useUrlModifier(url, command)
               useDeleteData(newUrl, token, 
               (response)=>{
                    console.log(response)
                    setCommand(null)
                    useAlert('success_delete')
               },
               (err)=>{
                    useAlert('error_delete')
               })
          }
     })
}

export default useHandleDelete