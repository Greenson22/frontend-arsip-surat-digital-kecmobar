import { usePostData } from "../../request"

const handleBtnAnalysClick = (event, fileNote, fileList, setFileNote, outgoingmail) => {
     const duplicateFileNote = fileNote.slice()

     fileList.map((file, index) => {
          const formData = new FormData()
          formData.append('file', fileList[index])
          if(outgoingmail){
               formData.append('model_type', 'outgoingmail')
          }
          console.log('sedang menganalisa beberapa file')

          duplicateFileNote[index].status = 'loading'
          setFileNote(duplicateFileNote)

          usePostData(import.meta.env.VITE_GENAI_API_KEY, formData, localStorage.getItem('accessToken'), (response) => {
               const duplicateFileNoteResponse = fileNote.slice()
               const data = response.data
               duplicateFileNoteResponse[index].entities = data.entities
               duplicateFileNoteResponse[index].status = 'check'
               setFileNote(duplicateFileNoteResponse)
               console.log('satu proses selesai')
          }, (error)=>{
               const duplicateFileNoteResponse = fileNote.slice()
               duplicateFileNote[index].status = 'fail'
               setFileNote(duplicateFileNoteResponse)
               console.log('satu proses gagal')
          })
     })
}

export default handleBtnAnalysClick