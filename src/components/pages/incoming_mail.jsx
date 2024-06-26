import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { Card , CardHeader, CardBody} from "../Elements/Card"
import {Table, TableHead} from '../Elements/Table'

import {TitleBar, TableFilter, TableAction, IncomingMailTableBody,
     ExportModal, AddIncomingMailModal, EditIncomingMailModal, DeleteIncomingMailModal, ViewMailModal} from '../Fragments'

import { fetch_data, delete_data } from '../../hooks/useFetchData'

const IncomingMailPage = ()=>{
     const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima",
          "Asal surat", "Perihal", "Berkas surat", "Penerima", "Tindakan"]
     const [data, setData] = useState([])
     const [iData, setIData] = useState(0)

     const token = useSelector((state) => state.auth.token)
     const incomingmail_api = useSelector((state) => state.api.incomingmail)
     
     useEffect(()=>{
          fetch_data(incomingmail_api, token, (response)=>{
               setData(response.data)
          })
     }, [data])

     const get_id = (id_data)=>{
          // menghapus data berdasarkan id
          if (id_data.command == "delete" && confirm("Apakah anda ingin menghapus record ini?")){
               delete_data(incomingmail_api+id_data.id+'/', token, (response)=>{
                    alert("Record di hapus")
                    setData(null)
               })
          }
     }

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
                              <IncomingMailTableBody data={data} setIData={setIData} get_id={get_id}></IncomingMailTableBody>
                         </Table>
                    </CardBody>
               </Card>

               {/* Modal */}
               <AddIncomingMailModal/>
               <EditIncomingMailModal letter={data[iData]}/>
               <ViewMailModal title='Surat masuk'/>
               <DeleteIncomingMailModal/>
               <ExportModal title="Ekspor daftar surat masuk"/>
          </div>
     )
}

export default IncomingMailPage