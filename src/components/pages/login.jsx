import React from 'react'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { LoginLayout } from '../Layouts'


function LoginPage() {
     const handleSubmit = (event)=>{
          console.log(event.target.name)
     }

     return (
          <LoginLayout>                   
               <form action="" id='form-login' onSubmit={handleSubmit}>
                    <div className="align-items-center pb-1 mb-2">
                         <span className="h2">Arsip surat digital</span>
                    </div>

                    <MDBInput label="Pengguna" type="text" className='mb-2' size="lg"/>
                    <MDBInput label="Password" type="password" className='mb-2' size="lg"/>
                    <div className="mb-4 d-grid">
                         <MDBBtn color='dark' size='lg'>Login</MDBBtn>
                    </div>
               </form>
          </LoginLayout>
     )}

export default LoginPage
