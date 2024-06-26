import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import { MDBBtn } from 'mdb-react-ui-kit';

const ViewMailModal = (props)=>{
     const {title} = props
     return(
          <Modal id="viewMailModal">
               <ModalHeader title={title}/>
               <ModalBody>
                    <form action="">
                         
                    </form>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn size='sm' color='secondary' data-bs-dismiss="modal">Tutup</MDBBtn>
                    <MDBBtn size='sm' color='primary'>Simpan perubahan</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default ViewMailModal