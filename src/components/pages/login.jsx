import React, { useRef } from 'react'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { LoginLayout } from '../Layouts'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import { useBase64, useFetchFileProfilePicture, useResponseFormattedString } from '../../hooks'
import { jwtDecode } from 'jwt-decode';
import { useAlert, useErrorAlert } from '../../hooks/alert'


function LoginPage() {
     const navigate = useNavigate()
     const backgroundImgRef = useRef()

     const saveImage = async (file)=>{
          const base64Image = await useBase64(file)
          localStorage.setItem('myImage', base64Image)
     }

     const handleSubmit = (event)=>{
          event.preventDefault()
          const formData = new FormData(event.target)
          formData.append('username', event.target.username.value)
          formData.append('password', event.target.password.value)

          useAlert('loading')
          
          axios.post(import.meta.env.VITE_ACCESS_TOKEN_API_KEY, formData)
          .then((response)=>{
               const data = response.data
               localStorage.setItem('accessToken', data.access)
               localStorage.setItem('refreshToken', data.refresh)
               
               const userId = jwtDecode(localStorage.getItem('accessToken'))['user_id']
               
               useFetchFileProfilePicture(userId, (response)=>{
                    saveImage(response.data)
                    useAlert('success_login')
                    navigate('/incoming_mail')
               }, (error)=>{
                    useErrorAlert('', useResponseFormattedString(error.response.data))
                    navigate('/incoming_mail')
               })

          })
          .catch((error)=>{
               console.log(error)
               useErrorAlert('', useResponseFormattedString(error.response.data))
          })
     }

     return (
          <LoginLayout ref={backgroundImgRef}>
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
