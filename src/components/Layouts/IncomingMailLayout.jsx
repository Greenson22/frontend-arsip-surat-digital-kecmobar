import React from "react"
import { MDBBtn } from "mdb-react-ui-kit"
import { Card , CardHeader, CardBody} from "../Elements/Card"
import {Table, TableHead} from '../Elements/Table'
import {TitleBar, TableFilter, TableAction, IncomingMailTableBody, ExportModal} from '../Fragments'
import { AddMultipleIncomingmailModal, AddIncomingmailModalV2, EditIncomingMailModal, ViewMailModal} from '../Fragments/Modals'
import { useSetPage } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

const IncomingMailLayout = (props)=>{
     const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima", "Asal surat", "Perihal", "Penerima", "Kategori", "Tindakan"]
     const {data} = props
     const iData = useSelector(state=>state.dataSlice.iData)
     const api = import.meta.env.VITE_INCOMINGMAIL_API_KEY
     const dispatch = useDispatch()
     const [addModal, setAddModal] = useState(false)
     const [addMultipleModal, setMultipleModal] = useState(false)

     return (
          <div>
               <TitleBar>Surat masuk</TitleBar>
               <Card>
                    <CardHeader>
                         <TableAction title="Daftar surat masuk" buttonChildren="Tambah surat" buttonClick={()=>{setAddModal(true)}}/>
                    </CardHeader>
                    <CardBody>
                         <TableFilter api={api} />
                         <Table add_class="table-sm">
                              <TableHead columns={columns} />
                              <IncomingMailTableBody data={data['results']} ></IncomingMailTableBody>
                         </Table>
                         <MDBBtn onClick={() => { useSetPage(data['previous'], dispatch) } }>prev</MDBBtn>
                         <MDBBtn onClick={() => { useSetPage(data['next'], dispatch) } }>next</MDBBtn>
                    </CardBody>
               </Card>

               <EditIncomingMailModal letter={data['results'][iData]} />
               <ViewMailModal title='Surat masuk' api={api}/>
               
               <AddIncomingmailModalV2 addModal={addModal} setAddModal={setAddModal} setMultipleModal={setMultipleModal} />
               <AddMultipleIncomingmailModal addMultipleModal={addMultipleModal} setMultipleModal={setMultipleModal} />
               <ExportModal title="Ekspor daftar surat masuk" />
          </div>
     )
}

export default IncomingMailLayout