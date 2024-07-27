import { useState } from "react"
import { UserManagementLayout } from "../Layouts"
import { useLoginValidate, usePageEffect, useUserManagementActions } from "../../hooks"

const UserManagementPage = ()=>{
     const [data, setData] = useState([])
     const [iData, setIData] = useState([])
     const [command, setCommand] = useState([])
     const accessToken = localStorage.getItem('accessToken')
     
     useLoginValidate(accessToken)
     usePageEffect(command, setData, setIData, setCommand, useUserManagementActions)
     
     return(
          <UserManagementLayout data={data}/>
     )
}

export default UserManagementPage