import {TableBody, RowAction} from '../Elements/Table'

const IncomingMailTableBody = (props)=>{
     const {data, setIData} = props
     return(
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
                                        <RowAction view_target='#viewMailModal' edit_target='#editMailModal' edit_function={()=>{setIData(index)}} />
                                   </td>
                              </tr>
                         )
                    })}               
          </TableBody>
     )
} 

export default IncomingMailTableBody