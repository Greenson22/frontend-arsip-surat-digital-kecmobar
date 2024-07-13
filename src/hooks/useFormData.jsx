const useFormData = (id)=>{
     const form = document.getElementById(id)
     const formData = new FormData()
     formData.append('agenda_number', form.querySelector('#agenda_number').value)
     formData.append('letter_number', form.querySelector('#letter_number').value)
     formData.append('source', form.querySelector('#source').value)
     formData.append('letter_date', form.querySelector('#letter_date').value)
     formData.append('received_date', form.querySelector('#received_date').value)
     formData.append('recipient', form.querySelector('#recipient').value)
     formData.append('subject', form.querySelector('#subject').value)
     formData.append('file', form.querySelector('#document').files[0])
     return formData
}

export default useFormData