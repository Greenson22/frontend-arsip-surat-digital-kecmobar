import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useConfirmAlert } from '../../hooks'
import { List } from './List'
import useHandleConfirmed from '../../hooks/handle/classify_letter_page/useHandleConfirmed'
import { useDispatch } from 'react-redux'

// tombol klasifikasi
const ActionButton = (props)=>{
     const {note, notes, setNotes} = props
     const dispatch = useDispatch()
     
     if (note.status === 'loading'){
          setTableRow(note, 'loading') // merubah row dari table
          return <div>Tunggu sebentar...</div> // status loading
     }else{
          // tombol klasifikasi
          return <MDBBtn size='sm' color='warning' outline onClick={()=>{
               useConfirmAlert(result=>{
                    if (result.isConfirmed){
                         useHandleConfirmed(note, notes, setNotes, dispatch, setTableRow)
                    }
               }, "Mengklasifikasikan surat", "Jika kamu mau, maka surat akan langsung di klasifikasikan", "Ya", "Tidak")
          }}>klasifikasi</MDBBtn>
     }
}

// merubah table row
const setTableRow = (note, status)=>{
     // merubah class dari row di table
     const tRow = document.getElementById(note.id)
     const cRow = document.getElementById('category-'+note.id)
     if (tRow && cRow){
          if (status === 'success'){
               console.log('success')
               tRow.className = 'success'
               cRow.className = 'success-text'
          }else if(status === 'loading'){
               tRow.className = 'loading'
               cRow.className = ''
          }else{
               tRow.className = 'fail'
               cRow.className = ''
          }
     }
}


export default ActionButton