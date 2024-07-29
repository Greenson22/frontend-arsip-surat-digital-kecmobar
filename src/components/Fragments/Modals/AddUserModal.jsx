import React, { useRef } from "react"
import { MDBBtn, MDBInput, MDBCheckbox } from "mdb-react-ui-kit"

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"

const AddUserModal = (props)=>{
     const {setCommand} = props
     const formRef = useRef()

     const handleSubmit = (event)=>{
          event.preventDefault()
          const formData = new FormData()
          formData.append('username', event.target.username.value)
          formData.append('password', event.target.password.value)
          formData.append('first_name', event.target['first-name'].value)
          formData.append('last_name', event.target['last-name'].value)
          formData.append('email', event.target['email-address'].value)
          formData.append('is_active', event.target['active'].value)
          formData.append('is_superuser', event.target['is-superuser'].value)
          formData.append('phone_number', event.target['phone-number'].value)
          formData.append('photo_url', event.target.file.files[0])

          setCommand({
               'command' : 'post',
               'data' : formData
          })
     }
     
     return(
          <Modal id="addUserModal">
               <ModalHeader title="Tambah pengguna"/>
               <ModalBody>
                    <form action="" onSubmit={handleSubmit} ref={formRef} id="add-user-modal">
                         <div>
                              <MDBInput label="username" id="username" type="text" className='mb-2'/>
                              <MDBInput label="password" id="password" type="password" className='mb-2'/>
                              <MDBInput label="konfirmasi password" id="confirm-password" type="password" className='mb-4'/>
                         </div>

                         <div>
                              <MDBInput label="nama awal" id="first-name" type="text" className='mb-2'/>
                              <MDBInput label="nama akhir" id="last-name" type="text" className='mb-2'/>
                              <MDBInput label="alamat email" id="email-address" type="text" className='mb-4'/>
                         </div>

                         <div>
                              <MDBCheckbox name='flexCheck' value='active' id='active' label='active' />
                              <MDBCheckbox name='flexCheck' value='active' id='is-superuser' label='super user status'/>
                         </div>
                         <MDBInput label="nomor telepon" id="phone-number" type="text" className='mb-2 mt-4'/>
                         
                         <label htmlFor="">foto profil</label>
                         <MDBInput type="file" id="file" className='mb-2'/>
                    </form>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn color="secondary" data-bs-dismiss="modal" size="sm">Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' data-bs-dismiss="modal" form="add-user-modal">Tambah pengguna</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default AddUserModal