import React from 'react'
import { TableBody } from '../../Elements/Table'

const UserBoxTableBody = (props)=>{
     const {data} = props
     
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
                              <td>{user.date_joined}</td>
                         </tr>
                    )
               })}
     </TableBody>)
}

export default UserBoxTableBody