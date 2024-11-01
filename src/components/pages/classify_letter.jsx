import React from 'react'
import { useSelector } from 'react-redux'
import { useIncomingmailActions, useLoginValidate, usePageEffect } from '../../hooks'
import { ClassifyLetterLayout } from '../Layouts/'

function ClassifyLetterPage(){
     const data = useSelector(state=>state.dataSlice.data)

     useLoginValidate()
     usePageEffect(useIncomingmailActions)

     return (data && data['count'] > 0) ?
     (<ClassifyLetterLayout data={data}/>) :
     (<div> kosong bro</div>)
}

export default ClassifyLetterPage