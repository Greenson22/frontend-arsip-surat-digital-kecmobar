import {Card, CardBody, CardHeader} from '../Elements/Card'
import { Table, TableHead, TableBody, RowAction } from "../Elements/Table"
import { TitleBar, TableAction, TableFilter, 
     AddOutgoingMailModal, EditOutgoingMailModal, ViewMailModal, ExportModal } from '../Fragments'
import surat_keluar from "../../assets/data/surat_keluar.json"
import useLoginValidate from '../../hooks/useLoginValidation'

const OutgoingMailPage = ()=>{
     const columns = ["No", "Nomor agenda", "Tanggal surat", "Tujuan surat", "Nomor surat", "Perihal", "Berkas surat", "Tindakan"]
     const accessToken = localStorage.getItem('accessToken')
     useLoginValidate(accessToken)

     return(
          <div>
               <TitleBar>Surat keluar</TitleBar>
               <Card add_class="table-sm">
                    <CardHeader>
                         <TableAction title="Daftar surat keluar" button1="Tambah Surat" button1_target="#addOutgoingMailModal" button2="Ekspor" button2_target="#exportModal"></TableAction>
                    </CardHeader>
                    <CardBody>
                         <TableFilter/>
                         <Table>
                              <TableHead columns={columns}/>
                              <TableBody>
                                   {surat_keluar.map((surat, index)=>{
                                        return(
                                             <tr key={surat.id}>
                                                  <td>{index+1}</td>
                                                  <td>{surat.nomor_agenda}</td>
                                                  <td>{surat.tanggal_surat}</td>
                                                  <td>{surat.tujuan_surat}</td>
                                                  <td>{surat.nomor_surat}</td>
                                                  <td>{surat.perihal}</td>
                                                  <td>{surat.file_surat}</td>
                                                  <td>
                                                       <RowAction lihat_target="#viewMailModal" ubah_target='#editOutgoingMailModal'/>
                                                  </td>
                                             </tr>
                                        )
                                   })}
                              </TableBody>
                         </Table>
                    </CardBody>
               </Card>

               {/* Modal */}
               <AddOutgoingMailModal/>
               <EditOutgoingMailModal data={surat_keluar}/>
               <ViewMailModal title="Surat keluar"/>
               <ExportModal title="Ekspor daftar surat keluar"/>
          </div>
     )
}

export default OutgoingMailPage