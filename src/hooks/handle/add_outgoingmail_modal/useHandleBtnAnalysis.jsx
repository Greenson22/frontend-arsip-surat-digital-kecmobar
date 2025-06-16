import { usePostData } from '../../request/'

const handleBtnAnalysis = (event, inputFileRef, formRef, setAnalysis)=>{
     const files = inputFileRef.current.files

     if (files.length > 0){ //jika files tidak kosong
          const letterNumber = formRef.current['letter-number']
          const letterDate = formRef.current['letter-date']
          const destination = formRef.current['destination']
          const subject = formRef.current['subject']

          const formData = new FormData()
          formData.append('file', files[0])
          formData.append('model_type', 'outgoingmail')
          formData.append('genai_type', localStorage.getItem('genai'))

          console.log('sedang menganalisa!!!')
          setAnalysis(true)
          usePostData(localStorage.getItem('hostname')+import.meta.env.VITE_GENAI_API_KEY, formData, localStorage.getItem('accessToken'), (response)=>{
               const data = response.data.entities
               setAnalysis(false)
               letterNumber.value = data?.letter_number
               letterDate.value = data?.letter_date
               destination.value = data?.destination
               subject.value = data?.subject
          })
     }
}

export default handleBtnAnalysis