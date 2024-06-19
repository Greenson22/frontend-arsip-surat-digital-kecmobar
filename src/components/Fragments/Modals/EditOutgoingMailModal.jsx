import React from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"

import AnalisisIndicator from "../AnalisisIndicator"

const EditOutgoingMailModal = (props)=>{
     const {data} = props
     return(
          <Modal id="editOutgoingMailModal">
               <ModalHeader title="Ubah surat keluar"/>
               <ModalBody>
                    <form action="">
                         <div className="row">
                              <div className="col-6">
                                   <MDBInput label="Nomor agenda" type="text" className='mb-2' value={data[0].nomor_agenda}/>
                              </div>
                              <div className="col-6">
                                   <MDBInput label="Tanggal surat" type="text" className='mb-2' value={data[0].tanggal_surat}/>
                              </div>
                         </div>
                         <MDBInput label="Nomor surat" type="text" className='mb-2' value={data[0].nomor_surat}/>
                         <MDBInput label="Tujuan surat" type="text" className='mb-2' value={data[0].tujuan_surat}/>
                         <MDBInput label="Perihal" type="text" className='mb-2' value={data[0].perihal}/>
                         
                         <hr className="mb-4"/>

                         <label htmlFor="" className="from-label">Unggah file surat</label>
                         <br/><sub className="">*pdf, png, jpeg, jpg</sub>
                         <input type="file" name="" className="form-control mt-2"/>
                         <AnalisisIndicator/>
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