const useFormDataOutgoingmail = (command)=>{
     const form = document.getElementById(command.form_id)
     const formData = new FormData()
     
     if (command.form_id != 'edit-outgoingmail-form'){
          formData.append('agenda_number', form['agenda-number'].value)
          formData.append('letter_number', form['letter-number'].value)
          formData.append('letter_date', form['letter-date'].value)
          formData.append('destination', form['destination'].value)
          formData.append('subject', form['subject'].value)
          formData.append('file', form['document'].files[0])
     }else{
          formData.append('agenda_number', form['agenda-number-edit'].value)
          formData.append('letter_number', form['letter-number-edit'].value)
          formData.append('letter_date', form['letter-date-edit'].value)
          formData.append('destination', form['destination-edit'].value)
          formData.append('subject', form['subject-edit'].value)
     }
     return formData
}

export default useFormDataOutgoingmail