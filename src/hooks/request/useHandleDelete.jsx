import useUrlModifier from '../url/useUrlModifier'
import useDeleteData from './useDeleteData'
import useAlert from '../alert/useAlert'
import useConfirmAlert from '../alert/useConfirmAlert'
import { setCommand } from '../../redux/slices/commandSlice'

const useHandleDelete = (url, token, command, dispatch)=>{
     useConfirmAlert((result)=>{
          if (result.isConfirmed){
               const newUrl = useUrlModifier(url, command)
               useDeleteData(newUrl, token, 
               (response)=>{
                    console.log(response)
                    dispatch(setCommand(null))
                    useAlert('success_delete')
               },
               (err)=>{
                    useAlert('error_delete')
               })
          }
     })
}

export default useHandleDelete