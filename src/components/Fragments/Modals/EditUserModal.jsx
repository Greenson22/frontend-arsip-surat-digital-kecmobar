import React, { useEffect, useRef } from "react"
import { MDBBtn, MDBInput, MDBCheckbox } from "mdb-react-ui-kit"

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import { useHandleSubmitEditUserModal, useEditUserModalEffect } from "../../../hooks"

const EditUserModal = (props)=>{
     const { user, setCommand } = props
     const formRef = useRef()

     const handleSubmit = (event)=>{
          useHandleSubmitEditUserModal(event, user, setCommand)
     }
     useEditUserModalEffect(user, formRef)

     return(
          <Modal id="editUserModal">
               <ModalHeader title="Ubah pengguna"/>
               <ModalBody>
                    <form action="" onSubmit={handleSubmit} id="edit-user-modal" ref={formRef}>
                         <div>
                              <MDBInput label="username" id="username-edit" type="text" className='mb-2' defaultValue={' '} disabled/>
                         </div>

                         <div>
                              <MDBInput label="nama awal" id="first-name-edit" type="text" className='mb-2' defaultValue={' '}/>
                              <MDBInput label="nama akhir" id="last-name-edit" type="text" className='mb-2' defaultValue={' '}/>
                              <MDBInput label="alamat email" id="email-address-edit" type="text" className='mb-4' defaultValue={' '}/>
                         </div>

                         <div>
                              <MDBCheckbox name='flexCheck' id='active-edit' label='active'/>
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
                    <MDBBtn color="warning" size="sm" data-bs-dismiss="modal" form="edit-user-modal">Simpan perubahan</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default EditUserModal