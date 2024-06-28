import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Card , CardHeader, CardBody} from "../Elements/Card"
import {Table, TableHead} from '../Elements/Table'
import {TitleBar, TableFilter, TableAction, IncomingMailTableBody, ExportModal, AddIncomingMailModal, EditIncomingMailModal, DeleteIncomingMailModal, ViewMailModal} from '../Fragments'
import { fetch_data } from '../../hooks/useFetchData'
import useIncomingmailActions from "../../hooks/useIncomingmailActions"

const IncomingMailPage = ()=>{
     const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima","Asal surat", "Perihal", "Berkas surat", "Penerima", "Tindakan"]
     const [data, setData] = useState([])
     const [iData, setIData] = useState(0)
     const token = useSelector((state) => state.auth.token)
     const incomingmail_api = useSelector((state) => state.api.incomingmail)
     
     useEffect(()=>{
          if (data.length <= 0){
               fetch_data(incomingmail_api, token, (response)=>{
                    setData(response.data)
               })
          }
     }, [data])

     const get_data = (mydata)=>{
          useIncomingmailActions(incomingmail_api, token, mydata, setData, setIData)
     }

     return(
          <div>
               <TitleBar>Surat masuk</TitleBar>
               <Card>
                    <CardHeader>
                         {data.length > 0 &&
                              <TableAction title="Daftar surat masuk" button1="Tambah surat" button1_target="#addMailModal" button2="Ekspor" button2_target="#exportModal"/>
                         }
                    </CardHeader>
                    <CardBody>
                         <TableFilter/>
                         <Table add_class="table-sm">
                              <TableHead columns={columns}/>
                              <IncomingMailTableBody data={data} get_data={get_data}></IncomingMailTableBody>
                         </Table>
                    </CardBody>
               </Card>
               {/* Modal */
                    data.length > 0 && <div>
                         <AddIncomingMailModal/>
                         <EditIncomingMailModal letter={data[iData]} get_data={get_data}/>
                         <ViewMailModal title='Surat masuk'/>
                         <DeleteIncomingMailModal/>
                         <ExportModal title="Ekspor daftar surat masuk"/>
                    </div>
               }
          </div>
     )
}

export default IncomingMailPage