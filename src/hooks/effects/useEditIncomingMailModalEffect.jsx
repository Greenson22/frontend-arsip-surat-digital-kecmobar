import { useEffect } from "react"

const useEditIncomingMailModalEffect = (letter)=>{
     useEffect(()=>{
          const form = formRef.current
          form['agenda-number'].value = letter.agenda_number
          form['letter-number'].value = letter.letter_number
          form['source'].value = letter.source
          form['letter-date'].value = letter.letter_date
          form['received-date'].value = letter.received_date
          form['recipient'].value = letter.recipient
          form['subject'].value = letter.subject
     }, [letter])
}

export default useEditIncomingMailModalEffect