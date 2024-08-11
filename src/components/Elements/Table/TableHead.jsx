import React from 'react';

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

export default TableHead