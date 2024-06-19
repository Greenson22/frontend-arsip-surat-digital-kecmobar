import React from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"

import Input from "../Input"
import AnalisisIndicator from "../AnalisisIndicator"

const AddOutgoingMailModal = ()=>{
     return(
          <Modal id="addOutgoingMailModal">
               <ModalHeader title="Tambah surat keluar"/>
               <ModalBody>
                    <form action="">
                         <label htmlFor="" className="from-label">Unggah file surat</label>
                         <br/><sub className="">*pdf, png, jpeg, jpg</sub>
                         <input type="file" name="" className="form-control mt-2"/>
                         <AnalisisIndicator/>
                         <hr className="mb-4"/>

                         <div className="row">
                              <div className="col-6">
                                   <MDBInput label="Nomor agenda" type="text" className='mb-2'/>
                                   <MDBInput label="Nomor surat" type="text" className='mb-2'/>
                              </div>
                              <div className="col-6">
                                   <MDBInput label="Tanggal surat" type="text" className='mb-2'/>
                                   <MDBInput label="Tujuan surat" type="text" className='mb-2'/>
                              </div>
                         </div>
                         <MDBInput label="Perihal" type="text" className='mb-2'/>
                    </form>
               </ModalBody>
               <ModalFooter>
               <MDBBtn size='sm' color='secondary' data-bs-dismiss="modal">Tutup</MDBBtn>
               <MDBBtn size='sm' color='primary' disabled>Tambah surat</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default AddOutgoingMailModal