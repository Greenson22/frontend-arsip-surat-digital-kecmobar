import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from './../../components/pages/login.jsx'
import HomePage from './../../components/pages/home.jsx'
import IncomingMailPage from './../../components/pages/incoming_mail.jsx'
import OutgoingMailPage from './../../components/pages/outgoing_mail.jsx'
import UserManagementPage from './../../components/pages/user_management.jsx'

import React from 'react'
import ContainerLayout from '../../components/Layouts/ContainerLayout.jsx'

const router = createBrowserRouter([
     {
          path: "/",
          element:
          <ContainerLayout>
               <HomePage/>
          </ContainerLayout>,
     },
     {
          path: "/incoming_mail",
          element: 
          <ContainerLayout>
               <IncomingMailPage/>
          </ContainerLayout>,
     },
     {
          path: "/outgoing_mail",
          element: 
          <ContainerLayout>
               <OutgoingMailPage/>
          </ContainerLayout>,
     },
     {
          path: "/management_users",
          element: 
          <ContainerLayout>
               <UserManagementPage/>,
          </ContainerLayout>
     },
     {
          path: "/login",
          element: <div>
               <LoginPage/>
          </div>,
     },
])

const Router = ()=> {
  return (
     <RouterProvider router={router}/>
  )
}

export default Router
