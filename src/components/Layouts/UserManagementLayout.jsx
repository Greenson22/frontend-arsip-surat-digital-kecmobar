import React, { useState } from "react"
import { MDBBtn } from "mdb-react-ui-kit"
import { Card, CardHeader, CardBody } from "../Elements/Card"
import { Table, TableHead } from "../Elements/Table"
import { TitleBar, TableFilter, TableAction, UserManagementTableBody,
     AddUserModal, ExportModal, EditUserModal } from '../Fragments'

import ViewProfileModal from "../Fragments/Modals/ViewProfileModal"
import { useSetPage } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"

const UserManagementLayout = (props)=>{
     const api = import.meta.env.VITE_USERS_API_KEY
     const {data} = props
     const iData = useSelector(state => state.dataSlice.iData)
     const columns = ["No", "Nama", "Pengguna", "Tingkat", "Status", "Registrasi", "Tindakan"]
     const dispatch = useDispatch()
     const [addModal, setAddModal] = useState(false)
     
     return (
          <div>
               <TitleBar>Pengaturan pengguna</TitleBar>
               <Card>
                    <CardHeader>
                    <TableAction title="Tambah pengguna baru" buttonChildren="Tambah Pengguna" buttonClick={()=>{setAddModal(true)}}/>
                    </CardHeader>
                    <CardBody>
                         <TableFilter api={api}/>
                         <Table add_class="table-sm">
                              <TableHead columns = {columns}/>
                              <UserManagementTableBody data={data['results']} />
                         </Table>
                         <MDBBtn onClick={() => { useSetPage(data['previous'], dispatch) } }>prev</MDBBtn>
                         <MDBBtn onClick={() => { useSetPage(data['next'], dispatch) } }>next</MDBBtn>
                    </CardBody>
               </Card>

               {/* Modal */}
               <AddUserModal addModal={addModal} setAddModal={setAddModal}/>
               <EditUserModal user={data['results'][iData]}/>
               <ViewProfileModal user={data['results'][iData]}/>
               {/* <ExportModal title="Ekspor daftar pengguna"/> */}
          </div>
     )
}

export default UserManagementLayout