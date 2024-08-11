import React, { useRef } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import { useSubmitHandleEditIncomingMailModal, useEditIncomingMailModalEffect } from '../../../hooks'
import { useDispatch } from 'react-redux';

const EditIncomingMailModal = (props)=>{
     const {letter} = props
     const dispatch = useDispatch()
     const formRef = useRef()
     const onSubmitHandle = (event)=>{useSubmitHandleEditIncomingMailModal(event, letter, dispatch)}
     useEditIncomingMailModalEffect(formRef, letter)
     
     return(
          <Modal id="editMailModal">
               <ModalHeader title="Ubah surat masuk"/>
               <ModalBody>
                    <form action="" id='edit-incomingmail-form' onSubmit={onSubmitHandle} ref={formRef}>
                         <div className="row">
                              <div className="col-6">
                                   <MDBInput id='agenda-number' label="Nomor agenda" type="text" className='mb-3' defaultValue={' '}/>
                                   <MDBInput id='letter-number' label="Nomor surat" type="text" className='mb-3' defaultValue={' '}/>
                                   <MDBInput id='source' label="Asal surat" type="text" className='mb-3' defaultValue={' '}/>
                              </div>
                              <div className="col-6">
                                   <MDBInput id='letter-date' label="Tanggal surat" type="date" className='mb-3' defaultValue={' '}/>
                                   <MDBInput id='received-date' label="Tanggal terima" type="date" className='mb-3' defaultValue={' '}/>
                                   <MDBInput id='recipient' label="Penerima" type="text" className='mb-3' defaultValue={' '}/>
                              </div>
                         </div>
                         <MDBInput id='subject' label="Perihal" type="text" defaultValue={' '}/>
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