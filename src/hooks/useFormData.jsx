const useFormData = (id)=>{
     const form = document.getElementById(id)
     const data = {
          'agenda_number' : form.querySelector('#agenda_number').value,
          'letter_number' : form.querySelector('#letter_number').value,
          'source' : form.querySelector('#source').value,
          'letter_date' : form.querySelector('#letter_date').value,
          'received_date' : form.querySelector('#received_date').value,
          'recipient' : form.querySelector('#recipient').value,
          'subject' : form.querySelector('#subject').value,
     }
     return data
}

export default useFormData