import React, { useState } from 'react'
import { Card , CardHeader, CardBody} from "../Elements/Card"
import { Table, TableHead } from "../Elements/Table"
import { MDBBtn } from 'mdb-react-ui-kit'
import { useDispatch } from 'react-redux'
import { TitleBar, TableFilter, TableAction } from '../Fragments'
import { useSetPage } from "../../hooks"
import ClassifyLetterTableBody from '../Fragments/TableBody/ClassifyLetterTableBody'

const ClassifyOutgoingLetterLayout = (props)=>{
     const columns = ["No", "Nomor agenda", "Tanggal surat", "Tujuan surat", "Nomor surat", "Perihal", "Tindakan"]
     const {data} = props
     const api = localStorage.getItem('hostname')+import.meta.env.VITE_OUTGOINGMAIL_API_KEY
     const dispatch = useDispatch()
     const backButton = {children:'Kembali', click: ()=>{}, href:'/outgoing_mail'}
     const [notes, setNotes] = useState(null)
     
     const classifyALl = ()=>{
          notes.map((letter, index)=>{
               const classifyBtn = document.getElementById('btn-'+letter.id)
               classifyBtn.click()
          })
     }

     const buttonPrimary = {children:'Klasifikasi Semua', click: classifyALl}
     return (
          <div>
               <TitleBar>Klasifikasi Surat Kaluar</TitleBar>
               <Card>
                    <CardHeader>
                         <TableAction title="Daftar Surat Keluar" buttonPrimary={buttonPrimary} buttonSecondary={backButton}></TableAction>
                    </CardHeader>
                    <CardBody>
                         <TableFilter api={api} />
                         <Table add_class="table-sm">
                              <TableHead columns={columns} />
                              <ClassifyLetterTableBody data={data['results']} notes={notes} setNotes={setNotes} type='outgoingmail'></ClassifyLetterTableBody>
                         </Table>
                         <MDBBtn onClick={() => { useSetPage(data['previous'], dispatch) } }>prev</MDBBtn>
                         <MDBBtn onClick={() => { useSetPage(data['next'], dispatch) } }>next</MDBBtn>
                    </CardBody>
               </Card>
          </div>
     )
}

export default ClassifyOutgoingLetterLayout