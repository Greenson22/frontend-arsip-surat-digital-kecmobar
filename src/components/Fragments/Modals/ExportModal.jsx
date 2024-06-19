import React from "react"
import { MDBBtn } from "mdb-react-ui-kit"

import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"

const ExportModal = (props)=>{
     const {title} = props
     return(
          <div>
               <Modal id="exportModal">
                    <ModalHeader title={title}/>
                    <ModalBody>
                         <div className="text-center">
                              <MDBBtn size="sm" color="success" className="me-2">Export PDF</MDBBtn>
                              <MDBBtn size="sm" color="success" className="me-2">Export CSV</MDBBtn>
                              <MDBBtn size="sm" color="success" className="me-2 mt-2">Export WORD</MDBBtn>
                              <MDBBtn size="sm" color="success" className="me-2 mt-2">Export EXCEL</MDBBtn>
                         </div>
                    </ModalBody>
               </Modal>
          </div>
     )
}

export default ExportModal