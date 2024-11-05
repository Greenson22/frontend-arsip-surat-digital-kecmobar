import React, { useEffect, useState } from 'react'
import { TableBody } from '../../Elements/Table'
import { useSelector } from 'react-redux'
import { ActionButton } from '../../Fragments'

const tempNote = []
const ClassifyLetterTableBody = (props)=>{
     const {data} = props
     const page = useSelector(state=>state.paginationSlice.page)
     const pageSize = useSelector(state=>state.paginationSlice.pageSize)
     const category = {1: 'Surat Perintah', 4: 'Surat Undangan', 0: 'Surat Edaran', 2: 'Surat Permohonan', 3: 'Surat Tugas'}
     const [notes, setNotes] = useState(null)
     
     useEffect(()=>{
          // membuat penyimpanan sementara untuk note
          data.map((letter, index)=>{
               const idExists = tempNote.some(item => item.id === letter.id)
               if (!idExists){
                    tempNote.push({
                         'id':letter.id,
                         'status':null
                    })
               }
          })
          // memasukan note sementara ke note sebenarnya
          setNotes(tempNote)
     }, [data])
     
     return(
          <TableBody>
               {notes && data.map((surat, index)=>{
                         const note = notes.find(item=>item.id === surat.id)
                         return(
                              <tr key={surat.id} id={surat.id}>
                                   <td>{index+1+((page-1)*pageSize)}</td>
                                   <td >{surat.agenda_number}</td>
                                   <td >{surat.letter_number}</td>
                                   <td >{surat.letter_date}</td>
                                   <td >{surat.received_date}</td>
                                   <td >{surat.source}</td>
                                   <td >{surat.subject}</td>
                                   <td >{surat.recipient}</td>
                                   <td id={'category-'+surat.id}>{category[surat.clasify]}</td>
                                   <td>
                                        {note && <ActionButton note={note} notes={notes} setNotes={setNotes} />}
                                   </td>
                              </tr>
                         )
                    })}               
          </TableBody>
     )
}

export default ClassifyLetterTableBody