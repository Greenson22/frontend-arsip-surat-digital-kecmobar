import React from "react"
import { MDBBtn, MDBListGroupItem } from "mdb-react-ui-kit"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faCheck, faCloud, faX } from "@fortawesome/free-solid-svg-icons"

const List = (props)=>{
     const {children, status, spinnerSize='spinner-border-sm'} = props
     let statusElement = <p></p>
     switch(status){
          case 'download':
               statusElement = <MDBBtn size="sm"><FontAwesomeIcon icon={faDownload}/></MDBBtn>
               break
          case 'check':
               statusElement = <FontAwesomeIcon icon={faCheck} style={{color: "#74C0FC",}}/>
               break
          case 'spinner':
               statusElement = <div className={"spinner-border text-primary "+spinnerSize}></div>
               break
          case 'cloud':
               statusElement = <FontAwesomeIcon icon={faCloud} style={{color: "#74C0FC",}}/>
               break
          case 'fail':
               statusElement = <FontAwesomeIcon icon={faX} style={{color: "#ff0000",}}/>
               break
     }

     return (
          <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
               {children}
               {statusElement}
          </MDBListGroupItem>
     )
}

export default List
