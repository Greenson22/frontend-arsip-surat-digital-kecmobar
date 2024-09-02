import { usePostData } from "../../request/"

const useHandleBtnAnalysis = (event, inputFileRef, formRef, setAnalysis)=>{
     event.preventDefault()
     const files = inputFileRef.current.files
     
     if (files.length > 0){
          const letterNumber = formRef.current['letter-number']
          const source = formRef.current['source']
          const letterDate = formRef.current['letter-date']
          const reveivedDate = formRef.current['received-date']
          const subject = formRef.current['subject']
          const recipient = formRef.current['recipient']

          const formData = new FormData()
          formData.append('file', files[0])

          console.log('sedang menganalisa!!!')
          setAnalysis(true)
          usePostData(import.meta.env.VITE_GENAI_API_KEY, formData, localStorage.getItem('accessToken'), (response)=>{
               const data = response.data
               letterNumber.value = data?.letter_number
               source.value = data?.source
               recipient.value = data?.recipient
               letterDate.value = data?.letter_date
               reveivedDate.value = data?.received_date
               subject.value = data?.subject
               console.log(data)
               setAnalysis(false)
          }, (error)=>{
               console.log(error)
          })
     }
}

export default useHandleBtnAnalysis