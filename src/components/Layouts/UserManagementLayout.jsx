import React from "react"
import { MDBBtn } from "mdb-react-ui-kit"
import { Card, CardHeader, CardBody } from "../Elements/Card"
import { Table, TableHead } from "../Elements/Table"
import { TitleBar, TableFilter, TableAction, UserManagementTableBody,
     AddUserModal, ExportModal, EditUserModal } from '../Fragments'

import ViewProfileModal from "../Fragments/Modals/ViewProfileModal"
import { useSetPage } from "../../hooks"

const UserManagementLayout = (props)=>{
     const api = import.meta.env.VITE_USERS_API_KEY
     const {data, iData, command, setCommand} = props
     const columns = ["No", "Nama", "Pengguna", "Tingkat", "Status", "Registrasi", "Tindakan"]


     return (
          <div>
               <TitleBar>Pengaturan pengguna</TitleBar>
               <Card>
                    <CardHeader>
                         <TableAction title="Daftar pengguna" button1="Tambah Pengguna" button1_target="#addUserModal" button2="Ekspor" button2_target="#exportModal"/>
                    </CardHeader>
                    <CardBody>
                         <TableFilter setCommand={setCommand} api={api}/>
                         <Table add_class="table-sm">
                              <TableHead columns = {columns}/>
                              <UserManagementTableBody data={data['results']} setCommand={setCommand}/>
                         </Table>
                         <MDBBtn onClick={() => { useSetPage(data['previous'], setCommand) } }>prev</MDBBtn>
                         <MDBBtn onClick={() => { useSetPage(data['next'], setCommand) } }>next</MDBBtn>
                    </CardBody>
               </Card>

               {/* Modal */}
               <AddUserModal setCommand={setCommand}/>
               <EditUserModal user={data['results'][iData]} setCommand={setCommand}/>
               <ViewProfileModal user={data['results'][iData]} command={command} setCommand={command}/>
               <ExportModal title="Ekspor daftar pengguna"/>
          </div>
     )
}

export default UserManagementLayout