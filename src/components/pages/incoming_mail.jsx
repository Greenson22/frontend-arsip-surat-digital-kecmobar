import React from "react"
import { usePageEffect, useLoginValidate } from "../../hooks"
import { IncomingMailEmptyLayout, IncomingMailLayout } from '../Layouts'
import { useIncomingmailActions } from "../../hooks"
import { useSelector } from "react-redux"

function IncomingMailPage() {
     const data = useSelector(state=>state.dataSlice.data)
     
     useLoginValidate()
     usePageEffect(useIncomingmailActions)

     return (data && data['count'] > 0) ?
     (<IncomingMailLayout data={data}/>) :
     (<IncomingMailEmptyLayout />)

}
export default IncomingMailPage