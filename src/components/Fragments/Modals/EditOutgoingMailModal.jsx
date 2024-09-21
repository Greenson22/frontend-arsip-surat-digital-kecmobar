import React, { useRef } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

import { Modal, ModalHeader, ModalBody, ModalFooter } from "../../Elements/Modal"
import { useEditOutgoingMailModalEffect } from '../../../hooks/effects'
import { useDispatch } from 'react-redux';
import { setCommand } from '../../../redux/slices/commandSlice';

const EditOutgoingMailModal = (props)=>{
     const {letter} = props
     const formRef = useRef()
     const dispatch = useDispatch()

     const handleSubmit = (event)=>{
          event.preventDefault()
          dispatch(
               setCommand({
                    'command' : 'put',
                    'id' : letter.id,
                    'form_id' : 'edit-outgoingmail-form'
               })
          )
     }
     useEditOutgoingMailModalEffect(formRef, letter)
     
     return(
          <Modal id="edit-outgoingmail-modal">
               <ModalHeader title="Ubah surat keluar"/>
               <ModalBody>
                    <form action="" id='edit-outgoingmail-form' ref={formRef} onSubmit={handleSubmit}>
                         <div className="row">
                              <div className="col-6">
                                   <MDBInput id='agenda-number-edit' label="Nomor agenda" type="text" className='mb-2' defaultValue={' '}/>
                              </div>
                              <div className="col-6">
                                   <MDBInput id="letter-date-edit" label='Tanggal surat' type="date" className='mb-2' defaultValue={' '}/>
                              </div>
                         </div>
                         <MDBInput id="letter-number-edit" label='Nomor surat' type="text" className='mb-2' defaultValue={' '}/>
                         <MDBInput id="destination-edit" label='Tujuan surat' type="text" className='mb-2' defaultValue={' '}/>
                         <MDBInput id="subject-edit" label='Perihal' type="text" className='mb-2' defaultValue={' '}/>
                    </form>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn size='sm' color='secondary' data-bs-dismiss="modal">Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' form='edit-outgoingmail-form'>Simpan perubahan</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default EditOutgoingMailModal