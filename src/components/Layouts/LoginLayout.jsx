import {Card, CardBody} from '../Elements/Card'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import background from "../../assets/office-scene-4255945.svg"
import icon from "../../assets/computer-desk-7339325.svg"

const LoginLayout = (props)=>{
     const {children} = props
     return (
          <div>
               <img src={background} alt="" className='w-100 h-100 object-fit-cover z-n1 position-absolute'/>
               <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
               <section className='vh-100'>
                    <MDBContainer className="py-5 h-100">
                         <MDBRow className="d-flex justify-content-center align-items-center h-100">
                              <MDBCol xl='7'>
                                   <Card>
                                        <MDBRow className="g-0">
                                             <MDBCol md='6' lg='5' className="d-none d-md-block">
                                                  <img src={icon} alt="login form" className="w-100 h-100 rounded-start"/>
                                             </MDBCol>
                                             <MDBCol md='12' lg='7' className="d-flex align-items-center">
                                                  <CardBody addClass="p-4 p-lg-5 text-black">
                                                       {children}
                                                  </CardBody>
                                             </MDBCol>
                                        </MDBRow>
                                   </Card>
                              </MDBCol>
                         </MDBRow>
                    </MDBContainer>
               </section>
          </div>
     )
}

export default LoginLayout