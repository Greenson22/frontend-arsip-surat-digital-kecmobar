import React, { useRef } from "react"

import { MDBBtn } from "mdb-react-ui-kit"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "../../Elements/Modal"
import { Table, TableHead } from "../../Elements/Table"
import useViewProfileModalEffect from "../../../hooks/effects/useViewProfileModalEffect"



const ViewProfileModal = (props)=>{
   const {user, command} = props
   const columns = ["Nama", "Username", "Superuser status", "Status", "Tanggal Register", "Nomor Telepon"]
   const imgRef = useRef()
   const datas = [user.first_name+' '+user.last_name, user.username, (user.is_superuser)?'aktif':'tidak aktif', (user.is_active)?'aktif':'tidak aktif', user.date_joined, user.phone_number]
   
   useViewProfileModalEffect(command, imgRef)

   return(
         <Modal id="viewProfileModal">
            <ModalHeader title="Profil"/>
            <ModalBody>
               <img className="mx-auto d-block w-50" alt="" ref={imgRef}/>
               <Table add_class="table-sm">
                  <TableHead columns={columns} datas={datas} rotate={true}></TableHead>
               </Table>
            </ModalBody>
            <ModalFooter>
               <MDBBtn size="sm" data-bs-dismiss="modal" color="secondary">Tutup</MDBBtn>
               <MDBBtn size="sm" color="warning">Simpan Perubahan</MDBBtn>
            </ModalFooter>
         </Modal>
     )
}

export default ViewProfileModal