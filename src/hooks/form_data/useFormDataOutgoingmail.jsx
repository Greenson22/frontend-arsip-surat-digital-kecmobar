const useFormDataOutgoingmail = (command)=>{
     const form = document.getElementById(command.form_id)
     const formData = new FormData()
     
     formData.append('agenda_number', form['agenda-number'].value)
     formData.append('letter_number', form['letter-number'].value)
     formData.append('letter_date', form['letter-date'].value)
     formData.append('destination', form['destination'].value)
     formData.append('subject', form['subject'].value)

     if (command.form_id != 'edit-outgoingmail-form'){
          formData.append('file', form['document'].files[0])
     }
     return formData
}

export default useFormDataOutgoingmail