import React from "react"
import { Card , CardHeader, CardBody} from "../Elements/Card"
import { Table, TableHead } from '../Elements/Table'
import { TitleBar, TableAction, AddIncomingMailModal, TableFilter } from '../Fragments'

const IncomingMailEmptyLayout = (props)=>{
     const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima", "Asal surat", "Perihal", "Penerima", "Tindakan"]
     
     return (
          <div>
               <TitleBar>Surat masuk</TitleBar>
               <Card>
                    <CardHeader>
                         <TableAction title="Daftar surat masuk" button1="Tambah surat" button1_target="#addMailModal" button2="Ekspor" button2_target="#exportModal" button2Disabled={true}/>
                    </CardHeader>
                    <CardBody>
                         <TableFilter />
                         <Table add_class="table-sm">
                              <TableHead columns={columns} />
                         </Table>
                    </CardBody>
               </Card>
               <AddIncomingMailModal />
          </div>
     )
}

export default IncomingMailEmptyLayout