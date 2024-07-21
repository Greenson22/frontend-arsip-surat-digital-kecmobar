import React, { useEffect, useRef } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import { MDBBtn } from 'mdb-react-ui-kit';
import { useFetchFile } from '../../../hooks';

const ViewMailModal = (props)=>{
     const {title, command} = props
     const iframeRef = useRef()

     useEffect(()=>{
          if (command && command.command == 'view_file'){
               const accessToken = localStorage.getItem('accessToken')
               useFetchFile('http://localhost:8000/incoming_mail/'+command.id+'/file/', accessToken, (response)=>{
                    const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }))
                    iframeRef.current.src = url
               })
          }
     }, [command])

     function  handleNewTab(){
          window.open(iframeRef.current.src)
     }

     return(
          <Modal id="viewMailModal" addClassToModalDialog="modal-fullscreen">
               <ModalHeader title={title}/>
               <ModalBody>
                    <div className="ratio ratio-16x9">
                         <iframe title="My Document" allowFullScreen ref={iframeRef}></iframe>
                    </div>
               </ModalBody>
               <ModalFooter>
                    <MDBBtn size='sm' color='primary' onClick={handleNewTab}>Buka di tab baru</MDBBtn>
               </ModalFooter>
          </Modal>
     )
}

export default ViewMailModal