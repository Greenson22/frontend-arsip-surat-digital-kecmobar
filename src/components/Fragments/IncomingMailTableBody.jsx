import React from 'react'
import {TableBody, RowAction} from '../Elements/Table'

const IncomingMailTableBody = (props)=>{
     const {data, setCommand} = props
     const incomingmailPagination = JSON.parse(localStorage.getItem('pagination'))

     return(
          <TableBody>
               {data.map((surat, index)=>{
                         return(
                              <tr key={surat.id}>
                                   <td>{index+1+((incomingmailPagination['page']-1)*incomingmailPagination['page_size'])}</td>
                                   <td >{surat.agenda_number}</td>
                                   <td >{surat.letter_number}</td>
                                   <td >{surat.letter_date}</td>
                                   <td >{surat.received_date}</td>
                                   <td >{surat.source}</td>
                                   <td >{surat.subject}</td>
                                   <td >{surat.recipient}</td>
                                   <td>
                                        <RowAction view_target='#viewMailModal' 
                                                  edit_target='#editMailModal' index={index}
                                                  id={surat.id}
                                                  setCommand={setCommand}/>
                                   </td>
                              </tr>
                         )
                    })}               
          </TableBody>
     )
} 

export default IncomingMailTableBody