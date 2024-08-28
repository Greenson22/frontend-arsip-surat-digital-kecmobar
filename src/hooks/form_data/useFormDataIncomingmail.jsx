const useFormDataIncomingmail = (command)=>{
     const form = document.getElementById(command.form_id)
     const formData = new FormData()
     if (command.form_id != 'edit-incomingmail-form'){
          formData.append('file', form.querySelector('#document').files[0])
          formData.append('agenda_number', form.querySelector('#agenda-number').value)
          formData.append('letter_number', form.querySelector('#letter-number').value)
          formData.append('source', form.querySelector('#source').value)
          formData.append('letter_date', form.querySelector('#letter-date').value)
          formData.append('received_date', form.querySelector('#received-date').value)
          formData.append('recipient', form.querySelector('#recipient').value)
          formData.append('subject', form.querySelector('#subject').value)
     }else{
          formData.append('agenda_number', form.querySelector('#agenda-number-edit').value)
          formData.append('letter_number', form.querySelector('#letter-number-edit').value)
          formData.append('source', form.querySelector('#source-edit').value)
          formData.append('letter_date', form.querySelector('#letter-date-edit').value)
          formData.append('received_date', form.querySelector('#received-date-edit').value)
          formData.append('recipient', form.querySelector('#recipient-edit').value)
          formData.append('subject', form.querySelector('#subject-edit').value)
     }
     return formData
}

export default useFormDataIncomingmail