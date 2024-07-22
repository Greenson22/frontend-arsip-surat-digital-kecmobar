import React, { useState } from "react"
import { useIncomingmailEffect } from "../../hooks"
import useLoginValidate from "../../hooks/useLoginValidation"
import { IncomingMailEmptyLayout, IncomingMailLayout } from '../Layouts'

function IncomingMailPage() {
     const [data, setData] = useState(null)
     const [iData, setIData] = useState(0)
     const [command, setCommand] = useState(null)
     const accessToken = localStorage.getItem('accessToken')
     
     useLoginValidate(accessToken)
     useIncomingmailEffect(command, setData, setIData, setCommand)
     
     return (data && data['count'] > 0) ? 
     (<IncomingMailLayout data={data} iData={iData} command={command} setCommand={setCommand}/>) :
     (<IncomingMailEmptyLayout setCommand={setCommand}/>)

}
export default IncomingMailPage