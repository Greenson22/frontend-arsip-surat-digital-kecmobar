import React from "react"
import { UserManagementLayout, UserManagementEmptyLayout } from "../Layouts"
import { useLoginValidate, usePageEffect, useUserManagementActions } from "../../hooks"
import { useSelector } from "react-redux"

const UserManagementPage = ()=>{
     const data = useSelector(state=>state.dataSlice.data)
     
     useLoginValidate()
     usePageEffect(useUserManagementActions)

     return (data && data['count'] > 0) ? 
     ( <UserManagementLayout data={data} /> ):
     ( <UserManagementEmptyLayout /> )
}

export default UserManagementPage