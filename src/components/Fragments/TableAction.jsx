import React, { useEffect, useRef } from "react"
import { MDBBtn } from "mdb-react-ui-kit"

const TableAction = (props)=>{
     const {title, buttonPrimary=null, buttonSecondary=null} = props

     return(
          <div className="row">
               <div className="col-12">
                    <h5 className="card-title mt-1 float-start">{title}</h5>
                    <div className="btn-group float-end">
                         {/* tombol paling kiri */}
                         {buttonSecondary && buttonSecondary.href === null &&
                              <MDBBtn outline onClick={buttonSecondary.click}>{buttonSecondary.children}</MDBBtn>}
                         {buttonSecondary && buttonSecondary.href &&
                              <a href={buttonSecondary.href}><MDBBtn outline onClick={buttonSecondary.click}>{buttonSecondary.children}</MDBBtn></a>}
                         {/* tombol paling kanan */}
                         {buttonPrimary && 
                              <MDBBtn outline onClick={buttonPrimary.click}>{buttonPrimary.children}</MDBBtn>}
                    </div>
               </div>
          </div>
     )
}

export default TableAction