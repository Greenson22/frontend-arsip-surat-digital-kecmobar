import React from "react"
import { Card, CardHeader, CardBody } from "../Elements/Card"
import { Table, TableHead } from "../Elements/Table"
import { TitleBar, TableFilter, TableAction,
     AddUserModal, ExportModal, EditUserModal } from '../Fragments'

const UserManagementEmptyLayout = (props)=>{
     const {data, setCommand} = props
     const columns = ["No", "Nama", "Pengguna", "Tingkat", "Status", "Registrasi", "Tindakan"]

     return (
          <div>
               <TitleBar>Pengaturan pengguna</TitleBar>
               <Card>
                    <CardHeader>
                         <TableAction title="Daftar pengguna" button1="Tambah Pengguna" button1_target="#addUserModal" button2="Ekspor" button2_target="#exportModal" button2Disabled={true}/>
                    </CardHeader>
                    <CardBody>
                         <TableFilter setCommand={setCommand}/>
                         <Table add_class="table-sm">
                              <TableHead columns = {columns}/>
                         </Table>
                    </CardBody>
               </Card>

               {/* Modal */}
               <AddUserModal setCommand={setCommand}/>
               <EditUserModal/>
          </div>
     )
}

export default UserManagementEmptyLayout