import React from "react"

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import { MDBInput, MDBBtn } from "mdb-react-ui-kit"
import { useAlert } from "../../../hooks"

const EditPasswordModal = (props)=>{
     const {user, setCommand} = props

     const onHandleSubmit = (event)=>{
          event.preventDefault()
          
          const oldPassword = event.target['old-password'].value
          const newPassword = event.target['new-password'].value
          const passwordConfirm = event.target['new-password-confirm'].value
          
          const formData = new FormData()
          formData.append('username', user.username)
          formData.append('is_active', user.is_active);
          formData.append('is_superuser', user.is_superuser);
          
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
          setCommand({
               'command': 'put',
               'data': formData,
               'id': user.id
          });
     }

     return(
          <Modal id="editPasswordModal">
               <ModalHeader title="Ubah Password"/>
               <ModalBody>
                    <form action="" onSubmit={onHandleSubmit} id="form-edit-password">
                         <MDBInput label="Password lama" id="old-password" type="text" className='mb-2' required/>
                         <MDBInput label="Password baru" id="new-password" type="text" className='mb-2' required/>
                         <MDBInput label="Konfirmasi password baru" id="new-password-confirm" type="text" className='mb-2' required/>
                    </form>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn color="secondary" size="sm" data-bs-dismiss="modal">Tutup</MDBBtn>
                    <MDBBtn color="warning" size="sm" form="form-edit-password">Simpan Perubahan</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default EditPasswordModal