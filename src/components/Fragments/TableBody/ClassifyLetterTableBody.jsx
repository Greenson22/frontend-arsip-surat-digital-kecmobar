import React, { useEffect, useState } from 'react'
import { TableBody } from '../../Elements/Table'
import { useSelector } from 'react-redux'
import { ActionButton } from '../../Fragments'

const ClassifyLetterTableBody = (props)=>{
     const {data} = props
     const page = useSelector(state=>state.paginationSlice.page)
     const pageSize = useSelector(state=>state.paginationSlice.pageSize)
     const category = {1: 'Surat Perintah', 4: 'Surat Undangan', 0: 'Surat Edaran', 2: 'Surat Permohonan', 3: 'Surat Tugas'}
     const [note, setNote] = useState(null)

     useEffect(()=>{
          // membuat penyimpanan sementara untuk note
          const tempNote = []
          data.map((letter, index)=>{
               tempNote.push({
                    'id':letter.id,
                    'status':null
               })
          })
          // memasukan note sementara ke note sebenarnya
          setNote(tempNote)
     }, [])
     
     return(
          <TableBody>
               {data.map((surat, index)=>{
                         return(
                              <tr key={surat.id}>
                                   <td>{index+1+((page-1)*pageSize)}</td>
                                   <td >{surat.agenda_number}</td>
                                   <td >{surat.letter_number}</td>
                                   <td >{surat.letter_date}</td>
                                   <td >{surat.received_date}</td>
                                   <td >{surat.source}</td>
                                   <td >{surat.subject}</td>
                                   <td >{surat.recipient}</td>
                                   <td >{category[surat.clasify]}</td>
                                   <td>
                                        {note && <ActionButton note={note} index={index} setNote={setNote}/>}
                                   </td>
                              </tr>
                         )
                    })}               
          </TableBody>
     )
}

export default ClassifyLetterTableBody