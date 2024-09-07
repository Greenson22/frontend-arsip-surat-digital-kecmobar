import { setCommand } from "../../../redux/slices/commandSlice"

const useHandleSubmit = (event, dispatch, setCommand)=>{
     event.preventDefault()
     dispatch(setCommand({
          'command': 'post',
          'form_id' : 'add-incomingmail-form'
     }))
}

export default useHandleSubmit