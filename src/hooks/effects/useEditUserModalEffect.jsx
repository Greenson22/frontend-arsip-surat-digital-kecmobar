import { useEffect } from "react"

const useEditUserModalEffect = (user, formRef)=>{
     useEffect(()=>{
          formRef.current['username-edit'].value = user.username
          formRef.current['first-name-edit'].value = user.first_name
          formRef.current['last-name-edit'].value = user.last_name
          formRef.current['email-address-edit'].value = user.email
          formRef.current['active-edit'].checked = user.is_active
          formRef.current['is-superuser-edit'].checked = user.is_superuser
          formRef.current['phone-number-edit'].value = user.phone_number
     }, [user])
}

export default useEditUserModalEffect