import { useState } from "react"
import { UserManagementLayout, UserManagementEmptyLayout } from "../Layouts"
import { useLoginValidate, usePageEffect, useUserManagementActions } from "../../hooks"

const UserManagementPage = ()=>{
     const [data, setData] = useState(null)
     const [iData, setIData] = useState(0)
     const [command, setCommand] = useState(null)
     const accessToken = localStorage.getItem('accessToken')
     
     useLoginValidate(accessToken)
     usePageEffect(command, setData, setIData, setCommand, useUserManagementActions)

     return (data && data['count'] > 0) ? 
     ( <UserManagementLayout data={data} iData={iData} command={command} setCommand={setCommand}/> ):
     ( <UserManagementEmptyLayout setCommand={setCommand}/> )
}

export default UserManagementPage