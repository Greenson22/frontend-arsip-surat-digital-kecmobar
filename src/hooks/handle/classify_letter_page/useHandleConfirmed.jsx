import { setCommand } from '../../../redux/slices/commandSlice'
import { usePostData } from '../../../hooks'

const useHandleConfirmed = (note, notes, setNotes, dispatch, setTableRow)=>{
     const clasify_url = import.meta.env.VITE_CLASSIFY_LETTER_API_KEY
     const token = localStorage.getItem('accessToken')

     // mengubah status note
     setNoteStatus('loading', note, notes, setNotes)
     // mengirim permintaan ke api untuk klasifikasi surat
     usePostData(clasify_url, {'id':note.id}, token, response=>{
          setNoteStatus(null, note, notes, setNotes)
          // mengirim permintaan ke action untuk melakukan reset terhadap data
          dispatch(setCommand({
               'command':'classify'
          }))
          // merubah class dari row di table
          setTableRow(note, 'success')
     }, error=>{
          setNoteStatus(null, note, notes, setNotes)
          // merubah class dari row di table
          setTableRow(note, 'fail')
     })
}

// mengubah status note
const setNoteStatus = (status, note, notes, setNotes)=>{
     const tempNote = notes.slice()
     tempNote.map(item=>{
          if (item.id === note.id){
               item.status = status
          }
     })
     setNotes(tempNote)
}

export default useHandleConfirmed