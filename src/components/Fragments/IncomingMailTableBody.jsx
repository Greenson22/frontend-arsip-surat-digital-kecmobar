import React from 'react'
import {TableBody, RowAction} from '../Elements/Table'

const IncomingMailTableBody = (props)=>{
     const {data, get_data, page_index} = props

     return(
          <TableBody>
               {data.map((surat, index)=>{
                         return(
                              <tr key={surat.id}>
                                   <td>{index+1+page_index}</td>
                                   <td >{surat.agenda_number}</td>
                                   <td >{surat.letter_number}</td>
                                   <td >{surat.letter_date}</td>
                                   <td >{surat.received_date}</td>
                                   <td >{surat.source}</td>
                                   <td >{surat.subject}</td>
                                   <td >{surat.file_url}</td>
                                   <td >{surat.recipient}</td>
                                   <td>
                                        <RowAction view_target='#viewMailModal' 
                                                  edit_target='#editMailModal' index={index}
                                                  get_data={get_data} id={surat.id}/>
                                   </td>
                              </tr>
                         )
                    })}               
          </TableBody>
     )
} 

export default IncomingMailTableBody