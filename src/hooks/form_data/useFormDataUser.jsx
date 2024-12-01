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
               formData.append('new_password', form['new-password-edit'].value)
          }
          // cek jika jika foto di input
          const picFile = form['file-edit'].files[0]
          if (picFile){
               formData.append('photo_url', picFile)
          }
     }else{
          formData.append('username', form['username'].value)
          formData.append('password', form['password'].value)
          formData.append('first_name', form['first-name'].value)
          formData.append('last_name', form['last-name'].value)
          formData.append('email', form['email-address'].value)
          formData.append('is_active', form['is-active'].checked)
          formData.append('is_superuser', form['is-superuser'].checked)
          formData.append('phone_number', form['phone-number'].value)
          formData.append('photo_url', form['file'].files[0])
     }
     
     return formData
}

export default useFormDataUser