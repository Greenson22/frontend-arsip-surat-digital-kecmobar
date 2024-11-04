import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useConfirmAlert, usePostData } from '../../hooks'
import { List } from './List'
import { useDispatch } from 'react-redux'
import { setCommand } from '../../redux/slices/commandSlice'

// tombol klasifikasi
const ActionButton = (props)=>{
     const {note, notes, setNotes} = props
     const dispatch = useDispatch()
     // console.log(notex)
     
     if (note.status === 'loading'){
          // status loading
          return <List status={'spinner'}></List>
     }else{
          // tombol klasifikasi
          return <MDBBtn size='sm' color='warning' outline onClick={()=>{
               useConfirmAlert(result=>{
                    if (result.isConfirmed){
                         // mengubah status note
                         setNoteStatus('loading', note, notes, setNotes)
                         // mengirim permintaan ke api untuk klasifikasi surat
                         usePostData(import.meta.env.VITE_CLASSIFY_LETTER_API_KEY, {'id':note.id}, localStorage.getItem('accessToken'), response=>{
                              setNoteStatus(null, note, notes, setNotes)
                              console.log(response)
                              // mengirim permintaan ke action untuk melakukan reset terhadap data
                              dispatch(setCommand({
                                   'command':'classify'
                              }))
                         })
                    }
               }, "Mengklasifikasikan surat", "Jika kamu mau, maka surat akan langsung di klasifikasikan", "Ya", "Tidak")
          }}>{note.id}</MDBBtn>
     }
}

// mengubah status note
const setNoteStatus = (status, note, notes, setNotes)=>{
     const tempNote = notes.slice()
     tempNote.map(item=>{
          if (item.id === note.id){
               item.status = status
          }
     })
     console.log(tempNote)
     setNotes(tempNote)
}

export default ActionButton