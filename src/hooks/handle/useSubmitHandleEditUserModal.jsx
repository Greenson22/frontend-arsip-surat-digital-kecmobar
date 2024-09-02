import useAlert from "../alert/useAlert";

const useSubmitHandleEditUserModal = (event, user, setCommand)=>{
     event.preventDefault(); // Prevent default form submission behavior
     const formData = new FormData();
     
     formData.append('username', event.target['username-edit'].value);
     formData.append('first_name', event.target['first-name-edit'].value);
     formData.append('last_name', event.target['last-name-edit'].value);
     formData.append('is_active', event.target['active-edit'].checked);
     formData.append('is_superuser', event.target['is-superuser-edit'].checked);
     formData.append('phone_number', event.target['phone-number-edit'].value);
     
     const oldPassword = event.target['old-password-edit'].value;
     const newPassword = event.target['new-password-edit'].value;
     const passwordConfirm = event.target['new-password-confirm-edit'].value;
     
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
     
     // cek jika foto dimasukan
     const picFile = event.target['file-edit'].files[0]
     if (picFile){
          formData.append('photo_url', picFile)
     }
               
     useAlert('loading_change_user_information')
     setCommand({
          'command': 'put',
          'data': formData,
          'id': user.id
     });
}

export default useSubmitHandleEditUserModal