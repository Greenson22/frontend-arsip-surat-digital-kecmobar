import React, { useState } from "react"
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTable } from "mdb-react-ui-kit"
import { useDispatch } from "react-redux"

import { TableHead } from "../Elements/Table"
import { TitleBar, TableAction, TableFilter } from "../Fragments"
import { AddOutgoingMailModal } from '../Fragments/Modals'
import AddMultipleIncomingMailModal from "../Fragments/Modals/AddMulitipleIncomingMailModal"

const OutgoingMailEmptyLayout = (props)=>{
     const columns = ["No", "Nomor agenda", "Tanggal surat", "Tujuan surat", "Nomor surat", "Perihal", "Berkas surat", "Tindakan"]
     const api = localStorage.getItem('hostname')+import.meta.env.VITE_OUTGOINGMAIL_API_KEY
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
                         <MDBTable small>
                              <TableHead columns={columns}></TableHead>
                         </MDBTable>
                    </MDBCardBody>
               </MDBCard>

               <AddOutgoingMailModal addModal={addModal} setAddModal={setAddModal} setMultipleModal={setMultipleModal}/>
               <AddMultipleIncomingMailModal addMultipleModal={addMultipleModal} setMultipleModal={setMultipleModal} outgoingmail={true}/>
          </div>
     )
}

export default OutgoingMailEmptyLayout