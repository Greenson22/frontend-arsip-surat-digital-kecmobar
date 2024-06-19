import React from "react"
import { MDBBtn } from "mdb-react-ui-kit"

import profile_photo from "../../assets/images/avatar_female.jpeg"

const Navbar = (props)=> {
  const {date, user} = props
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow rounded sticky-top">
      <div className="container-fluid">
        <div className="d-flex d-inline">
            <MDBBtn id="sidebarCollapse" color="primary" outline><i className="fa-solid fa-bars"></i></MDBBtn>
            <p className="m-2">{date}</p>
        </div>

        <div className="w-25 d-flex justify-content-end">
          <div className="w-75 d-flex justify-content-end">
              <h6 className="me-2 mt-2">{user}</h6>
              <img className="img-fluid w-25 d-none d-md-block" src={profile_photo} alt=""/>
              <img className="img-fluid w-75 d-md-none" src={profile_photo} alt=""/>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar