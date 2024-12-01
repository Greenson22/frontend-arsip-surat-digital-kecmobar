import React, { forwardRef } from "react"
import { MDBBtn } from "mdb-react-ui-kit"

const Navbar = forwardRef((props, ref)=> {
  const {} = props

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow rounded sticky-top" ref={ref}>
      <div className="container-fluid" id="tes">
        <div className="d-flex d-inline">
            <MDBBtn id="sidebarCollapse" color="primary" outline><i className="fa-solid fa-bars"></i></MDBBtn>
            <p className="m-2" id="date"></p>
        </div>

        <div className="w-25 d-flex justify-content-end">
          <div className="w-75 d-flex justify-content-end">
              <h6 className="me-2 mt-2" id='user-name'>user</h6>
              <img className="img-fluid w-25 d-none d-md-block rounded-circle" src={localStorage.getItem('myImage')} alt=""/>
              <img className="img-fluid w-75 d-md-none rounded-circle" src={localStorage.getItem('myImage')} alt=""/>
          </div>
        </div>
      </div>
    </nav>
  )
})
export default Navbar