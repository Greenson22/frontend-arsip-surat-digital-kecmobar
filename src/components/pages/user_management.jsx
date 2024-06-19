import React from "react"
import { useState, useEffect } from "react"

import Container from "../Layouts/ContainerLayout"
import {Card, CardHeader, CardBody} from "../Elements/Card"
import {Table, TableHead, TableBody, RowAction} from "../Elements/Table"

import TitleBar from '../Fragments/TitleBar'
import TableFilter from "../Fragments/TableFilter"
import TableAction from "../Fragments/TableAction"
import AddUserModal from "../Fragments/Modals/AddUserModal"
import ExportModal from "../Fragments/Modals/ExportModal"
import EditUserModal from "../Fragments/Modals/EditUserModal"

import pengguna from "../../assets/data/pengguna.json"
import ViewProfileModal from "../Fragments/Modals/ViewProfileModal"
const columns = ["No", "Nama", "Pengguna", "Tingkat", "Status", "Registrasi", "Tindakan"]

import axios from 'axios'
const url = 'http://localhost:8000/user_management/'

const UserManagementPage = ()=>{
     const [data, setData] = useState([])

     useEffect(()=>{
          axios.get(url)
          .then((response)=>{
               setData(response.data)
          })
          .catch((error)=>{
               // alert("Error")
          })
     }, [])

     return(
          <div>
               <TitleBar>Pengaturan pengguna</TitleBar>
               <Card>
                    <CardHeader>
                         <TableAction title="Daftar pengguna" button1="Tambah Pengguna" button1_target="#addUserModal" button2="Ekspor" button2_target="#exportModal"/>
                    </CardHeader>
                    <CardBody>
                         <TableFilter/>
                         <Table add_class="table-sm">
                              <TableHead columns = {columns}/>
                              <TableBody>
                                   {data.map((user, index)=>{
                                             return(
                                                  <tr key={user.id}>
                                                       <td>{index+1}</td>
                                                       <td>{user.first_name+' '+user.last_name}</td>
                                                       <td>{user.username}</td>
                                                       <td>{user.is_superuser ? 'admin' : 'user'}</td>
                                                       <td>{user.is_active ? 'aktif' : 'nonaktif'}</td>
                                                       <td>{user.date_joined}</td>
                                                       <td><RowAction ubah_target='#editUserModal' lihat_target='#viewProfileModal'/></td>
                                                  </tr>
                                             )
                                        })}
                              </TableBody>
                         </Table>
                    </CardBody>
               </Card>

               {/* Modal */}
               <AddUserModal/>
               <EditUserModal/>
               <ViewProfileModal pengguna={pengguna} i_pengguna='0'/>
               <ExportModal title="Ekspor daftar pengguna"/>
          </div>
     )
}

export default UserManagementPage