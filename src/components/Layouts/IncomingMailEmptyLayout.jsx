import React, { useState } from "react"
import { Card , CardHeader, CardBody} from "../Elements/Card"
import { Table, TableHead } from '../Elements/Table'
import { TitleBar, TableAction, AddIncomingMailModal, TableFilter } from '../Fragments'
import { AddMultipleIncomingmailModal, AddIncomingmailModalV2 } from '../Fragments/Modals'

const IncomingMailEmptyLayout = (props)=>{
     const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima", "Asal surat", "Perihal", "Penerima", "Tindakan"]
     const [addModal, setAddModal] = useState(false)
     const [addMultipleModal, setMultipleModal] = useState(false)
     return (
          <div>
               <TitleBar>Surat masuk</TitleBar>
               <Card>
                    <CardHeader>
                         <TableAction title="Daftar surat masuk" button1="Tambah surat" button2="Ekspor" button2_target="#exportModal" button2Disabled={true} buttonAClick={()=>{setAddModal(true)}}/>
                    </CardHeader>
                    <CardBody>
                         <TableFilter />
                         <Table add_class="table-sm">
                              <TableHead columns={columns} />
                         </Table>
                    </CardBody>
               </Card>
               {/* <AddIncomingMailModal /> */}
               <AddIncomingmailModalV2 addModal={addModal} setAddModal={setAddModal} setMultipleModal={setMultipleModal} />
               <AddMultipleIncomingmailModal addMultipleModal={addMultipleModal} setMultipleModal={setMultipleModal} />
          </div>
     )
}

export default IncomingMailEmptyLayout