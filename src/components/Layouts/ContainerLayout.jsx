import Sidebar from '../Fragments/Sidebar'
import Navbar from '../Fragments/Navbar'

const ContainerLayout = (props) => {
    const {children} = props
    return(
      <div className='wrapper'>
        <Sidebar/>
        <div id="content" className='active'>
          <Navbar date="27 Mei 2024" user="Admin"/>
          <div className="container-fluid">
            {children} {/* Konten */}
          </div>
        </div>
      </div>
    )
  }

export default ContainerLayout