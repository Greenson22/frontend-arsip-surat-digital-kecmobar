import React, { useRef } from "react"
import { MDBBtn, MDBInput, MDBCheckbox } from "mdb-react-ui-kit"

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import { useEditUserModalEffect } from "../../../hooks"
import { setCommand } from "../../../redux/slices/commandSlice"
import { useDispatch } from "react-redux"

const EditUserModal = (props)=>{
     const { user } = props
     const formRef = useRef()
     const dispatch = useDispatch()

     const handleSubmit = (event)=>{
          event.preventDefault()
          dispatch(setCommand({
               'command': 'put',
               'form_id': 'edit-user-management-modal',
               'id': user.id
          }));
     }
     useEditUserModalEffect(user, formRef)

     return(
          <Modal id="editUserModal">
               <ModalHeader title="Ubah pengguna"/>
               <ModalBody>
                    <form action="" onSubmit={handleSubmit} id="edit-user-management-modal" ref={formRef}>
                         <div>
                              <MDBInput label="username" id="username-edit" type="text" className='mb-2' defaultValue={' '} disabled/>
                         </div>

                         <div>
                              <MDBInput label="nama awal" id="first-name-edit" type="text" className='mb-2' defaultValue={' '} required/>
                              <MDBInput label="nama akhir" id="last-name-edit" type="text" className='mb-2' defaultValue={' '} required/>
                              <MDBInput label="alamat email" id="email-address-edit" type="text" className='mb-4' defaultValue={' '} required/>
                         </div>

                         <div>
                              <MDBCheckbox name='flexCheck' id='is-active-edit' label='active'/>
                              <MDBCheckbox name='flexCheck' id='is-superuser-edit' label='super user status'/>
                         </div>
                         <MDBInput label="nomor telepon" id="phone-number-edit" type="text" className='mb-2 mt-4' defaultValue={' '}/>
                         
                         <label htmlFor="" className="mt-2">ganti password <p className="text-primary">*isi untuk mengganti password</p></label>
                         <MDBInput label="password lama" id="old-password-edit" type="password" className='mb-2' placeholder="isi untuk mengganti password"/>
                         <MDBInput label="password baru" id="new-password-edit" type="password" className='mb-2' placeholder="isi untuk mengganti password"/>
                         <MDBInput label="konfirmasi password baru" id="new-password-confirm-edit" type="password" className='mb-4' placeholder="isi untuk mengganti password"/>
                         
                         <label htmlFor="">foto profil <p className="text-primary">*isi untuk mengganti foto profil</p></label>
                         <MDBInput type="file" id="file-edit" className='mb-2'/>
                    </form>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn color="secondary" data-bs-dismiss="modal" size="sm">Tutup</MDBBtn>
                    <MDBBtn color="warning" size="sm" form="edit-user-management-modal">Simpan perubahan</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default EditUserModal