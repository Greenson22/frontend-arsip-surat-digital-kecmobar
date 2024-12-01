import { setCommand } from "../../../redux/slices/commandSlice"

const handleBtnPostClick = (event, fileNote, dispatch) => {
     const duplicateFileNote = fileNote.slice()
     dispatch(setCommand({
          'command': 'multiple_post',
          'file_note': fileNote,
          'form_id': 'input_id'
     }))
}

export default handleBtnPostClick