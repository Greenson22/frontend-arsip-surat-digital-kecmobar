import React from "react"

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import { MDBInput, MDBBtn } from "mdb-react-ui-kit"
import { useAlert } from "../../../hooks"
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
               'username': user.username,
               'is_active': user.is_active,
               'is_superuser': user.is_superuser,
          }));
     }

     return(
          <Modal id="editPasswordModal">
               <ModalHeader title="Ubah Password"/>
               <ModalBody>
                    <form action="" onSubmit={onHandleSubmit} id="form-edit-password">
                         <MDBInput label="Password lama" id="old-password" type="password" className='mb-2' required/>
                         <MDBInput label="Password baru" id="new-password" type="password" className='mb-2' required/>
                         <MDBInput label="Konfirmasi password baru" id="new-password-confirm" type="password" className='mb-2' required/>
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