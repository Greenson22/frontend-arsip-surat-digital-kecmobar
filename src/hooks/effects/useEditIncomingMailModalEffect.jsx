import { useEffect } from "react"

const useEditIncomingMailModalEffect = (formRef, letter)=>{
     useEffect(()=>{
          const form = formRef.current
          form['letter-number-edit'].value = letter?.letter_number
          form['agenda-number-edit'].value = letter?.agenda_number
          form['source-edit'].value = letter?.source
          form['letter-date-edit'].value = letter?.letter_date
          form['received-date-edit'].value = letter?.received_date
          form['recipient-edit'].value = letter?.recipient
          form['subject-edit'].value = letter?.subject
     }, [letter])
}

export default useEditIncomingMailModalEffect