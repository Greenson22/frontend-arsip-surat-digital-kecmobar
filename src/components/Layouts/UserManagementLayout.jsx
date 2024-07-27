import React from "react"
import { Card, CardHeader, CardBody } from "../Elements/Card"
import { Table, TableHead } from "../Elements/Table"
import { TitleBar, TableFilter, TableAction, UserManagementTableBody,
     AddUserModal, ExportModal, EditUserModal } from '../Fragments'

import ViewProfileModal from "../Fragments/Modals/ViewProfileModal"

const UserManagementLayout = (props)=>{
     const {data} = props
     const columns = ["No", "Nama", "Pengguna", "Tingkat", "Status", "Registrasi", "Tindakan"]

     return (
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
                              <UserManagementTableBody data={data}/>
                         </Table>
                    </CardBody>
               </Card>

               {/* Modal */}
               <AddUserModal/>
               <EditUserModal/>
               {/* <ViewProfileModal /> */}
               <ExportModal title="Ekspor daftar pengguna"/>
          </div>
     )
}

export default UserManagementLayout