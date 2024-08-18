import React, { useEffect, useRef } from "react"

import { MDBInput, MDBBtn, MDBCheckbox } from "mdb-react-ui-kit"
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import { useAlert } from "../../../hooks"
import { useDispatch } from "react-redux"
import { setCommand } from "../../../redux/slices/commandSlice"

const EditProfileModal = (props)=>{
   const {user} = props
   const formRef = useRef()
   const dispatch = useDispatch()

   const handleSubmit = (event)=>{
      event.preventDefault()
      // useAlert('loading_change_user_information')
      dispatch(setCommand({
           'command': 'put',
           'form_id': 'edit-user-modal',
           'id': user.id
      }));
      
   }

   useEffect(()=>{
      formRef.current['username-edit'].value = user.username
      formRef.current['first-name-edit'].value = user.first_name
      formRef.current['last-name-edit'].value = user.last_name
      formRef.current['email-address-edit'].value = user.email
      formRef.current['is-active-edit'].checked = user.is_active
      formRef.current['is-superuser-edit'].checked = user.is_superuser
      formRef.current['phone-number-edit'].value = user.phone_number
   }, [])

   return(
      <Modal id="editProfileModal">
         <ModalHeader title="Ubah Profil"/>
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
               <MDBCheckbox name='flexCheck' id='is-active-edit' label='active'/>
               <MDBCheckbox name='flexCheck' id='is-superuser-edit' label='super user status'/>
            </div>
            <MDBInput label="nomor telepon" id="phone-number-edit" type="text" className='mb-2 mt-4' defaultValue={' '}/>
            
            <label htmlFor="">foto profil <p className="text-primary">*isi untuk mengganti foto profil</p></label>
            <MDBInput type="file" id="file-edit" className='mb-2'/>
         </form>
         </ModalBody>
         <ModalFooter>
            <MDBBtn size="sm" data-bs-dismiss="modal" color="secondary">Tutup</MDBBtn>
            <MDBBtn size="sm" color="warning" form="edit-user-modal">Simpan Perubahan</MDBBtn>
         </ModalFooter>
      </Modal>
     )
}

export default EditProfileModal