import React from "react"

import { MDBInput, MDBBtn } from "mdb-react-ui-kit"
import {Modal, ModalHeader, ModalBody, ModalFooter} from "../../Elements/Modal"

const EditProfileModal = (props)=>{
   const {pengguna, i_pengguna} = props
      return(
         <Modal id="editProfileModal">
            <ModalHeader title="Ubah Profil"/>
            <ModalBody>
               <form action="">
                  <MDBInput label="Nama" type="text" className='mb-2' value={pengguna[i_pengguna].nama}/>
                  <MDBInput label="Pengguna" type="text" className='mb-2' disabled value={pengguna[i_pengguna].user}/>
                  <label htmlFor="" className='form-label'>Foto</label>
                  <input type="file" name="" id="tiga" className="form-control"/>
               </form>
            </ModalBody>
            <ModalFooter>
               <MDBBtn size="sm" data-bs-dismiss="modal" color="secondary">Tutup</MDBBtn>
               <MDBBtn size="sm" color="warning">Simpan Perubahan</MDBBtn>
            </ModalFooter>
         </Modal>
     )
}

export default EditProfileModal