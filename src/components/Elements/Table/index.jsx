import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export const Table = (props)=>{
     const {children, add_class} = props
     return (
          <div className="table-responsive">
               <table className={`table table-bordered table-striped ${add_class}`}>
                    {children}
               </table>
          </div>
     )
}

export const TableHead = (props)=>{
     const {columns=["Kosong"], datas=["Empty"], rotate=false} = props

     return (
          rotate ? 
          <tbody>
               {columns.map((column, index)=>{
                    return (
                         <tr key={index}>
                              <th>{column}</th>
                              <td>{datas[index]}</td>
                         </tr>
                    )
               })}
          </tbody>
          :

          <thead>
               <tr>
                    {columns.map((column, index)=>{
                         return (
                              <th key={index}>{column}</th>
                         )
                    })}
               </tr>
          </thead>
     )
}

export const TableBody = (props)=>{
     const children = props.children
     return (
          <tbody>
               {children}
          </tbody>
     )
}

export const RowAction = (props)=>{
     const {lihat_target, ubah_target} = props
     return (
          <div className="btn-group">
               <MDBBtn outline color='primary' size='sm' data-bs-toggle="modal" data-bs-target={lihat_target}>Lihat</MDBBtn>
               <MDBBtn outline color='warning' size='sm' data-bs-toggle="modal" data-bs-target={ubah_target}>Ubah</MDBBtn>
               <MDBBtn outline color='danger' size='sm'>Hapus</MDBBtn>
          </div>
     )
}