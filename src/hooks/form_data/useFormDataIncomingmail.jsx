const useFormDataIncomingmail = (command)=>{
     const form = document.getElementById(command.form_id)
     const formData = new FormData()
     formData.append('agenda_number', form.querySelector('#agenda-number').value)
     formData.append('letter_number', form.querySelector('#letter-number').value)
     formData.append('source', form.querySelector('#source').value)
     formData.append('letter_date', form.querySelector('#letter-date').value)
     formData.append('received_date', form.querySelector('#received-date').value)
     formData.append('recipient', form.querySelector('#recipient').value)
     formData.append('subject', form.querySelector('#subject').value)

     if (command.form_id != 'edit-incomingmail-form'){
          formData.append('file', form.querySelector('#document').files[0])
     }
     return formData
}

export default useFormDataIncomingmail