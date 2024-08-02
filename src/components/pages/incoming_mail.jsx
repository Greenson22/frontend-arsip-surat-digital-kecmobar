import React, { useState } from "react"
import { usePageEffect, useLoginValidate } from "../../hooks"
import { IncomingMailEmptyLayout, IncomingMailLayout } from '../Layouts'
import { useIncomingmailActions } from "../../hooks"

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