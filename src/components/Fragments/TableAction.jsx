import React, { useEffect, useRef } from "react"
import { MDBBtn } from "mdb-react-ui-kit"

const TableAction = (props)=>{
     const {title, buttonChildren, buttonClick} = props

     return(
          <div className="row">
               <div className="col-12">
                    <h5 className="card-title mt-1 float-start">{title}</h5>
                    <div className="btn-group float-end">
                         <MDBBtn outline onClick={buttonClick}>{buttonChildren}</MDBBtn>
                    </div>
               </div>
          </div>
     )
}

export default TableAction