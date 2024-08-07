import React, { useRef } from "react"
import { useState, useEffect } from "react"
import { MDBBtn } from "mdb-react-ui-kit"

import {Card, CardHeader, CardBody} from '../Elements/Card'
import {Table, TableHead} from '../Elements/Table'
import { useFormattedDate } from "../../hooks"

import EditPasswordModal from "./Modals/EditPasswordModal"


const ProfileBox = (props)=>{
   const {user, setCommand} = props
   const profileImgRef = useRef()
   const columns = ["Nama", "Pengguna", "Tingkat", "Status", "Tanggal Registrasi", "Nomor Telepon"]
   const datas = [user.first_name+' '+user.last_name, user.username, (user.is_superuser)?'aktif':'tidak aktif', (user.is_active)?'aktif':'tidak aktif', useFormattedDate(user.date_joined), user.phone_number]

   useEffect(()=>{
      profileImgRef.current.src = localStorage.getItem('myImage')
   }, [])
   
   return (
      <div className="col-12 col-md-12">
         <Card>
            <CardHeader>
               <h5 className="card-title">Profil</h5>
               {/* <h5>{data[0].id}</h5> */}
            </CardHeader>
            <CardBody>
               <img className="mx-auto d-block w-50" alt="" ref={profileImgRef}/>
               <Table add_class="table-sm">
                  <TableHead columns={columns} datas={datas} rotate={true}></TableHead>
               </Table>
               <div className="d-grid">
                  <MDBBtn outline  color="primary" data-bs-toggle="modal" data-bs-target="#editProfileModal">Ubah Profil</MDBBtn>
                  <MDBBtn outline color="warning" className="mt-1" data-bs-toggle="modal" data-bs-target="#editPasswordModal">Ubah Password</MDBBtn>
               </div>
            </CardBody>
         </Card>

         {/* Modal */}
         {/* <EditProfileModal pengguna={data} i_pengguna={i_pengguna}/> */}
         <EditPasswordModal user={user} setCommand={setCommand}/>
      </div>
   )
}

export default ProfileBox