import React from "react"
import { MDBBtn, MDBInput } from "mdb-react-ui-kit"

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"

const AddUserModal = ()=>{
     return(
          <Modal id="addUserModal">
               <ModalHeader title="Tambah pengguna"/>
               <ModalBody>
                    <form action="">
                         <MDBInput label="Nama" type="text" className='mb-2'/>
                         <MDBInput label="User" type="text" className='mb-2'/>
                         <div>
                              <label htmlFor="" className="form-label">Level</label>
                              <select name="" className="form-select mb-3">
                                   <option value="admin">Administrator</option>
                                   <option value="user">User</option>
                                   <option value="spectator">Spectator</option>
                              </select>
                         </div>
                         <MDBInput label="Nomor telepon" type="text"/>
                    </form>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn color="secondary" data-bs-dismiss="modal" size="sm">Tutup</MDBBtn>
                    <MDBBtn color="primary" size="sm">Tambah surat</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default AddUserModal