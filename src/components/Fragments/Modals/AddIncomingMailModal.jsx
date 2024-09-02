import React, { useRef, useState } from 'react';
import { MDBInput, MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import AnalisisIndicator from "../AnalisisIndicator"
import { setCommand } from '../../../redux/slices/commandSlice';
import { useDispatch } from 'react-redux';
import usePostData from '../../../hooks/request/usePostData';

const AddIncomingMailModal = ()=>{
     const dispatch = useDispatch()
     const previewRef = useRef()
     const inputFileRef = useRef()
     const formRef = useRef()
     const [analysis, setAnalysis] = useState(false)

     const handleSubmit = (event)=>{
          event.preventDefault()
          dispatch(setCommand({
               'command': 'post',
               'form_id' : 'add-incomingmail-form'
          }))
     }

     const handleInputFileChange = (event) =>{
          const inputFile = event.target
          const files = inputFile.files
          if (files.length > 0){
               const preview = previewRef.current
               const reader = new FileReader()
               reader.onload = ()=>{
                    preview.height = '100%'
                    preview.src = reader.result
               }
               reader.readAsDataURL(files[0])
          }

     }

     const handleBtnAnalisisClick = (event)=>{
          event.preventDefault()
          const files = inputFileRef.current.files
          
          if (files.length > 0){
               const letterNumber = formRef.current['letter-number']
               const source = formRef.current['source']
               const letterDate = formRef.current['letter-date']
               const reveivedDate = formRef.current['received-date']
               const subject = formRef.current['subject']
               const recipient = formRef.current['recipient']

               const formData = new FormData()
               formData.append('file', files[0])

               console.log('sedang menganalisa!!!')
               setAnalysis(true)
               usePostData(import.meta.env.VITE_GENAI_API_KEY, formData, localStorage.getItem('accessToken'), (response)=>{
                    const data = response.data
                    letterNumber.value = data?.letter_number
                    source.value = data?.source
                    recipient.value = data?.recipient
                    letterDate.value = data?.letter_date
                    reveivedDate.value = data?.received_date
                    subject.value = data?.subject
                    console.log(data)
                    setAnalysis(false)
               }, (error)=>{
                    console.log(error)
               })
          }
          
     }

     return(
          <Modal id="addMailModal">
               <ModalHeader title="Tambah surat masuk"/>
               <ModalBody>
                    <form action="" onSubmit={handleSubmit} id='add-incomingmail-form' ref={formRef}>
                         <label htmlFor="" className="from-label">Unggah file surat</label>
                         <br/><sub className="">*pdf, png, jpeg, jpg</sub>
                         
                         <MDBInputGroup>
                              {/* <input id='document' type="file" accept="application/pdf" className="form-control mt-2" required onChange={handleInputFileChange}/> */}
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
                                   <MDBInput id='letter-date' label="Tanggal surat" type="date" className='mb-2' required defaultValue={' '}/>
                                   <MDBInput id='received-date' label="Tanggal terima" type="date" className='mb-2' required defaultValue={' '}/>
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