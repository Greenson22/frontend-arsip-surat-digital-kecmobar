import React from "react"
import { useState, useEffect } from "react"
import { MDBBtn } from "mdb-react-ui-kit"

import {Card, CardHeader, CardBody} from '../Elements/Card'
import {Table, TableHead} from '../Elements/Table'

import EditProfileModal from "./Modals/EditProfileModal"
import EditPasswordModal from "./Modals/EditPasswordModal"

import profile_picture from '../../assets/images/avatar_female.jpeg'
import pengguna from "../../assets/data/pengguna.json"

const columns = ["Nama", "User", "Level", "Status", "Tanggal Register", "Nomor Telepon"]

const ProfileBox = ()=>{
   const [data, setData] = useState([])

   return (
      <div className="col-12 col-md-4">
         <Card>
            <CardHeader>
               <h5 className="card-title">Profil</h5>
               {/* <h5>{data[0].id}</h5> */}
            </CardHeader>
            <CardBody>
               <img className="mx-auto d-block w-50" src={profile_picture} alt=""/>
               <Table add_class="table-sm">
                  <TableHead columns={columns} rotate={true}></TableHead>
               </Table>
               <div className="d-grid">
                  <MDBBtn outline  color="primary" data-bs-toggle="modal" data-bs-target="#editProfileModal">Ubah Profil</MDBBtn>
                  <MDBBtn outline color="warning" className="mt-1" data-bs-toggle="modal" data-bs-target="#editPasswordModal">Ubah Password</MDBBtn>
               </div>
            </CardBody>
         </Card>

         {/* Modal */}
         {/* <EditProfileModal pengguna={data} i_pengguna={i_pengguna}/> */}
         <EditPasswordModal/>
      </div>
   )
}

export default ProfileBox