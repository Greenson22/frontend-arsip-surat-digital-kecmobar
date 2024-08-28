import React from 'react'
import {TableBody, RowAction} from '../../Elements/Table'

const OutgoingMailTableBody = (props)=>{
     const {data} = props
     const pagination = JSON.parse(localStorage.getItem('pagination'))

     return(
          <TableBody>
               {data.map((surat, index)=>{
                         return(
                              <tr key={surat.id}>
                                   <td>{index+1+((pagination['page']-1)*pagination['page_size'])}</td>
                                   <td>{surat.agenda_number}</td>
                                   <td>{surat.letter_date}</td>
                                   <td>{surat.destination}</td>
                                   <td>{surat.letter_number}</td>
                                   <td>{surat.subject}</td>
                                   <td>
                                        <RowAction view_target='#view-mail-modal' 
                                                       edit_target='#edit-outgoingmail-modal' 
                                                       index={index}
                                                       id={surat.id}/>
                                   </td>
                              </tr>
                         )
                    })}               
          </TableBody>
     )
} 

export default OutgoingMailTableBody