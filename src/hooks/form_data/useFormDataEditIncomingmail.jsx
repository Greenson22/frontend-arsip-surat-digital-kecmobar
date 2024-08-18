const useFormDataEditIncomingmail = (command)=>{
     const form = document.getElementById(command.form_id)
     const formData = new FormData()
     formData.append('agenda_number', form.querySelector('#agenda-number-edit').value)
     formData.append('letter_number', form.querySelector('#letter-number-edit').value)
     formData.append('source', form.querySelector('#source-edit').value)
     formData.append('letter_date', form.querySelector('#letter-date-edit').value)
     formData.append('received_date', form.querySelector('#received-date-edit').value)
     formData.append('recipient', form.querySelector('#recipient-edit').value)
     formData.append('subject', form.querySelector('#subject-edit').value)
     return formData
}

export default useFormDataEditIncomingmail