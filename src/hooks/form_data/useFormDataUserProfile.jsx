const useFormDataUserEdit = (command)=>{
     const form = document.getElementById(command.form_id)
     const formData = new FormData()
     formData.append('username', form.querySelector('#username-edit').value)
     formData.append('first_name', form.querySelector('#first-name-edit').value)
     formData.append('last_name', form.querySelector('#last-name-edit').value)
     formData.append('phone_number', form.querySelector('#phone-number-edit').value)
     formData.append('email', form.querySelector('#email-address-edit').value)
     formData.append('is_active', command.user.is_active)
     formData.append('is_superuser', command.user.is_superuser)
     formData.append('is_staff', command.user.is_staff)

     // cek jika jika foto di input
     const picFile = form.querySelector('#file-edit').files[0]
     if (picFile){
          formData.append('photo_url', picFile)
     }

     return formData
}

export default useFormDataUserEdit