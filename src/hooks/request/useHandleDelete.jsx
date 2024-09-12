import useUrlModifier from '../url/useUrlModifier'
import useDeleteData from './useDeleteData'
import useAlert from '../alert/useAlert'
import useConfirmAlert from '../alert/useConfirmAlert'
import { setCommand } from '../../redux/slices/commandSlice'
import { useErrorAlert } from '../alert'
import { useResponseFormattedString } from '..'

const defaultErrorCallback = (error)=>{
     useErrorAlert('', useResponseFormattedString(error.response.data))
     console.log(error)
}

const useHandleDelete = (url, token, command, dispatch, errorCallBack=defaultErrorCallback)=>{
     useConfirmAlert((result)=>{
          if (result.isConfirmed){
               const newUrl = useUrlModifier(url, command)
               useDeleteData(newUrl, token, 
               (response)=>{
                    dispatch(setCommand(null))
                    useAlert('success_delete')
               }, errorCallBack
          )}
     })
}

export default useHandleDelete