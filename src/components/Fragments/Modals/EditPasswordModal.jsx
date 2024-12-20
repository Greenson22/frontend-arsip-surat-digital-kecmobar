import React from "react"

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import { MDBInput, MDBBtn, MDBCheckbox } from "mdb-react-ui-kit"
import { useDispatch } from "react-redux"
import { setCommand } from "../../../redux/slices/commandSlice"

const EditPasswordModal = (props)=>{
     const {user} = props
     const dispatch = useDispatch()

     const onHandleSubmit = (event)=>{
          event.preventDefault()

          dispatch(setCommand({
               'command': 'put_password',
               'form_id': 'form-edit-password',
               'id': user.id,
               'is_active': user.is_active,
               'is_superuser': user.is_superuser,
          }));
     }

     const handleBtnShowPassCheck = (event)=>{
          const form = document.getElementById('form-edit-password')
          const oldPassword = form['old-password']
          const newPassword = form['new-password']
          const newPasswordConfirm = form['new-password-confirm']
          
          if (event.target.checked){
               oldPassword.type = 'text'
               newPassword.type = 'text'
               newPasswordConfirm.type = 'text'
          }else{
               oldPassword.type = 'password'
               newPassword.type = 'password'
               newPasswordConfirm.type = 'password'
          }
     }

     return(
          <Modal id="editPasswordModal">
               <ModalHeader title="Ubah Password"/>
               <ModalBody>
                    <form action="" onSubmit={onHandleSubmit} id="form-edit-password">
                         <MDBInput label="Password lama" id="old-password" type="password" className='mb-2' required/>
                         <MDBInput label="Password baru" id="new-password" type="password" className='mb-2' required/>
                         <MDBInput label="Konfirmasi password baru" id="new-password-confirm" type="password" className='mb-2' required></MDBInput>
                         <MDBCheckbox label="Show password" onClick={handleBtnShowPassCheck}/>
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