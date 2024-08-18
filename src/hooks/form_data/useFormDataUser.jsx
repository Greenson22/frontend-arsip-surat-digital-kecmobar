const useFormDataUser = (command)=>{
     const form = document.getElementById(command.form_id)
     const formData = new FormData()
     formData.append('username', form.querySelector('#username').value)
     formData.append('password', form.querySelector('#password').value)
     formData.append('first_name', form.querySelector('#first-name').value)
     formData.append('last_name', form.querySelector('#last-name').value)
     formData.append('email', form.querySelector('#email-address').value)
     formData.append('is_active', form.querySelector('#active').checked)
     formData.append('is_superuser', form.querySelector('#is-superuser').checked)
     formData.append('phone_number', form.querySelector('#phone-number').value)
     formData.append('photo_url', form.querySelector('#file').files[0])
     
     return formData
}

export default useFormDataUser