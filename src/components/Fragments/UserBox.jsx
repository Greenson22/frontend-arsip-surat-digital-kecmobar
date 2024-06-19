import React from 'react'
import { useState, useEffect } from 'react'
import {Card, CardBody, CardHeader} from '../Elements/Card'
import TableFilter from './TableFilter'
import { Table, TableHead, TableBody, RowAction } from '../Elements/Table'

import axios from 'axios'
const url = 'http://localhost:8000/user_management/'
const columns = ["No", "Nama", "Pengguna", "Tingkat", "Status", "Tanggal Registrasi"]

const UserBox = ()=>{
     const [data, setData] = useState([])

     useEffect(()=>{
          axios.get(url)
          .then((response)=>{
               setData(response.data)
          })
          .catch((error)=>{
               // alert("Error")
          })
     }, [])

     return(
          <div className="col-12 col-md-8">
               <Card>
                    <CardHeader>
                         <h5 className="card-title">Daftar Pengguna</h5>
                    </CardHeader>
                    <CardBody>
                         <TableFilter/>

                         <Table add_class="table-sm">
                              <TableHead columns={columns}/>
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
                              </TableBody>
                         </Table>
                    </CardBody>
               </Card>
          </div>
     )
}

export default UserBox