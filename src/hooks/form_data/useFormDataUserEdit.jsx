const useFormDataUserEdit = (command)=>{
     const form = document.getElementById(command.form_id)
     const formData = new FormData()
     formData.append('username', form.querySelector('#username-edit').value)
     formData.append('first_name', form.querySelector('#first-name-edit').value)
     formData.append('last_name', form.querySelector('#last-name-edit').value)
     formData.append('is_active', form.querySelector('#is-active-edit').checked)
     formData.append('is_superuser', form.querySelector('#is-superuser-edit').checked)
     formData.append('phone_number', form.querySelector('#phone-number-edit').value)
     formData.append('email', form.querySelector('#email-address-edit').value)

     // cek jika jika foto di input
     const picFile = form.querySelector('#file-edit').files[0]
     if (picFile){
          formData.append('photo_url', picFile)
     }

     if (command.form_id == 'edit-user-management-modal'){
          const oldPassword = form.querySelector('#old-password-edit').value;
          const newPassword = form.querySelector('#new-password-edit').value;
          const passwordConfirm = form.querySelector('#new-password-confirm-edit').value;
          
          // --- Password Validation Logic ---
          if (oldPassword) { // Check if old password field is not empty
               if (newPassword !== passwordConfirm) { // Check if new password and confirm password match
                    useAlert('error_password_not_match')
                    return; // Stop submission if passwords don't match
                    }
                    formData.append('old_password', oldPassword);
                    formData.append('password', newPassword);
               }
          else if (newPassword || passwordConfirm) { 
               useAlert('error_old_password_not_fill')
               return; // Stop submission if old password is not provided but new passwords are
          }
     }

     return formData
}

export default useFormDataUserEdit