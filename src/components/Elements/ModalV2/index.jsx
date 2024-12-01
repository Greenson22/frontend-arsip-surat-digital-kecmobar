import React from "react"
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader } from "mdb-react-ui-kit"

export const ModalV2 = (props)=>{
     const { children, open, onClose } = props
     return (
          <MDBModal open={open} onClose={onClose}>
               <MDBModalDialog>
                    <MDBModalContent>
                         {children}
                    </MDBModalContent>
               </MDBModalDialog>
          </MDBModal>
     )
}

export const ModalHeader = (props)=>{
     const {children, title} = props
     return(
          <MDBModalHeader>
               {children}
               <h1 className="modal-title fs-5">{title}</h1>
          </MDBModalHeader>
     )
}