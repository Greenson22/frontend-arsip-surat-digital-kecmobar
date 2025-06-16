import React, { useRef, useState, useEffect } from 'react';
import { MDBInput, MDBBtn, MDBIcon, MDBTypography } from 'mdb-react-ui-kit';
import { LoginLayout } from '../Layouts';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useBase64, useFetchFileProfilePicture, useResponseFormattedString } from '../../hooks';
import { jwtDecode } from 'jwt-decode';
import { useAlert, useErrorAlert } from '../../hooks/alert';

function LoginPage() {
    const navigate = useNavigate();
    const backgroundImgRef = useRef();
    // State untuk mendeteksi mode lokal
    const [isLocalMode, setIsLocalMode] = useState(false);

    // useEffect untuk memeriksa hostname saat komponen dimuat
    useEffect(() => {
        const currentHostname = localStorage.getItem('hostname');
        // Cek jika hostname mengandung 'localhost' atau '127.0.0.1'
        if (currentHostname && (currentHostname.includes('localhost') || currentHostname.includes('127.0.0.1'))) {
            setIsLocalMode(true);
        }
    }, []);


    const saveImage = async (file) => {
        const base64Image = await useBase64(file);
        localStorage.setItem('myImage', base64Image);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append('username', event.target.username.value);
        formData.append('password', event.target.password.value);

        useAlert('loading');

        axios.post(localStorage.getItem('hostname') + import.meta.env.VITE_ACCESS_TOKEN_API_KEY, formData)
            .then((response) => {
                const data = response.data;
                localStorage.setItem('accessToken', data.access);
                localStorage.setItem('refreshToken', data.refresh);
                const userId = jwtDecode(localStorage.getItem('accessToken'))['user_id'];

                useFetchFileProfilePicture(userId, (response) => {
                    saveImage(response.data);
                    useAlert('success_login');
                    navigate('/incoming_mail');
                }, (error) => {
                    useErrorAlert('', useResponseFormattedString(error.response.data));
                    navigate('/incoming_mail');
                });
            })
            .catch((error) => {
                console.log(error);
                useErrorAlert('', useResponseFormattedString(error.response.data));
            });
    };

    return (
        <>
            {/* --- Blok CSS Kustom untuk Tema Local Development --- */}
            <style>{`
                @keyframes animated-grid {
                    from { background-position: 0 0; }
                    to { background-position: 100px 100px; }
                }

                .local-mode-theme {
                    /* Latar Belakang */
                    background-color: #111827; /* Dark blue-gray */
                    background-image: linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
                    background-size: 100px 100px;
                    animation: animated-grid 5s linear infinite;
                    color: #f9fafb; /* Off-white text */
                }

                .local-mode-theme #form-login {
                    font-family: 'Courier New', Courier, monospace;
                    background: rgba(17, 24, 39, 0.8); /* Darker panel with transparency */
                    border: 1px solid rgba(0, 255, 255, 0.2);
                    backdrop-filter: blur(8px);
                    padding: 2rem;
                    border-radius: 0.5rem;
                }

                .local-mode-theme .h2 {
                    color: #00ffff; /* Cyan */
                    text-shadow: 0 0 5px rgba(0, 255, 255, 0.7);
                }

                .local-mode-theme .form-control {
                    background-color: rgba(0, 0, 0, 0.3) !important;
                    color: #e5e7eb !important;
                    border: 1px solid rgba(0, 255, 255, 0.3) !important;
                    font-family: 'Courier New', Courier, monospace;
                }

                .local-mode-theme .form-outline .form-control:focus {
                    box-shadow: 0 0 15px rgba(0, 255, 255, 0.5) !important;
                    border-color: #00ffff !important;
                }

                .local-mode-theme .btn-local-mode {
                    background-color: transparent;
                    border: 2px solid #00ffff;
                    color: #00ffff;
                    transition: all 0.3s ease;
                    box-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
                }

                .local-mode-theme .btn-local-mode:hover {
                    background-color: #00ffff;
                    color: #111827;
                    box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
                }

                .local-mode-theme .settings-icon {
                    color: #00ffff; /* Cyan icon */
                    transition: transform 0.3s ease;
                }
                .local-mode-theme .settings-icon:hover {
                    transform: rotate(90deg);
                }
            `}</style>
            
            {/* Wrapper utama yang menerapkan tema berdasarkan state */}
            <div className={isLocalMode ? 'local-mode-theme' : ''}>
                <LoginLayout ref={backgroundImgRef}>
                    <div
                        style={{ position: 'absolute', top: '1rem', right: '1.5rem', cursor: 'pointer' }}
                        onClick={() => navigate('/hostname')}
                        title="Pengaturan Hostname"
                    >
                        <i className={`fas fa-cog fa-2x ${isLocalMode ? 'settings-icon' : 'text-secondary'}`}></i>
                    </div>

                    <form action="" id="form-login" onSubmit={handleSubmit}>
                        {/* --- Penanda Mode Lokal --- */}
                        {isLocalMode && (
                            <MDBTypography note noteColor='info' className='mb-4 text-center'>
                                <MDBIcon fas icon="tools" className="me-2" /> <strong>Local Development Mode</strong>
                            </MDBTypography>
                        )}
                        
                        <div className="align-items-center pb-1 mb-2">
                            <span className="h2">Arsip surat digital</span>
                        </div>

                        <MDBInput id='username' label="Pengguna" type="text" className='mb-2' size="lg" required contrast={isLocalMode} />
                        <MDBInput id='password' label="Password" type="password" className='mb-2' size="lg" required contrast={isLocalMode} />
                        
                        <div className="mb-4 d-grid">
                            {/* Tombol login berubah sesuai mode */}
                            <MDBBtn color={isLocalMode ? '' : 'dark'} size='lg' className={isLocalMode ? 'btn-local-mode' : ''}>
                                Login
                            </MDBBtn>
                        </div>
                    </form>
                </LoginLayout>
            </div>
        </>
    );
}

export default LoginPage;


// import React, { useRef } from 'react'
// import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
// import { LoginLayout } from '../Layouts'
// import { useNavigate } from 'react-router-dom'

// import axios from 'axios';
// import { useBase64, useFetchFileProfilePicture, useResponseFormattedString } from '../../hooks'
// import { jwtDecode } from 'jwt-decode';
// import { useAlert, useErrorAlert } from '../../hooks/alert'


// function LoginPage() {
//      const navigate = useNavigate()
//      const backgroundImgRef = useRef()

//      const saveImage = async (file)=>{
//           const base64Image = await useBase64(file)
//           localStorage.setItem('myImage', base64Image)
//      }

//      const handleSubmit = (event)=>{
//           event.preventDefault()
//           const formData = new FormData(event.target)
//           formData.append('username', event.target.username.value)
//           formData.append('password', event.target.password.value)

//           useAlert('loading')
          
//           axios.post(localStorage.getItem('hostname')+import.meta.env.VITE_ACCESS_TOKEN_API_KEY, formData)
//           .then((response)=>{
//                const data = response.data
//                localStorage.setItem('accessToken', data.access)
//                localStorage.setItem('refreshToken', data.refresh)
               
//                const userId = jwtDecode(localStorage.getItem('accessToken'))['user_id']
               
//                useFetchFileProfilePicture(userId, (response)=>{
//                     saveImage(response.data)
//                     useAlert('success_login')
//                     navigate('/incoming_mail')
//                }, (error)=>{
//                     useErrorAlert('', useResponseFormattedString(error.response.data))
//                     navigate('/incoming_mail')
//                })

//           })
//           .catch((error)=>{
//                console.log(error)
//                useErrorAlert('', useResponseFormattedString(error.response.data))
//           })
//      }

//      return (
//           <LoginLayout ref={backgroundImgRef}>
//                <form action="" id='form-login' onSubmit={handleSubmit}>
//                     <div className="align-items-center pb-1 mb-2">
//                          <span className="h2">Arsip surat digital</span>
//                     </div>

//                     <MDBInput id='username' label="Pengguna" type="text" className='mb-2' size="lg" required/>
//                     <MDBInput id='password' label="Password" type="password" className='mb-2' size="lg" required/>
                    
//                     <div className="mb-4 d-grid">
//                          <MDBBtn color='dark' size='lg'>Login</MDBBtn>
//                     </div>
//                </form>
//           </LoginLayout>
//           )
//      }

// export default LoginPage
