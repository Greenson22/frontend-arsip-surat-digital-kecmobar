import React, { useEffect, useRef } from "react"
import { MDBBtn } from "mdb-react-ui-kit"

const TableAction = (props)=>{
     const {title, button1, button1_target, button2, button2_target, button2Disabled=false, buttonAClick} = props
     const btnExportRef = useRef()

     useEffect(()=>{
          btnExportRef.current.disabled = button2Disabled
     }, [])

     return(
          <div className="row">
               <div className="col-12">
                    <h5 className="card-title mt-1 float-start">{title}</h5>
                    <div className="btn-group float-end">
                         <MDBBtn outline data-bs-target={button1_target} onClick={buttonAClick}>{button1}</MDBBtn>
                         <MDBBtn color="success" outline  data-bs-toggle="modal" ref={btnExportRef} data-bs-target={button2_target}>{button2}</MDBBtn>
                    </div>
               </div>
          </div>
     )
}

export default TableAction