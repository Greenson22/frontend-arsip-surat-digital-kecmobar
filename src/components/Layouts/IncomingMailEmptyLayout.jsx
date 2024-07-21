import { Card , CardHeader, CardBody} from "../Elements/Card"
import { Table, TableHead } from '../Elements/Table'
import { TitleBar, TableAction, AddIncomingMailModal } from '../Fragments'

const IncomingMailEmptyLayout = (props)=>{
     const {setCommand} = props
     const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima", "Asal surat", "Perihal", "Berkas surat", "Penerima", "Tindakan"]
     
     return (
          <div>
               <TitleBar>Surat masuk</TitleBar>
               <Card>
                    <CardHeader>
                         <TableAction title="Daftar surat masuk" button1="Tambah surat" button1_target="#addMailModal" button2="Ekspor" button2_target="#exportModal" button2Disabled={true}/>
                    </CardHeader>
                    <CardBody>
                         <Table add_class="table-sm">
                              <TableHead columns={columns} />
                         </Table>
                    </CardBody>
               </Card>
               <AddIncomingMailModal setCommand={setCommand}/>
          </div>
     )
}

export default IncomingMailEmptyLayout