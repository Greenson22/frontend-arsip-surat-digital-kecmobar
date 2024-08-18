import React, { useRef } from "react"
import { MDBBtn, MDBInput, MDBCheckbox } from "mdb-react-ui-kit"

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import { setCommand } from "../../../redux/slices/commandSlice"
import { useDispatch } from "react-redux"

const AddUserModal = ()=>{
     const formRef = useRef()
     const dispatch = useDispatch()

     const handleSubmit = (event)=>{
          event.preventDefault()

          dispatch(setCommand({
               'command' : 'post',
               'form_id' : 'add-user-modal'
          }))
     }
     
     return(
          <Modal id="addUserModal">
               <ModalHeader title="Tambah pengguna"/>
               <ModalBody>
                    <form action="" onSubmit={handleSubmit} ref={formRef} id="add-user-modal">
                         <div>
                              <MDBInput label="username" id="username" type="text" className='mb-2' required/>
                              <MDBInput label="password" id="password" type="password" className='mb-2' required/>
                              <MDBInput label="konfirmasi password" id="confirm-password" type="password" className='mb-4' required/>
                         </div>

                         <div>
                              <MDBInput label="nama awal" id="first-name" type="text" className='mb-2' required/>
                              <MDBInput label="nama akhir" id="last-name" type="text" className='mb-2' required/>
                              <MDBInput label="alamat email" id="email-address" type="text" className='mb-4' required/>
                         </div>

                         <div>
                              <MDBCheckbox name='flexCheck' value='active' id='active' label='active' required/>
                              <MDBCheckbox name='flexCheck' value='active' id='is-superuser' label='super user status' required/>
                         </div>
                         <MDBInput label="nomor telepon" id="phone-number" type="text" className='mb-2 mt-4' required/>
                         
                         <label htmlFor="">foto profil</label>
                         <MDBInput type="file" id="file" className='mb-2' required/>
                    </form>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn color="secondary" data-bs-dismiss="modal" size="sm">Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' form="add-user-modal">Tambah pengguna</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default AddUserModal