import useAlert from '../alert/useAlert'

const useFormDataPasswordChange = (command)=>{
     const form = document.getElementById(command.form_id)

     const oldPassword = form.querySelector('#old-password').value
     const newPassword = form.querySelector('#new-password').value
     const passwordConfirm = form.querySelector('#new-password-confirm').value
     
     if (oldPassword){
          if (newPassword !== passwordConfirm){
               useAlert('error_password_not_match')
               return {}
          }
          return {
               'new_password':newPassword,
               'password':oldPassword
          }
     }
     return {}
}

export default useFormDataPasswordChange