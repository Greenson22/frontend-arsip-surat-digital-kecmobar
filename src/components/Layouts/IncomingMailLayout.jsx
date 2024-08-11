import { MDBBtn } from "mdb-react-ui-kit"

import { Card , CardHeader, CardBody} from "../Elements/Card"
import {Table, TableHead} from '../Elements/Table'
import {TitleBar, TableFilter, TableAction, IncomingMailTableBody, ExportModal, 
     AddIncomingMailModal, EditIncomingMailModal, DeleteIncomingMailModal, ViewMailModal} from '../Fragments'
import { useSetPage } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"

const IncomingMailLayout = (props)=>{
     const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima", "Asal surat", "Perihal", "Penerima", "Tindakan"]
     const {data} = props
     const iData = useSelector(state=>state.dataSlice.iData)
     const api = import.meta.env.VITE_INCOMINGMAIL_API_KEY
     const dispatch = useDispatch()

     return (
          <div>
               <TitleBar>Surat masuk</TitleBar>
               <Card>
                    <CardHeader>
                         <TableAction title="Daftar surat masuk" button1="Tambah surat" button1_target="#addMailModal" button2="Ekspor" button2_target="#exportModal" />
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
               <ViewMailModal title='Surat masuk'/>
               
               <AddIncomingMailModal/>
               {/* <DeleteIncomingMailModal/> */}
               <ExportModal title="Ekspor daftar surat masuk" />
          </div>
     )
}

export default IncomingMailLayout