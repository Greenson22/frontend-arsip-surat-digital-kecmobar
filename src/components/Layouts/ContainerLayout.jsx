import Sidebar from '../Fragments/Sidebar'
import Navbar from '../Fragments/Navbar'
import { useRef } from 'react'
import { useContainerLayoutEffect } from '../../hooks'

const ContainerLayout = (props) => {
  const {children} = props
  const dataRef = useRef()
  
  useContainerLayoutEffect(dataRef)

  return(
    <div className='wrapper'>
      <Sidebar/>
      <div id="content" className='active'>
        <Navbar date="27 Mei 2024" user="Admin" ref={dataRef}/>
        <div className="container-fluid">
          {children} {/* Konten */}
        </div>
      </div>
    </div>
  )
}

export default ContainerLayout