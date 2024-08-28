import { MDBCard, MDBCardHeader, MDBCardBody, MDBBtn, MDBTable } from "mdb-react-ui-kit"
import { TitleBar, TableAction, TableFilter, OutgoingMailTableBody, } from "../Fragments"
import { AddOutgoingMailModal, ViewMailModal, EditOutgoingMailModal } from '../Fragments/Modals'
import { TableHead } from "../Elements/Table"
import { useDispatch, useSelector } from "react-redux"
import { useSetPage } from "../../hooks"

const OutgoingMailLayout = (props)=>{
     const columns = ["No", "Nomor agenda", "Tanggal surat", "Tujuan surat", "Nomor surat", "Perihal", "Tindakan"]
     const {data} = props
     const iData = useSelector(state=>state.dataSlice.iData)
     const api = import.meta.env.VITE_OUTGOINGMAIL_API_KEY
     const dispatch = useDispatch()

     return (
          <div>
               <TitleBar>Surat Keluar</TitleBar>
               <MDBCard>
                    <MDBCardHeader>
                         <TableAction title="Daftar surat keluar" button1="Tambah surat" button1_target="#add-outgoingmail-modal" button2="Ekspor" button2_target="#export-modal" />
                    </MDBCardHeader>
                    <MDBCardBody>
                         <TableFilter api={api}/>
                         <MDBTable small bordered striped>
                              <TableHead columns={columns}></TableHead>
                              <OutgoingMailTableBody data={data['results']}/>
                         </MDBTable>
                         <MDBBtn onClick={() => { useSetPage(data['previous'], dispatch) } }>prev</MDBBtn>
                         <MDBBtn onClick={() => { useSetPage(data['next'], dispatch) } }>next</MDBBtn>
                    </MDBCardBody>
               </MDBCard>

               <AddOutgoingMailModal />
               <ViewMailModal title='Surat Keluar' api={api}/>
               <EditOutgoingMailModal data={data} />
          </div>
     )
}

export default OutgoingMailLayout