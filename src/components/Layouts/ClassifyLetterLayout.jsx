import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ClassifyLetterLayout = (props)=>{
     const columns = ["No", "Nomor agenda", "Nomor surat", "Tanggal surat", "Tanggal terima", "Asal surat", "Perihal", "Penerima", "Tindakan"]
     const {data} = props
     const iData = useSelector(state=>state.dataSlice.iData)
     const api = import.meta.env.VITE_INCOMINGMAIL_API_KEY
     const dispatch = useDispatch()
     const [addModal, setAddModal] = useState(false)
     const [addMultipleModal, setMultipleModal] = useState(false)
     
     return (
          <div>
               
          </div>
     )
}

export default ClassifyLetterLayout