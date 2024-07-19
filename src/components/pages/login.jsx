import React from 'react'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { LoginLayout } from '../Layouts'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import { useAlert } from '../../hooks'


function LoginPage() {
     const navigate = useNavigate()

     const handleSubmit = (event)=>{
          event.preventDefault()
          const formData = new FormData(event.target)
          formData.append('username', event.target.username.value)
          formData.append('password', event.target.password.value)

          useAlert('loading')

          axios.post('http://localhost:8000/api/token/', formData)
          .then((response)=>{
               const data = response.data
               localStorage.setItem('accessToken', data.access)
               localStorage.setItem('refreshToken', data.refresh)
               useAlert('success_login')
               navigate('/incoming_mail')
          })
          .catch((error)=>{
               console.log(error)
               useAlert('error_login')
          })
     }

     return (
          <LoginLayout>                   
               <form action="" id='form-login' onSubmit={handleSubmit}>
                    <div className="align-items-center pb-1 mb-2">
                         <span className="h2">Arsip surat digital</span>
                    </div>

                    <MDBInput id='username' label="Pengguna" type="text" className='mb-2' size="lg" required/>
                    <MDBInput id='password' label="Password" type="password" className='mb-2' size="lg" required/>
                    
                    <div className="mb-4 d-grid">
                         <MDBBtn color='dark' size='lg'>Login</MDBBtn>
                    </div>
               </form>
          </LoginLayout>
          )
     }

export default LoginPage
