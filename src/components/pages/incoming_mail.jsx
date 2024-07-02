import React, { useState } from "react"
import { MDBBtn } from "mdb-react-ui-kit"
import { useSelector } from "react-redux"
import { Card , CardHeader, CardBody} from "../Elements/Card"
import {Table, TableHead} from '../Elements/Table'
import {TitleBar, TableFilter, TableAction, IncomingMailTableBody, ExportModal, AddIncomingMailModal, EditIncomingMailModal, DeleteIncomingMailModal, ViewMailModal} from '../Fragments'
import { useEffectIncomingmail, usePaginationOffset } from "../../hooks"


function IncomingMailPage() {
     const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima", "Asal surat", "Perihal", "Berkas surat", "Penerima", "Tindakan"]
     const token = useSelector((state) => state.auth.token)
     const link = useSelector((state) => state.api.incomingmail)

     const [url, setUrl] = useState(link)
     const [data, setData] = useState(null)
     const [iData, setIData] = useState(0)
     const [command, setCommand] = useState(null)

     useEffectIncomingmail(link, url, token, command, setUrl, setData, setIData)
     function getData(request){setCommand(request)}

     // set data to next page or prev page
     function setNavigationPage(nav) {
          if (data[nav]){
               setUrl(data[nav])
          }
     }
     
     return (
          <div>
               <TitleBar>Surat masuk</TitleBar>
               <Card>
                    <CardHeader>
                         {data &&
                              <TableAction title="Daftar surat masuk" button1="Tambah surat" button1_target="#addMailModal" button2="Ekspor" button2_target="#exportModal" />}
                    </CardHeader>
                    <CardBody>
                         <TableFilter link={link} setUrl={setUrl}/>
                         <Table add_class="table-sm">
                              <TableHead columns={columns} />
                              {data &&
                                   <IncomingMailTableBody data={data['results']} get_data={getData} page_index={usePaginationOffset(url)}></IncomingMailTableBody>}
                         </Table>
                         <MDBBtn onClick={() => { setNavigationPage('previous') } }>prev</MDBBtn>
                         <MDBBtn onClick={() => { setNavigationPage('next') } }>next</MDBBtn>
                    </CardBody>
               </Card>
               {/* Modal */data && <div>
                    <AddIncomingMailModal get_data={getData}/>
                    <EditIncomingMailModal letter={data['results'][iData]} get_data={getData} />
                    <ViewMailModal title='Surat masuk' />
                    <DeleteIncomingMailModal />
                    <ExportModal title="Ekspor daftar surat masuk" />
               </div>}
          </div>
     )
}

export default IncomingMailPage