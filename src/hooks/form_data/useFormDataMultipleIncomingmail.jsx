
const useFormDataIncomingmail = (name, entities)=>{
     const formData = new FormData()
     const inputFile = document.getElementById('input-file')
     const fileList = Array.from(inputFile.files)
     const file = fileList.find(file=>file.name === name)
     const date = new Date()
     
     formData.append('file', file)
     formData.append('letter_number', entities.letter_number)
     formData.append('source', entities.source)
     // if (entities.letter_date){
     //      formData.append('letter_date', entities.letter_date)
     // }
     formData.append('received_date', date.toLocaleDateString('en-CA'))
     formData.append('recipient', entities.recipient)
     formData.append('subject', entities.subject)

     return formData
}

export default useFormDataIncomingmail