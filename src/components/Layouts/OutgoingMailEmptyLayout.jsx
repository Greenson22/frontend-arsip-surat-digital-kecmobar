import { MDBCard, MDBCardHeader, MDBCardBody, MDBTable } from "mdb-react-ui-kit"
import { TitleBar, TableAction, TableFilter } from "../Fragments"
import { TableHead } from "../Elements/Table"
import { useDispatch, useSelector } from "react-redux"

const OutgoingMailEmptyLayout = (props)=>{
     const columns = ["No", "Nomor agenda", "Tanggal surat", "Tujuan surat", "Nomor surat", "Perihal", "Berkas surat", "Tindakan"]
     const {data} = props
     const iData = useSelector(state=>state.dataSlice.iData)
     const api = import.meta.env.VITE_OUTGOINGMAIL_API_KEY
     const dispatch = useDispatch()

     return (
          <div>
               <TitleBar>Surat Keluar</TitleBar>
               <MDBCard>
                    <MDBCardHeader>
                         <TableAction title="Daftar surat keluar" button1="Tambah surat" button1_target="#add-mail-modal" button2="Ekspor" button2_target="#export-modal" />
                    </MDBCardHeader>
                    <MDBCardBody>
                         <TableFilter api={api}/>
                         <MDBTable small>
                              <TableHead columns={columns}></TableHead>
                         </MDBTable>
                    </MDBCardBody>
               </MDBCard>
          </div>
     )
}

export default OutgoingMailEmptyLayout