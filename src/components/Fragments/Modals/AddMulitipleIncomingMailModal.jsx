import React, { useRef, useState } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "../../Elements/Modal"
import { MDBBtn, MDBInput, MDBInputGroup } from "mdb-react-ui-kit"
import { ListGroup } from '../List'
import { usePostData } from "../../../hooks"
import { useDispatch } from "react-redux"
import { setCommand } from "../../../redux/slices/commandSlice"

const AddMultipleIncomingMailModal = () => {
     const [fileList, setFileList] = useState(null)
     const [fileNote, setFileNote] = useState(null)
     const inputFileRef = useRef()
     const dispatch = useDispatch()

     const handleInputFileChange = (event) => {
          const files = Array.from(event.target.files)
          const notes = []
          files.map((file, index) => {
               file.entities = null
               notes.push({
                    'name': file.name,
                    'entities': null,
                    'status': null,
               })
          })
          setFileList([...files])
          setFileNote([...notes])
          console.log('file list dibuat dengan entities kosong')
     }
     const handleBtnAnalysClick = (event) => {
          const duplicateFileNote = fileNote.slice()

          fileList.map((file, index) => {
               const formData = new FormData()
               formData.append('file', fileList[index])
               console.log('sedang menganalisa beberapa file')

               duplicateFileNote[index].status = 'loading'
               setFileNote(duplicateFileNote)

               usePostData(import.meta.env.VITE_GENAI_API_KEY, formData, localStorage.getItem('accessToken'), (response) => {
                    const duplicateFileNoteResponse = fileNote.slice()
                    const data = response.data
                    duplicateFileNoteResponse[index].entities = data.entities
                    duplicateFileNoteResponse[index].status = 'check'
                    setFileNote(duplicateFileNoteResponse)
                    console.log('satu proses selesai')
               }, (error)=>{
                    const duplicateFileNoteResponse = fileNote.slice()
                    duplicateFileNote[index].status = 'fail'
                    setFileNote(duplicateFileNoteResponse)
                    console.log('satu proses gagal')
               })
          })
     }
     const handleBtnPostClick = (event) => {
          const duplicateFileNote = fileNote.slice()
          dispatch(setCommand({
               'command': 'multiple_post',
               'file_note': fileNote,
               'form_id': 'input_id'
          }))
     }
     return (
          <Modal id="add-multiple-mail-modal">
               <ModalHeader title='Tambah beberapa surat' />
               <ModalBody>
                    <MDBInputGroup className="mb-2">
                         <MDBInput id="input-file" type="file" multiple ref={inputFileRef} accept="application/pdf" onChange={handleInputFileChange}></MDBInput>
                         <MDBBtn size="sm" onClick={handleBtnAnalysClick}>Analisa</MDBBtn>
                    </MDBInputGroup>

                    {fileNote != null && <ListGroup fileNote={fileNote} />}
               </ModalBody>
               <ModalFooter>
                    <MDBBtn size='sm' color='secondary' data-bs-dismiss="modal">Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' data-bs-dismiss="modal" onClick={handleBtnPostClick}>Tambah semua surat</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default AddMultipleIncomingMailModal