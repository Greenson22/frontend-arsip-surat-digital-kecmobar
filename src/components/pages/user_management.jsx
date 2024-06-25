import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import {Card, CardHeader, CardBody} from "../Elements/Card"
import {Table, TableHead, TableBody, RowAction} from "../Elements/Table"
import { TitleBar, TableFilter, TableAction, AddUserModal, ExportModal, EditUserModal } from '../Fragments'

import pengguna from "../../assets/data/pengguna.json"
import ViewProfileModal from "../Fragments/Modals/ViewProfileModal"
import fetchData from '../../hooks/useFetchData'

const UserManagementPage = ()=>{
     const columns = ["No", "Nama", "Pengguna", "Tingkat", "Status", "Registrasi", "Tindakan"]
     const [data, setData] = useState([])
     const token = useSelector((state) => state.auth.token)
     const usermanagement_api = useSelector((state) => state.api.usermanagement)

     useEffect(()=>{
          fetchData(usermanagement_api, token, (response)=>{
               setData(response.data)
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