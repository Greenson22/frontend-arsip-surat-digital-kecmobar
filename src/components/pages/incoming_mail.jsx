import React, { useEffect, useState } from "react"
import { MDBBtn } from "mdb-react-ui-kit"
import { useSelector } from "react-redux"
import { Card , CardHeader, CardBody} from "../Elements/Card"
import {Table, TableHead} from '../Elements/Table'
import {TitleBar, TableFilter, TableAction, IncomingMailTableBody, ExportModal, AddIncomingMailModal, EditIncomingMailModal, DeleteIncomingMailModal, ViewMailModal} from '../Fragments'
import { useIncomingmailEffect, usePaginationOffset, useSetPage } from "../../hooks"


function IncomingMailPage() {
     const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima", "Asal surat", "Perihal", "Berkas surat", "Penerima", "Tindakan"]
     const token = useSelector((state) => state.auth.token)
     const url = useSelector((state) => state.api.incomingmail)

     const [pagination, setPagination] = useState({
          'page': 1,
          'page_size': 5, 
     })

     const [data, setData] = useState(null)
     const [iData, setIData] = useState(0)
     const [command, setCommand] = useState(null)
     
     useIncomingmailEffect(url, token, command, setData, setIData, setCommand, setPagination)
     return (
          <div>
               <TitleBar>Surat masuk</TitleBar>
               <Card>
                    <CardHeader>
                         {data &&
                              <TableAction title="Daftar surat masuk" button1="Tambah surat" button1_target="#addMailModal" button2="Ekspor" button2_target="#exportModal" />}
                    </CardHeader>
                    <CardBody>
                         <TableFilter url={url} setCommand={setCommand}/>
                         <Table add_class="table-sm">
                              <TableHead columns={columns} />
                              {data &&
                                   <IncomingMailTableBody data={data['results']} setCommand={setCommand} page_index={usePaginationOffset(url)}></IncomingMailTableBody>}
                         </Table>
                         <MDBBtn onClick={() => { useSetPage(data['previous'], setCommand) } }>prev</MDBBtn>
                         <MDBBtn onClick={() => { useSetPage(data['next'], setCommand) } }>next</MDBBtn>
                    </CardBody>
               </Card>

               {data && data['count'] > 0 && <div>
                    <EditIncomingMailModal letter={data['results'][iData]} setCommand={setCommand}/>
               </div>}
               
               <AddIncomingMailModal setCommand={setCommand}/>
               <ViewMailModal title='Surat masuk' />
               <DeleteIncomingMailModal />
               <ExportModal title="Ekspor daftar surat masuk" />
          </div>
     )
}

export default IncomingMailPage