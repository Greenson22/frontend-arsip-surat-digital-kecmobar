import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import { MDBBtn } from 'mdb-react-ui-kit';

const ViewMailModal = (props)=>{
     const {title, fileUrl} = props
     return(
          <Modal id="viewMailModal" addClassToModalDialog="modal-fullscreen">
               <ModalHeader title={title}/>
               <ModalBody>
                    <div className="ratio ratio-16x9">
                         <iframe
                         src={fileUrl}
                         title="My Document"
                         allowfullscreen></iframe>
                    </div>
               </ModalBody>
               <ModalFooter>
                    {/* <MDBBtn size='sm' color='secondary' data-bs-dismiss="modal">Tutup</MDBBtn> */}
                    <MDBBtn size='sm' color='primary' onClick={()=>{
                         window.open(fileUrl, '_blank')
                    }}>Buka di tab baru</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default ViewMailModal