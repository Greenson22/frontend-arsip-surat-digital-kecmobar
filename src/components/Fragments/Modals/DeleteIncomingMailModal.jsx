import React, { useEffect } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import {Modal, ModalHeader, ModalFooter} from "../../Elements/Modal"

const DeleteIncomingMailModal = (props)=>{
     const {my_function} = props
     return (
          <div>
               <Modal id="deleteMailModal">
                    <ModalHeader title="Konfirmasi Hapus"/>
                    <ModalFooter>
                         <MDBBtn size='sm' color='primary' data-bs-dismiss="modal">Tidak</MDBBtn>
                         <MDBBtn size='sm' color='danger' data-bs-dismiss="modal" onClick={my_function}>Ya</MDBBtn>
                    </ModalFooter>
               </Modal>
          </div>
     )
}

export default DeleteIncomingMailModal