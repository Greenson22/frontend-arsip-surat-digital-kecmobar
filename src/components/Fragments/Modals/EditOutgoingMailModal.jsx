import React from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"

import AnalisisIndicator from "../AnalisisIndicator"

const EditOutgoingMailModal = (props)=>{
     const {letter} = props
     return(
          <Modal id="edit-outgoingmail-modal">
               <ModalHeader title="Ubah surat keluar"/>
               <ModalBody>
                    <form action="">
                         <div className="row">
                              <div className="col-6">
                                   <MDBInput id='agenda-number-edit' label="Nomor agenda" type="text" className='mb-2' defaultValue={' '}/>
                              </div>
                              <div className="col-6">
                                   <MDBInput label="letter-date-edit" type="text" className='mb-2' defaultValue={' '}/>
                              </div>
                         </div>
                         <MDBInput label="letter-number-edit" type="text" className='mb-2' defaultValue={' '}/>
                         <MDBInput label="destination-edit" type="text" className='mb-2' defaultValue={' '}/>
                         <MDBInput label="subject-edit" type="text" className='mb-2' defaultValue={' '}/>
                    </form>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn size='sm' color='secondary' data-bs-dismiss="modal">Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary' disabled>Simpan perubahan</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default EditOutgoingMailModal