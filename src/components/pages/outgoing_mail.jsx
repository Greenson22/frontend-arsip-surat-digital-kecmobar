import { OutgoingMailLayout, OutgoingMailEmptyLayout } from '../Layouts'
import { useLoginValidate, usePageEffect } from '../../hooks'
import { useSelector } from 'react-redux'
import useOutgoingmailAction from '../../hooks/actions/useOutgoingmailAction'

const OutgoingMailPage = ()=>{
     const data = useSelector(state=>state.dataSlice.data)

     useLoginValidate()
     usePageEffect(useOutgoingmailAction)
     return (data && data['count'] > 0) ?
     (<OutgoingMailLayout data={data}/>) :
     (<OutgoingMailEmptyLayout />)
}

export default OutgoingMailPage