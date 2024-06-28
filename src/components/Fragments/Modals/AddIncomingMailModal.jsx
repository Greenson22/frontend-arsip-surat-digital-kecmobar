import React from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import AnalisisIndicator from "../AnalisisIndicator"

const AddIncomingMailModal = ()=>{

     return(
          <Modal id="addMailModal">
               <ModalHeader title="Tambah surat masuk"/>
               <ModalBody>
                    <form action="">
                         <label htmlFor="" className="from-label">Unggah file surat</label>
                         <br/><sub className="">*pdf, png, jpeg, jpg</sub>
                         <input type="file" name="" className="form-control mt-2"/>
                         <AnalisisIndicator/>
                         <hr className="mb-4"/>

                         <div className="row">
                              <div className="col-6">
                                   <MDBInput id='agenda_number' label="Nomor agenda" type="text" className='mb-2'/>
                                   <MDBInput id='letter_number' label="Nomor surat" type="text" className='mb-2'/>
                                   <MDBInput id='source' label="Asal surat" type="text" className='mb-2'/>
                              </div>
                              <div className="col-6">
                                   <MDBInput id='letter_date' label="Tanggal surat" type="date" className='mb-2'/>
                                   <MDBInput id='received_date' label="Tanggal terima" type="date" className='mb-2'/>
                                   <MDBInput id='recipient' label="Penerima" type="text" className='mb-2'/>
                              </div>
                         </div>
                         <MDBInput id='subject' label="Perihal" type="text" />
                    </form>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn size='sm' color='secondary' data-bs-dismiss="modal">Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' disabled>Tambah surat</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default AddIncomingMailModal