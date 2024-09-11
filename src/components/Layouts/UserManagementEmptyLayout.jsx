import React from "react"
import { Card, CardHeader, CardBody } from "../Elements/Card"
import { Table, TableHead } from "../Elements/Table"
import { TitleBar, TableFilter, TableAction,
     AddUserModal } from '../Fragments'

const UserManagementEmptyLayout = (props)=>{
     const api = import.meta.env.VITE_USERS_API_KEY
     const {setCommand} = props
     const columns = ["No", "Nama", "Pengguna", "Tingkat", "Status", "Registrasi", "Tindakan"]
     const [addModal, setAddModal] = useState(false)

     return (
          <div>
               <TitleBar>Pengaturan pengguna</TitleBar>
               <Card>
                    <CardHeader>
                         <TableAction title="Daftar surat masuk" buttonChildren="Tambah surat" buttonClick={()=>{setAddModal(true)}}/>
                    </CardHeader>
                    <CardBody>
                         <TableFilter api={api}/>
                         <Table add_class="table-sm">
                              <TableHead columns = {columns}/>
                         </Table>
                    </CardBody>
               </Card>

               {/* Modal */}
               <AddUserModal addModal={addModal} setAddModal={setAddModal}/>
          </div>
     )
}

export default UserManagementEmptyLayout