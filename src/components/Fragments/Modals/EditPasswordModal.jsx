import React from "react"

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import { MDBInput, MDBBtn } from "mdb-react-ui-kit"

const EditPasswordModal = ()=>{
     return(
          <Modal id="editPasswordModal">
               <ModalHeader title="Ubah Password"/>
               <ModalBody>
                    <form action="">
                         <MDBInput label="Password lama" type="text" className='mb-2'/>
                         <MDBInput label="Password baru" type="text" className='mb-2'/>
                         <MDBInput label="Konfirmasi password baru" type="text" className='mb-2'/>
                    </form>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn color="secondary" size="sm" data-bs-dismiss="modal">Tutup</MDBBtn>
                    <MDBBtn color="warning" size="sm">Simpan Perubahan</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default EditPasswordModal