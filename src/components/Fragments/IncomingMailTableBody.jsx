import React, { useState, useEffect} from 'react'
import {TableBody, RowAction} from '../Elements/Table'
import { delete_data } from '../../hooks/useFetchData'

const IncomingMailTableBody = (props)=>{
     const {data, setIData, get_id} = props

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
                                        <RowAction view_target='#viewMailModal' 
                                                  edit_target='#editMailModal' edit_function={()=>{setIData(index)}} 
                                                  get_id={get_id} id={surat.id}/>
                                   </td>
                              </tr>
                         )
                    })}               
          </TableBody>
     )
} 

export default IncomingMailTableBody

// ()=>{
//      if (confirm("Konfirmasi hapus ?"+incomingmail_api)){
//           const url = incomingmail_api+surat.id+'/'
//           delete_data(url, token, ()=>{
//                window.location.reload(false);
//           })
//      }
//      }