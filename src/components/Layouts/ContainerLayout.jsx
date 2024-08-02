import Sidebar from '../Fragments/Sidebar'
import Navbar from '../Fragments/Navbar'
import { useRef } from 'react'
import { useContainerLayoutEffect } from '../../hooks'

const ContainerLayout = (props) => {
  const {children} = props
  const navRef = useRef()
  
  useContainerLayoutEffect(navRef)

  return(
    <div className='wrapper'>
      <Sidebar/>
      <div id="content" className='active'>
        <Navbar ref={navRef}/>
        <div className="container-fluid">
          {children} {/* Konten */}
        </div>
      </div>
    </div>
  )
}

export default ContainerLayout