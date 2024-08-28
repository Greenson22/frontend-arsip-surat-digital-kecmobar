import React from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"

import AnalisisIndicator from "../AnalisisIndicator"
import { useDispatch } from 'react-redux';
import { setCommand } from '../../../redux/slices/commandSlice';

const AddOutgoingMailModal = ()=>{
     const dispatch = useDispatch()

     const handleSubmit = (event)=>{
          event.preventDefault()
          dispatch(setCommand({
               'command': 'post',
               'form_id' : 'add-outgoingmail-form'
          }))
     }

     return(
          <Modal id="add-outgoingmail-modal">
               <ModalHeader title="Tambah surat keluar"/>
               <ModalBody>
                    <form action="" id='add-outgoingmail-form' onSubmit={handleSubmit}>
                         <label htmlFor="" className="from-label">Unggah file surat</label>
                         <br/><sub className="">*pdf, png, jpeg, jpg</sub>
                         <input id="document" type="file" accept="application/pdf" name="" className="form-control mt-2" required/>
                         <AnalisisIndicator/>
                         <hr className="mb-4"/>

                         <div className="row">
                              <div className="col-6">
                                   <MDBInput id="agenda-number" label="Nomor agenda" type="text" className='mb-2'/>
                                   <MDBInput id="letter-number" label="Nomor surat" type="text" className='mb-2' required/>
                              </div>
                              <div className="col-6">
                                   <MDBInput id="letter-date" label="Tanggal surat" type="date" className='mb-2' required/>
                                   <MDBInput id="destination" label="Tujuan surat" type="text" className='mb-2' required/>
                              </div>
                         </div>
                         <MDBInput id="subject" label="Perihal" type="text" className='mb-2' required/>
                    </form>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn size='sm' color='secondary' data-bs-dismiss="modal">Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' form='add-outgoingmail-form'>Tambah surat</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default AddOutgoingMailModal