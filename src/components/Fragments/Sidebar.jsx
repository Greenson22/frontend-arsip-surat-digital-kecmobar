import WrapperItem from '../Elements/WrapperItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faEnvelope, faPaperPlane, faUsersGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Sidebar = (props)=>{
   const {active} = props
   const navigate = useNavigate()

   function handleLogout(){
      localStorage.setItem('accessToken', '')
      localStorage.setItem('refreshToken', '')
      navigate('/login')
   }

   return (
      <nav id='sidebar' className=''>
         <ul className="list-unstyled">
            <WrapperItem value="Beranda" href="/" active={active}>
               <FontAwesomeIcon icon={faHouse}/>
            </WrapperItem>
            <WrapperItem value="Surat Masuk" href="/incoming_mail" active={active}>
               <FontAwesomeIcon icon={faEnvelope} />
            </WrapperItem>
            <WrapperItem value="Surat Keluar" href="/outgoing_mail" active={active}>
               <FontAwesomeIcon icon={faPaperPlane} />
            </WrapperItem>
            <WrapperItem value="User Config" href="/management_users" active={active}>
               <FontAwesomeIcon icon={faUsersGear} />
            </WrapperItem>
            <WrapperItem value="Logout" href="" active={active} onClick={handleLogout}>
               <FontAwesomeIcon icon={faRightFromBracket} />
            </WrapperItem>
         </ul>
      </nav>
   )
}

export default Sidebar