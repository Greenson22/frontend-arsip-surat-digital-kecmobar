import { useState } from "react"
import { UserManagementLayout } from "../Layouts"
import useLoginValidate from "../../hooks/useLoginValidation"

const UserManagementPage = ()=>{

     const accessToken = localStorage.getItem('accessToken')
     useLoginValidate(accessToken)

     const [data, setData] = useState([])

     return(
          <UserManagementLayout data={data}/>
     )
}

export default UserManagementPage