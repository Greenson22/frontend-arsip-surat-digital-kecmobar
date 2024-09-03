import React, { useRef, useState } from 'react';
import { MDBInput, MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import AnalisisIndicator from "../AnalisisIndicator"
import { useDispatch } from 'react-redux';
import { useHandleBtnAnalysis, useHandleInputFileChange, useHandleSubmit } from '../../../hooks/handle/add_incomingmail_modal';

const AddIncomingMailModal = ()=>{
     const dispatch = useDispatch()
     const previewRef = useRef()
     const inputFileRef = useRef()
     const formRef = useRef()
     const [analysis, setAnalysis] = useState(false)

     const handleSubmit = (event)=>{useHandleSubmit(event. dispatch)}
     const handleInputFileChange = (event)=>{useHandleInputFileChange(event, previewRef)}
     const handleBtnAnalisisClick = (event)=>{useHandleBtnAnalysis(event, inputFileRef, formRef, setAnalysis)}

     return(
          <Modal id="addMailModal">
               <ModalHeader title="Tambah surat masuk"/>
               <ModalBody>
                    <form action="" onSubmit={handleSubmit} id='add-incomingmail-form' ref={formRef}>
                         <label htmlFor="" className="from-label">Unggah file surat</label>
                         <br/><sub className="">*pdf, png, jpeg, jpg</sub>
                         
                         <MDBInputGroup>
                              <MDBInput id='document' type='file' accept="application/pdf" required onChange={handleInputFileChange} ref={inputFileRef} ></MDBInput>
                              <MDBBtn size='sm' onClick={handleBtnAnalisisClick} type='button'>Analisis</MDBBtn>
                         </MDBInputGroup>
                         
                         <AnalisisIndicator isActive={analysis}/>
                         <iframe width={'100%'} height={'0px'} ref={previewRef}></iframe>
                         <hr className="mb-4"/>

                         <div className="row">
                              <div className="col-6">
                                   <MDBInput id='agenda-number' label="Nomor agenda" type="text" className='mb-2' defaultValue={' '}/>
                                   <MDBInput id='letter-number' label="Nomor surat" type="text" className='mb-2' required defaultValue={' '}/>
                                   <MDBInput id='source' label="Asal surat" type="text" className='mb-2' required defaultValue={' '}/>
                              </div>
                              <div className="col-6">
                                   <MDBInput id='letter-date' label="Tanggal surat" type="date" className='mb-2' required/>
                                   <MDBInput id='received-date' label="Tanggal terima" type="date" className='mb-2' required/>
                                   <MDBInput id='recipient' label="Penerima" type="text" className='mb-2' required defaultValue={' '}/>
                              </div>
                         </div>
                         <MDBInput id='subject' label="Perihal" type="text" required defaultValue={' '}/>
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