import React, { useRef, useState } from 'react';
import { MDBInput, MDBBtn, MDBModalBody, MDBModalFooter, MDBInputGroup } from 'mdb-react-ui-kit';

import AnalisisIndicator from "../AnalisisIndicator"
import { useDispatch } from 'react-redux';
import { setCommand } from '../../../redux/slices/commandSlice';

import { ModalV2, ModalHeader } from '../../Elements/ModalV2';
import { useHandleInputFileChange } from '../../../hooks/handle/add_incomingmail_modal';
import { useHandleBtnAnalysis } from '../../../hooks/handle/add_outgoingmail_modal';

const AddOutgoingMailModal = (props)=>{
     const { addModal, setAddModal, setMultipleModal } = props
     const dispatch = useDispatch()
     const [analysis, setAnalysis] = useState(false)
     const inputFileRef = useRef()
     const formRef = useRef()
     const previewRef = useRef()

     const handleSubmit = (event)=>{
          event.preventDefault()
          dispatch(setCommand({
               'command': 'post',
               'form_id' : 'add-outgoingmail-form'
          }))
          setAddModal(false)
     }
     const handleBtnAnalisisClick = (event)=>{useHandleBtnAnalysis(event, inputFileRef, formRef, setAnalysis)}
     const handleInputFileChange = (event)=>{useHandleInputFileChange(event, previewRef)}

     return(
          <ModalV2 open={addModal} onClose={(event)=>setAddModal(false)}>
               <ModalHeader title="Tambah surat keluar"/>
               <MDBModalBody>
                    <form action="" id='add-outgoingmail-form' onSubmit={handleSubmit} ref={formRef}>
                         <label htmlFor="" className="from-label">Unggah file surat *.pdf</label>
                         <MDBInputGroup>
                              <MDBInput id='document' type='file' accept="application/pdf" required onChange={handleInputFileChange} ref={inputFileRef} ></MDBInput>
                              <MDBBtn size='sm' onClick={handleBtnAnalisisClick} type='button'>Analisa</MDBBtn>
                         </MDBInputGroup>

                         <AnalisisIndicator isActive={analysis}/>
                         <iframe width={'100%'} height={'0px'} ref={previewRef}></iframe>
                         <hr className="mb-4"/>

                         <div className="row">
                              <div className="col-6">
                                   <MDBInput id="agenda-number" label="Nomor agenda" type="text" className='mb-2'/>
                                   <MDBInput id="letter-number" label="Nomor surat" type="text" className='mb-2' required defaultValue={' '}/>
                              </div>
                              <div className="col-6">
                                   <MDBInput id="letter-date" label="Tanggal surat" type="date" className='mb-2' required/>
                                   <MDBInput id="destination" label="Tujuan surat" type="text" className='mb-2' required defaultValue={' '}/>
                              </div>
                         </div>
                         <MDBInput id="subject" label="Perihal" type="text" className='mb-2' required defaultValue={' '}/>
                    </form>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn size='sm' onClick={()=>{
                         setAddModal(false)
                         setMultipleModal(true)}}>Surat-surat</MDBBtn>
                    <div className="ms-auto">
                         <MDBBtn size='sm' color='secondary' onClick={()=>{setAddModal(!addModal)}}>Tutup</MDBBtn>
                         <MDBBtn size='sm' color='primary' form="add-outgoingmail-form">Tambah surat</MDBBtn>
                    </div>
                </MDBModalFooter> 
          </ModalV2>
     )
}

export default AddOutgoingMailModal