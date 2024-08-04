import React from "react"
import { TableBody, RowAction } from "../Elements/Table"
import { useFormattedDate } from "../../hooks"

const UserManagementTableBody = (props)=>{
     const {data, setCommand} = props
     
     return (
          <TableBody>
               {data.map((user, index)=>{
                         return(
                              <tr key={user.id}>
                                   <td>{index+1}</td>
                                   <td>{user.first_name+' '+user.last_name}</td>
                                   <td>{user.username}</td>
                                   <td>{user.is_superuser ? 'admin' : 'user'}</td>
                                   <td>{user.is_active ? 'aktif' : 'nonaktif'}</td>
                                   <td>{useFormattedDate(user.date_joined)}</td>
                                   <td><RowAction edit_target='#editUserModal' view_target='#viewProfileModal' id={user.id} index={index} setCommand={setCommand}/></td>
                              </tr>
                         )
                    })}
          </TableBody>
     )
}
export default UserManagementTableBody