import { MDBCard, MDBCardHeader, MDBCardBody, MDBBtn, MDBTable } from "mdb-react-ui-kit"
import { TitleBar, TableAction, TableFilter, OutgoingMailTableBody, } from "../Fragments"
import { AddOutgoingMailModal, ViewMailModal, EditOutgoingMailModal, AddMultipleIncomingmailModal } from '../Fragments/Modals'

import { TableHead } from "../Elements/Table"
import { useDispatch, useSelector } from "react-redux"
import { useSetPage } from "../../hooks"
import { useState } from "react"

const OutgoingMailLayout = (props)=>{
     const columns = ["No", "Nomor agenda", "Tanggal surat", "Tujuan surat", "Nomor surat", "Perihal", "Tindakan"]
     const {data} = props
     const iData = useSelector(state=>state.dataSlice.iData)
     const api = import.meta.env.VITE_OUTGOINGMAIL_API_KEY
     const dispatch = useDispatch()
     const [addModal, setAddModal] = useState(false)
     const [addMultipleModal, setMultipleModal] = useState(false)

     //tombol aksi di table action
     const addBtn = {children:'Tambah surat', click: ()=>{setAddModal(true)}} 

     return (
          <div>
               <TitleBar>Surat Keluar</TitleBar>
               <MDBCard>
                    <MDBCardHeader>
                    <TableAction title="Daftar surat keluar" buttonPrimary={addBtn}/>
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

               <AddOutgoingMailModal addModal={addModal} setAddModal={setAddModal} setMultipleModal={setMultipleModal} />
               <AddMultipleIncomingmailModal addMultipleModal={addMultipleModal} setMultipleModal={setMultipleModal} outgoingmail={true}/>
               <ViewMailModal title='Surat Keluar' api={api}/>
               <EditOutgoingMailModal letter={data['results'][iData]} />
          </div>
     )
}

export default OutgoingMailLayout