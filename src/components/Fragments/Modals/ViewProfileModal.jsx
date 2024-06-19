import React from "react"

import { MDBBtn } from "mdb-react-ui-kit"
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"
import {Table, TableHead} from "../../Elements/Table"

import profile_picture from "../../../assets/images/avatar_female.jpeg"
const columns = ["Nama", "User", "Level", "Status", "Tanggal Register", "Nomor Telepon"]

const ViewProfileModal = (props)=>{
   const {pengguna, i_pengguna=0} = props
   const datas = [pengguna[i_pengguna].nama, pengguna[i_pengguna].user, pengguna[i_pengguna].level, pengguna[i_pengguna].status, pengguna[i_pengguna].tanggal_register, pengguna[i_pengguna].nomor_telepon]
      return(
         <Modal id="viewProfileModal">
            <ModalHeader title="Profil"/>
            <ModalBody>
               <img className="mx-auto d-block w-50" src={profile_picture} alt=""/>
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