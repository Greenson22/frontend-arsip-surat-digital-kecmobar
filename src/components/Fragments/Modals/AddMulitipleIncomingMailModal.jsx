import React, { useRef, useState } from "react"
import { MDBBtn, MDBInput, MDBInputGroup, MDBModalBody, MDBModalFooter } from "mdb-react-ui-kit"
import { ListGroup } from '../List'
import { useDispatch } from "react-redux"
import { ModalV2, ModalHeader } from "../../Elements/ModalV2"
import { useHandleBtnAnalysClick, useHandleBtnPostClick, useHandleInputFileChange } from '../../../hooks/handle/add_multiple_incomingmail_modal'

const AddMultipleIncomingMailModal = (props) => {
     const { addMultipleModal, setMultipleModal } = props
     const [fileList, setFileList] = useState(null)
     const [fileNote, setFileNote] = useState(null)
     const inputFileRef = useRef()
     const dispatch = useDispatch()

     const handleInputFileChange = (event)=>{useHandleInputFileChange(event, setFileList, setFileNote)}
     const handleBtnAnalysClick = (event)=>{useHandleBtnAnalysClick(event, fileNote, fileList, setFileNote)}
     const handleBtnPostClick = (event)=>{useHandleBtnPostClick(event, fileNote, dispatch)}
     return (
          <ModalV2 open={addMultipleModal} >
               <ModalHeader title='Tambah beberapa surat' />
               <MDBModalBody>
                    <MDBInputGroup className="mb-2">
                         <MDBInput id="input-file" type="file" multiple ref={inputFileRef} accept="application/pdf" onChange={handleInputFileChange}></MDBInput>
                         <MDBBtn size="sm" onClick={handleBtnAnalysClick}>Analisa</MDBBtn>
                    </MDBInputGroup>

                    {fileNote != null && <ListGroup fileNote={fileNote} />}
               </MDBModalBody>
               <MDBModalFooter>
                    <MDBBtn size='sm' color='secondary' onClick={()=>setMultipleModal(false)}>Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' onClick={handleBtnPostClick}>Tambah semua surat</MDBBtn>
               </MDBModalFooter>
          </ModalV2>
     )
}

export default AddMultipleIncomingMailModal