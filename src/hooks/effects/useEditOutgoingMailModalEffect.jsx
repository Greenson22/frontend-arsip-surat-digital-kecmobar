import { useEffect } from "react"

const useEditOutgoingMailModalEffect = (formRef, letter)=>{
     useEffect(()=>{
          const form = formRef.current
          form['agenda-number-edit'].value = letter?.agenda_number
          form['letter-date-edit'].value = letter?.letter_date
          form['letter-number-edit'].value = letter?.letter_number
          form['destination-edit'].value = letter?.destination
          form['subject-edit'].value = letter?.subject
     }, [letter])
}

export default useEditOutgoingMailModalEffect