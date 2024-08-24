const useFormDataPasswordChange = (command)=>{
     const form = document.getElementById(command.form_id)

     const oldPassword = form.querySelector('#old-password').value
     const newPassword = form.querySelector('#new-password').value
     const passwordConfirm = form.querySelector('#new-password-confirm').value
     
     const formData = new FormData()
     formData.append('is_active', command.is_active)
     formData.append('is_superuser', command.is_superuser)
     
     // --- Password Validation Logic ---
     if (oldPassword) { // Check if old password field is not empty
          if (newPassword !== passwordConfirm) { // Check if new password and confirm password match
               useAlert('error_password_not_match')
               return; // Stop submission if passwords don't match
               }
               formData.append('new_password', newPassword)
               formData.append('password', oldPassword)
          }
     else if (newPassword || passwordConfirm) { 
          useAlert('error_old_password_not_fill')
          return; // Stop submission if old password is not provided but new passwords are
     }

     return formData
}

export default useFormDataPasswordChange