import React, { useRef } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import { useEditIncomingMailModalEffect } from '../../../hooks'
import { useDispatch } from 'react-redux';
import { setCommand } from '../../../redux/slices/commandSlice';

const EditIncomingMailModal = (props)=>{
     const {letter} = props
     const formRef = useRef()
     const dispatch = useDispatch()

     const handleSubmit = (event)=>{
          event.preventDefault()
          dispatch(
               setCommand({
                    'command' : 'put',
                    'id' : letter.id,
                    'form_id' : 'edit-incomingmail-form'
               })
          )
     }
     useEditIncomingMailModalEffect(formRef, letter)
     
     return(
          <Modal id="editMailModal">
               <ModalHeader title="Ubah surat masuk"/>
               <ModalBody>
                    <form action="" id='edit-incomingmail-form' onSubmit={handleSubmit} ref={formRef}>
                         <div className="row">
                              <div className="col-6">
                                   <MDBInput id='agenda-number-edit' label="Nomor agenda" type="text" className='mb-3' defaultValue={' '}/>
                                   <MDBInput id='letter-number-edit' label="Nomor surat" type="text" className='mb-3' defaultValue={' '}/>
                                   <MDBInput id='source-edit' label="Asal surat" type="text" className='mb-3' defaultValue={' '}/>
                              </div>
                              <div className="col-6">
                                   <MDBInput id='letter-date-edit' label="Tanggal surat" type="date" className='mb-3' defaultValue={' '}/>
                                   <MDBInput id='received-date-edit' label="Tanggal terima" type="date" className='mb-3' defaultValue={' '}/>
                                   <MDBInput id='recipient-edit' label="Penerima" type="text" className='mb-3' defaultValue={' '}/>
                              </div>
                         </div>
                         <MDBInput id='subject-edit' label="Perihal" type="text" defaultValue={' '}/>
                    </form>

               </ModalBody>
               <ModalFooter>
                    <MDBBtn size='sm' color='secondary' data-bs-dismiss="modal">Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' data-bs-dismiss="modal" form='edit-incomingmail-form'>Simpan perubahan</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default EditIncomingMailModal