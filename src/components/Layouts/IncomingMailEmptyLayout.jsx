import React, { useState } from "react"
import { Card , CardHeader, CardBody} from "../Elements/Card"
import { Table, TableHead } from '../Elements/Table'
import { TitleBar, TableAction, AddIncomingMailModal, TableFilter } from '../Fragments'
import { AddMultipleIncomingmailModal, AddIncomingmailModalV2 } from '../Fragments/Modals'

const IncomingMailEmptyLayout = (props)=>{
     const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima", "Asal surat", "Perihal", "Penerima", "Tindakan"]
     const api = import.meta.env.VITE_INCOMINGMAIL_API_KEY
     const [addModal, setAddModal] = useState(false)
     const [addMultipleModal, setMultipleModal] = useState(false)
     // tombol di bagian table action
     const buttonPrimary = {children:'Tambah surat', click: ()=>{setAddModal(true)}}

     return (
          <div>
               <TitleBar>Surat masuk</TitleBar>
               <Card>
                    <CardHeader>
                         <TableAction title="Daftar surat masuk" buttonPrimary={buttonPrimary}/>
                    </CardHeader>
                    <CardBody>
                         <TableFilter api={api}/>
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