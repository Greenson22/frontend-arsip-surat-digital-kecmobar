import React from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import AnalisisIndicator from "../AnalisisIndicator"

const EditIncomingMailModal = (props)=>{
     const {letter, setCommand} = props

     const form_name = 'editIncomingMailForm'
     const agenda_number = 'agenda_number'
     const letter_number = 'letter_number'
     const source = 'source'
     const letter_date = 'letter_date'
     const received_date = 'received_date'
     const recipient = 'recipient'
     const subject = 'subject'

     const init_data = ()=>{
          const form = document.getElementById(form_name)
          form.querySelector('#'+agenda_number).value = letter.agenda_number
          form.querySelector('#'+letter_number).value = letter.letter_number
          form.querySelector('#'+source).value = letter.source
          form.querySelector('#'+letter_date).value = letter.letter_date
          form.querySelector('#'+received_date).value = letter.received_date
          form.querySelector('#'+recipient).value = letter.recipient
          form.querySelector('#'+subject).value = letter.subject
     }

     const send_data = ()=>{
          const form = document.getElementById(form_name)
          setCommand({
               'command': 'put',
               'id': letter.id,
               'data': {'agenda_number': form.querySelector('#'+agenda_number).value,
                    'letter_number':  form.querySelector('#'+letter_number).value,
                    'received_date':  form.querySelector('#'+received_date).value,
                    'source':  form.querySelector('#'+source).value,
                    'letter_date': form.querySelector('#'+letter_date).value,
                    'recipient': form.querySelector('#'+recipient).value,
                    'subject': form.querySelector('#'+subject).value,},
          })
     }
     
     return(
          <Modal id="editMailModal">
               <ModalHeader title="Ubah surat masuk"/>
               <ModalBody>
                    <form action="" id='editIncomingMailForm'>
                         <div className="row">
                              <div className="col-6">
                                   <MDBInput id='agenda_number' label="Nomor agenda" type="text" className='mb-3' defaultValue={letter.agenda_number}/>
                                   <MDBInput id='letter_number' label="Nomor surat" type="text" className='mb-3' defaultValue={letter.letter_number}/>
                                   <MDBInput id='source' label="Asal surat" type="text" className='mb-3' defaultValue={letter.source}/>
                              </div>
                              <div className="col-6">
                                   <MDBInput id='letter_date' label="Tanggal surat" type="date" className='mb-3' defaultValue={letter.letter_date}/>
                                   <MDBInput id='received_date' label="Tanggal terima" type="date" className='mb-3' defaultValue={letter.received_date}/>
                                   <MDBInput id='recipient' label="Penerima" type="text" className='mb-3' defaultValue={letter.recipient}/>
                              </div>
                         </div>
                         <MDBInput id='subject' label="Perihal" type="text" defaultValue={letter.subject}/>

                         <hr className="mb-4"/>
                         <label htmlFor="" className="from-label">Unggah file surat</label>
                         <br/><sub className="">*pdf, png, jpeg, jpg</sub>
                         <input type="file" name="" className="form-control mt-2"/>
                         <AnalisisIndicator/>
                    </form>
                    {document.getElementById('received_date') && init_data()}
               </ModalBody>
               <ModalFooter>
                    <MDBBtn size='sm' color='secondary' data-bs-dismiss="modal">Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' data-bs-dismiss="modal" onClick={send_data}>Simpan perubahan</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default EditIncomingMailModal