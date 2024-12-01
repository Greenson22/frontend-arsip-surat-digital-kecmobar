import React from 'react'
import { useSelector } from 'react-redux'
import { useOutgoingmailAction, useLoginValidate, usePageEffect } from '../../hooks'
import { ClassifyOutgoingLetterLayout } from '../Layouts/'

function ClassifyOutgoingLetterPage(){
     const data = useSelector(state=>state.dataSlice.data)

     useLoginValidate()
     usePageEffect(useOutgoingmailAction)
     
     return (data && data['count'] > 0) ?
     (<ClassifyOutgoingLetterLayout data={data}/>) :
     (<div> kosong bro</div>)
}

export default ClassifyOutgoingLetterPage