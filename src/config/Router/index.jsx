import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from './../../components/pages/login.jsx'
import HomePage from './../../components/pages/home.jsx'
import IncomingMailPage from './../../components/pages/incoming_mail.jsx'
import OutgoingMailPage from './../../components/pages/outgoing_mail.jsx'
import UserManagementPage from './../../components/pages/user_management.jsx'
import ClassifyLetterPage from './../../components/pages/classify_letter.jsx'

import ContainerLayout from '../../components/Layouts/ContainerLayout.jsx'

const router = createBrowserRouter([
     {
          path: "/",
          element: <ContainerLayout render={<HomePage/>} />,
     },
     {
          path: "/incoming_mail",
          element: <ContainerLayout render={<IncomingMailPage/>} />,
     },
     {
          path: "/outgoing_mail",
          element: <ContainerLayout render={<OutgoingMailPage/>} />,
     },
     {
          path: "/management_users",
          element: <ContainerLayout render={<UserManagementPage/>} />,
     },
     {
          path: "/login",
          element: <LoginPage/>,
     },
     {
          path: "/classify",
          element: <ContainerLayout render={<ClassifyLetterPage/>} />,
     }
])

const Router = ()=> {
  return (
     <RouterProvider router={router}/>
  )
}

export default Router
