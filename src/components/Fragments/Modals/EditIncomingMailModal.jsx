import React from 'react';
import { useState } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"

import AnalisisIndicator from "../AnalisisIndicator"

import axios from 'axios'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const EditIncomingMailModal = (props)=>{
     const {letter} = props

     return(
          <Modal id="editMailModal">
               <ModalHeader title="Ubah surat masuk"/>
               <ModalBody>
                    {letter && 
                         (
                              <form action="">
                                   <div className="row">
                                        <div className="col-6">
                                             <MDBInput label="Nomor agenda" type="text" className='mb-3' value={letter.agenda_number}/>
                                             
                                             <MDBInput label="Nomor surat" type="text" className='mb-3' value={letter.letter_number}/>
                                             <MDBInput label="Asal surat" type="text" className='mb-3' value={letter.source.name}/>
                                        </div>
                                        <div className="col-6">
                                             <MDBInput label="Tanggal surat" type="text" className='mb-3' value={letter.letter_date}/>
                                             <MDBInput label="Tanggal terima" type="text" className='mb-3' value={letter.received_date}/>
                                             <MDBInput label="Penerima" type="text" className='mb-3' value={letter.recipient.name}/>
                                        </div>
                                   </div>
                                   <MDBInput label="Perihal" type="text" value={letter.subject}/>
                                   <hr className="mb-4"/>
                                   <label htmlFor="" className="from-label">Unggah file surat</label>
                                   <br/><sub className="">*pdf, png, jpeg, jpg</sub>
                                   <input type="file" name="" className="form-control mt-2"/>
                                   <AnalisisIndicator/>
                              </form>         
                         )
                    }
               </ModalBody>
               <ModalFooter>
                    <MDBBtn size='sm' color='secondary' data-bs-dismiss="modal">Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' disabled>Simpan perubahan</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default EditIncomingMailModal