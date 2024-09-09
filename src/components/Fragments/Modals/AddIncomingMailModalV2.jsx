import React, { useRef, useState } from "react"
import { MDBModalBody, MDBModalFooter, MDBBtn, MDBInputGroup, MDBInput } from "mdb-react-ui-kit"
import { ModalV2, ModalHeader} from "../../Elements/ModalV2"
import AnalisisIndicator from "../AnalisisIndicator"
import { useHandleSubmit, useHandleInputFileChange, useHandleBtnAnalysis } from "../../../hooks/handle/add_incomingmail_modal"
import { useDispatch } from "react-redux"

const AddIncomingMailModalV2 = (props)=>{
     const { addModal, setAddModal, setMultipleModal } = props
     const dispatch = useDispatch()
     const formRef = useRef()
     const inputFileRef = useRef()
     const previewRef = useRef()
     const [analysis, setAnalysis] = useState(false)

     const handleSubmit = (event)=>{useHandleSubmit(event, setAddModal, dispatch)}
     const handleInputFileChange = (event)=>{useHandleInputFileChange(event, previewRef)}
     const handleBtnAnalisisClick = (event)=>{useHandleBtnAnalysis(event, inputFileRef, formRef, setAnalysis)}
     
     return (
          <ModalV2 open={addModal} onClose={()=>{setAddModal(!addModal)}}>
               <ModalHeader title="Tambah surat masuk"/>
               <MDBModalBody>
               <form action="" onSubmit={handleSubmit} id='add-incomingmail-form' ref={formRef}>
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
               </MDBModalBody>
               <MDBModalFooter>
                    <MDBBtn size='sm' onClick={()=>{
                         setAddModal(false)
                         setMultipleModal(true)}}>Surat-surat</MDBBtn>
                    <div className="ms-auto">
                         <MDBBtn size='sm' color='secondary' onClick={()=>{setAddModal(!addModal)}}>Tutup</MDBBtn>
                         <MDBBtn size='sm' color='primary' form="add-incomingmail-form">Tambah surat</MDBBtn>
                    </div>
               </MDBModalFooter>
          </ModalV2>
     )
}

export default AddIncomingMailModalV2