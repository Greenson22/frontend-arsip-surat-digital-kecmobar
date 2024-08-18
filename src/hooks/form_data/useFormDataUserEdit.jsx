const useFormDataUserEdit = (id)=>{
     const form = document.getElementById(id)
     const formData = new FormData()
     formData.append('username', form.querySelector('#username-edit').value)
     formData.append('first_name', form.querySelector('#first-name-edit').value)
     formData.append('last_name', form.querySelector('#last-name-edit').value)
     formData.append('is_active', form.querySelector('#is-active-edit').checked)
     formData.append('is_superuser', form.querySelector('#is-superuser-edit').checked)
     formData.append('phone_number', form.querySelector('#phone-number-edit').value)

     // cek jika jika foto di input
     const picFile = form.querySelector('#file-edit').files[0]
     if (picFile){
          formData.append('photo_url', picFile)
     }

     return formData
}

export default useFormDataUserEdit