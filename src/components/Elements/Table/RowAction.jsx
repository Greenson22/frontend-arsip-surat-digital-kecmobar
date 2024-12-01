import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { setCommand } from '../../../redux/slices/commandSlice';

export const RowAction = (props)=>{
     const dispatch = useDispatch()
     const {view_target, edit_target, id, index} = props
     
     return (
          <div className="btn-group">
               <MDBBtn outline color='primary' size='sm' data-bs-toggle="modal" data-bs-target={view_target} onClick={()=>{
                    dispatch(setCommand({
                         'id':id,
                         'command':'view_file',
                         'index': index
                    }))
               }}>Lihat</MDBBtn>
               <MDBBtn outline color='warning' size='sm' data-bs-toggle="modal" data-bs-target={edit_target} onClick={()=>{
                    dispatch(setCommand({
                         'id':id,
                         'command':'view_data',
                         'index': index
                    }))
               }}>Ubah</MDBBtn>
               <MDBBtn outline color='danger' size='sm' onClick={()=>{
                    dispatch(setCommand({
                         'id':id,
                         'command': 'delete',
                    }))
               }}>Hapus</MDBBtn>
          </div>
     )
}

export default RowAction