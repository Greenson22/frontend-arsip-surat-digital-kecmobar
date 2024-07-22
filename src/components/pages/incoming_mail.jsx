import React, { useState } from "react"
import { useAlert, useIncomingmailEffect } from "../../hooks"
import useLoginValidate from "../../hooks/useLoginValidation"
import { IncomingMailEmptyLayout, IncomingMailLayout } from '../Layouts'
import axios from "axios"

function IncomingMailPage() {
     const [data, setData] = useState(null)
     const [iData, setIData] = useState(0)
     const [command, setCommand] = useState(null)

     useLoginValidate()
     useIncomingmailEffect(command, setData, setIData, setCommand)
     
     return (data && data['count'] > 0) ? 
     (<IncomingMailLayout data={data} iData={iData} command={command} setCommand={setCommand}/>) :
     (<IncomingMailEmptyLayout setCommand={setCommand}/>)

}
export default IncomingMailPage