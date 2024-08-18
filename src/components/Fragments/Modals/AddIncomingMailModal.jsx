import React from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import AnalisisIndicator from "../AnalisisIndicator"
import { useFormDataIncomingmail } from '../../../hooks'
import { setCommand } from '../../../redux/slices/commandSlice';
import { useDispatch } from 'react-redux';

const AddIncomingMailModal = ()=>{
     const dispatch = useDispatch()

     const handleSubmit = (event)=>{
          event.preventDefault()
          const form = event.target
          dispatch(setCommand({
               'command': 'post',
               'form_id' : 'add-incomingmail-form'
          }))
     }

     return(
          <Modal id="addMailModal">
               <ModalHeader title="Tambah surat masuk"/>
               <ModalBody>
                    <form action="" onSubmit={handleSubmit} id='add-incomingmail-form'>
                         <label htmlFor="" className="from-label">Unggah file surat</label>
                         <br/><sub className="">*pdf, png, jpeg, jpg</sub>
                         <input id='document' type="file" className="form-control mt-2" required/>
                         <AnalisisIndicator/>
                         <hr className="mb-4"/>

                         <div className="row">
                              <div className="col-6">
                                   <MDBInput id='agenda-number' label="Nomor agenda" type="text" className='mb-2'/>
                                   <MDBInput id='letter-number' label="Nomor surat" type="text" className='mb-2' required/>
                                   <MDBInput id='source' label="Asal surat" type="text" className='mb-2' required/>
                              </div>
                              <div className="col-6">
                                   <MDBInput id='letter-date' label="Tanggal surat" type="date" className='mb-2' required/>
                                   <MDBInput id='received-date' label="Tanggal terima" type="date" className='mb-2' required/>
                                   <MDBInput id='recipient' label="Penerima" type="text" className='mb-2' required/>
                              </div>
                         </div>
                         <MDBInput id='subject' label="Perihal" type="text" required/>
                    </form>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn size='sm' color='secondary' data-bs-dismiss="modal">Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' form='add-incomingmail-form'>Tambah surat</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default AddIncomingMailModal