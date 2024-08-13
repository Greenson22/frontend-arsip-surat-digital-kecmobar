const useFormDataEditIncomingmail = (id)=>{
     const form = document.getElementById(id)
     const formData = new FormData()
     formData.append('agenda_number', form.querySelector('#agenda-number').value)
     formData.append('letter_number', form.querySelector('#letter-number').value)
     formData.append('source', form.querySelector('#source').value)
     formData.append('letter_date', form.querySelector('#letter-date').value)
     formData.append('received_date', form.querySelector('#received-date').value)
     formData.append('recipient', form.querySelector('#recipient').value)
     formData.append('subject', form.querySelector('#subject').value)
     return formData
}

export default useFormDataEditIncomingmail