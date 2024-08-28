const useFormDataUser = (command)=>{
     const form = document.getElementById(command.form_id)
     const formData = new FormData()

     if (command.form_id == 'edit-usermanagement-modal'){
          formData.append('username', form['username-edit'].value)
          formData.append('first_name', form['first-name-edit'].value)
          formData.append('last_name', form['last-name-edit'].value)
          formData.append('email', form['email-address-edit'].value)
          formData.append('is_active', form['is-active-edit'].checked)
          formData.append('is_superuser', form['is-superuser-edit'].checked)
          formData.append('phone_number', form['phone-number-edit'].value)
          
          // cek jika password di masukan
          const password = form['new-password-edit'].value
          if (password){
               formData.append('password', form['new-password-edit'].value)
          }
          // cek jika jika foto di input
          const picFile = form['file-edit'].files[0]
          if (picFile){
               formData.append('photo_url', picFile)
          }
     }
     
     return formData
}

export default useFormDataUser