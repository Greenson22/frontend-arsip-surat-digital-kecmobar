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
     const {view_target, edit_target, edit_function, get_id, id} = props
     return (
          <div className="btn-group">
               <MDBBtn outline color='primary' size='sm' data-bs-toggle="modal" data-bs-target={view_target}>Lihat</MDBBtn>
               <MDBBtn outline color='warning' size='sm' data-bs-toggle="modal" data-bs-target={edit_target} onClick={edit_function}>Ubah</MDBBtn>
               <MDBBtn outline color='danger' size='sm' onClick={()=>{
                    get_id({
                         'id':id,
                         'command':'delete'
                    })
               }}>Hapus</MDBBtn>
          </div>
     )
}