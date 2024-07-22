import { MDBBtn } from "mdb-react-ui-kit"

import { Card , CardHeader, CardBody} from "../Elements/Card"
import {Table, TableHead} from '../Elements/Table'
import {TitleBar, TableFilter, TableAction, IncomingMailTableBody, ExportModal, 
     AddIncomingMailModal, EditIncomingMailModal, DeleteIncomingMailModal, ViewMailModal} from '../Fragments'
import { useSetPage } from "../../hooks"

const IncomingMailLayout = (props)=>{
     const {data, iData, command, setCommand} = props
     const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima", "Asal surat", "Perihal", "Berkas surat", "Penerima", "Tindakan"]

     return (
          <div>
               <TitleBar>Surat masuk</TitleBar>
               <Card>
                    <CardHeader>
                         <TableAction title="Daftar surat masuk" button1="Tambah surat" button1_target="#addMailModal" button2="Ekspor" button2_target="#exportModal" />
                    </CardHeader>
                    <CardBody>
                         <TableFilter setCommand={setCommand}/>
                         <Table add_class="table-sm">
                              <TableHead columns={columns} />
                              {data &&
                                   <IncomingMailTableBody data={data['results']} setCommand={setCommand}></IncomingMailTableBody>}
                         </Table>
                         <MDBBtn onClick={() => { useSetPage(data['previous'], setCommand) } }>prev</MDBBtn>
                         <MDBBtn onClick={() => { useSetPage(data['next'], setCommand) } }>next</MDBBtn>
                    </CardBody>
               </Card>

               <EditIncomingMailModal letter={data['results'][iData]} setCommand={setCommand}/>
               <ViewMailModal title='Surat masuk' command={command}/>
               
               <AddIncomingMailModal setCommand={setCommand}/>
               <DeleteIncomingMailModal/>
               <ExportModal title="Ekspor daftar surat masuk" />
          </div>
     )
}

export default IncomingMailLayout