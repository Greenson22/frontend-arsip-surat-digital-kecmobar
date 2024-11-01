import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useConfirmAlert, usePostData } from '../../hooks'
import { List } from './List'
import { useDispatch } from 'react-redux'
import { setCommand } from '../../redux/slices/commandSlice'

// tombol klasifikasi
const ActionButton = (props)=>{
     const {note, index, setNote} = props
     const dispatch = useDispatch()

     if (note[index].status === 'loading'){
          // status loading
          return <List status={'spinner'}></List>
     }else{
          // tombol klasifikasi
          return <MDBBtn size='sm' color='warning' outline onClick={()=>{
               useConfirmAlert(result=>{
                    if (result.isConfirmed){
                         setNoteStatus('loading', index, note, setNote)
                         usePostData(import.meta.env.VITE_CLASSIFY_LETTER_API_KEY, {'id':note[index].id}, localStorage.getItem('accessToken'), response=>{
                              setNoteStatus(null, index, note, setNote)
                              console.log(response)
                              // mengirim permintaan ke action untuk melakukan reset terhadap data
                              dispatch(setCommand({
                                   'command':'classify'
                              }))
                         })
                    }
               }, "Mengklasifikasikan surat", "Jika kamu mau, maka surat akan langsung di klasifikasikan", "Ya", "Tidak")
          }}>Klasifikasi</MDBBtn>
     }
}

// mengubah status note
const setNoteStatus = (status, index, note, setNote)=>{
     const tempNote = note.slice()
     tempNote[index].status = status
     setNote(tempNote)
}

export default ActionButton