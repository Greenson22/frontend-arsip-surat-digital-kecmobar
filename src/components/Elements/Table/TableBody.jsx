import React from 'react';

export const TableBody = (props)=>{
     const children = props.children
     return (
          <tbody>
               {children}
          </tbody>
     )
}

export default TableBody