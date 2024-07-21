import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useIncomingmailEffect } from "../../hooks"
import useLoginValidate from "../../hooks/useLoginValidation"

import { IncomingMailEmptyLayout, IncomingMailLayout } from '../Layouts'

function IncomingMailPage() {
     const url = useSelector((state) => state.api.incomingmail)

     const accessToken = localStorage.getItem('accessToken')
     useLoginValidate(accessToken)

     const [data, setData] = useState(null)
     const [iData, setIData] = useState(0)
     const [command, setCommand] = useState(null)
     const [fileUrl, setFileUrl] = useState(null)
     
     useIncomingmailEffect(url, accessToken, command, setData, setIData, setFileUrl, setCommand)

     return (data && data['count'] > 0) ? 
     (<IncomingMailLayout url={url} data={data} iData={iData} command={command} setCommand={setCommand}/>) :
     (<IncomingMailEmptyLayout setCommand={setCommand}/>)

}
export default IncomingMailPage