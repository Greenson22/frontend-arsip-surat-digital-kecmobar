import React from 'react'
import { useState, useEffect } from 'react'
import { Card, CardBody, CardHeader } from '../Elements/Card'
import TableFilter from './TableFilter'
import UserBoxTableBody from './TableBody/UserBoxTableBody'
import { Table, TableHead } from '../Elements/Table'
import { useFetchData } from '../../hooks'

const columns = ["No", "Nama", "Pengguna", "Tingkat", "Status", "Tanggal Registrasi"]

const UserBox = ()=>{
     const [data, setData] = useState([])
     const api = import.meta.env.VITE_USERS_API_KEY

     useEffect(()=>{
          useFetchData(api, localStorage.getItem('accessToken'), (response)=>{
               setData(response.data)
          }, (error)=>{
               console.log(error)
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
                              {data && data['count'] > 0 && 
                                   <UserBoxTableBody data={data['results']}/>
                              }
                         </Table>
                    </CardBody>
               </Card>
          </div>
     )
}

export default UserBox