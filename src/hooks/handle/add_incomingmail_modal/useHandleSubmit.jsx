import { setCommand } from "../../../redux/slices/commandSlice"

const useHandleSubmit = (event, setAddModal, dispatch)=>{
     event.preventDefault()
     dispatch(setCommand({
          'command': 'post',
          'form_id' : 'add-incomingmail-form'
     }))
     setAddModal(false)
}

export default useHandleSubmit