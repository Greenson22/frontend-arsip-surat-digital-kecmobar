import React, { useState } from "react"
import { usePageEffect } from "../../hooks"
import useLoginValidate from "../../hooks/useLoginValidation"
import { IncomingMailEmptyLayout, IncomingMailLayout } from '../Layouts'
import useIncomingmailActions from "../../hooks/incomingmail/useIncomingmailActions"

function IncomingMailPage() {
     const [data, setData] = useState(null)
     const [iData, setIData] = useState(0)
     const [command, setCommand] = useState(null)

     useLoginValidate()
     usePageEffect(command, setData, setIData, setCommand, useIncomingmailActions)
     
     return (data && data['count'] > 0) ? 
     (<IncomingMailLayout data={data} iData={iData} command={command} setCommand={setCommand}/>) :
     (<IncomingMailEmptyLayout setCommand={setCommand}/>)

}
export default IncomingMailPage