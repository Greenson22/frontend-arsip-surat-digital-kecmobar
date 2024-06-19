import React, { useEffect } from "react"
import { useState } from "react"

import { Card , CardHeader, CardBody} from "../Elements/Card"
import {Table, TableHead, TableBody, RowAction} from '../Elements/Table'

import TitleBar from '../Fragments/TitleBar'
import TableFilter from '../Fragments/TableFilter'
import TableAction from "../Fragments/TableAction"
import ExportModal from "../Fragments/Modals/ExportModal"
import AddIncomingMailModal from "../Fragments/Modals/AddIncomingMailModal"
import EditIncomingMailModal from "../Fragments/Modals/EditIncomingMailModal"
import ViewMailModal from "../Fragments/Modals/ViewMailModal"

import surat_masuk from '../../assets/data/surat_masuk.json'
const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima", 
"Asal surat", "Perihal", "Berkas surat", "Penerima", "Tindakan"]

import axios from 'axios'
const url = 'http://localhost:8000/incoming_mail/'

const IncomingMailPage = ()=>{
     const [data, setData] = useState([])

     useEffect(()=>{
          axios.get(url)
          .then((response)=>{
               setData(response.data)
          })
          .catch((error)=>{
               // alert("Error")
          })
     }, [])

     return(
          <div>
               <TitleBar>Surat masuk</TitleBar>
               <Card>
                    <CardHeader>
                         <TableAction title="Daftar surat masuk" button1="Tambah surat" button1_target="#addMailModal" button2="Ekspor" button2_target="#exportModal"/>
                    </CardHeader>
                    <CardBody>
                         <TableFilter/>
                         <Table add_class="table-sm">
                              <TableHead columns={columns}/>
                              <TableBody>
                                   {data.map((surat, index)=>{
                                        return(
                                             <tr key={surat.id}>
                                                  <td>{index+1}</td>
                                                  <td >{surat.agenda_number}</td>
                                                  <td >{surat.letter_number}</td>
                                                  <td >{surat.letter_date}</td>
                                                  <td >{surat.received_date}</td>
                                                  <td >{surat.source.name}</td>
                                                  <td >{surat.subject}</td>
                                                  <td >{surat.file_url}</td>
                                                  <td >{surat.recipient.name}</td>
                                                  <td>
                                                       <RowAction lihat_target='#viewMailModal' ubah_target='#editMailModal'/>
                                                  </td>
                                             </tr>
                                        )
                                   })}
                                   {/* {surat_masuk.map((surat, index)=>{
                                        return(
                                             <tr key={surat.id}>
                                                  <td>{index+1}</td>
                                                  <td >{surat.nomor_agenda}</td>
                                                  <td >{surat.nomor_agenda}</td>
                                                  <td >{surat.tanggal_surat}</td>
                                                  <td >{surat.tanggal_terima}</td>
                                                  <td >{surat.asal_surat}</td>
                                                  <td >{surat.perihal}</td>
                                                  <td >{surat.file_surat}</td>
                                                  <td >{surat.penerima}</td>
                                                  <td>
                                                       <RowAction lihat_target='#viewMailModal' ubah_target='#editMailModal'/>
                                                  </td>
                                             </tr>
                                        )
                                   })} */}
                              </TableBody>
                         </Table>
                    </CardBody>
               </Card>

               {/* Modal */}
               <AddIncomingMailModal/>
               <EditIncomingMailModal data={surat_masuk}/>
               <ViewMailModal title='Surat masuk'/>
               <ExportModal title="Ekspor daftar surat masuk"/>
          </div>
     )
}

export default IncomingMailPage