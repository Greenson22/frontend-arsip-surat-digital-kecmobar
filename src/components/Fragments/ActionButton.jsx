import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useConfirmAlert } from '../../hooks'
import useHandleConfirmed from '../../hooks/handle/classify_letter_page/useHandleConfirmed'
import { useDispatch } from 'react-redux'

// tombol klasifikasi
const ActionButton = (props)=>{
     const {note, notes, setNotes, type} = props
     const dispatch = useDispatch()
     
     const handleClassifyBtn = ()=>{
          useConfirmAlert(result=>{
               if (result.isConfirmed){
                    useHandleConfirmed(note, notes, setNotes, dispatch, setTableRow, type)
               }
          }, "Mengklasifikasikan surat", "Jika kamu mau, maka surat akan langsung di klasifikasikan", "Ya", "Tidak")
     }
     const handleClassifyHiddenBtn = ()=>{
          useHandleConfirmed(note, notes, setNotes, dispatch, setTableRow, type)
     }
     
     if (note.status === 'loading'){
          setTableRow(note, 'loading') // merubah row dari table
          return <div>Tunggu sebentar...</div> // status loading
     }else{
          // tombol klasifikasi
          return <div>
               {/* tombol klasifikasi */}
               <MDBBtn size='sm' color='warning' outline onClick={handleClassifyBtn}>
                    klasifikasi
               </MDBBtn>
               {/* tombol hidden untuk multiple classify */}
               <button id={'btn-'+note.id} onClick={handleClassifyHiddenBtn} hidden>tes button</button> 
          </div>
     }
}

// merubah table row
const setTableRow = (note, status)=>{
     // merubah class dari row di table
     const tRow = document.getElementById(note.id)
     const cRow = document.getElementById('category-'+note.id)
     if (tRow && cRow){
          if (status === 'success'){
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