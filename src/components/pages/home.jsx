import TitleBar from '../Fragments/TitleBar'
import ProfileBox from '../Fragments/ProfileBox'
import UserBox from '../Fragments/UserBox'
import InfoBox from '../Fragments/InfoBox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faUsers, faUserCheck, faUserXmark } from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {
   return(
      <div>
         <TitleBar>Beranda</TitleBar>
         {/* Info */}
         <div className="row mt-4">
            <InfoBox title="Pengguna Terdaftar" value="3">
               <FontAwesomeIcon icon={faUserTie} bounce/>
            </InfoBox>
            <InfoBox title="Total Pengguna" value="3" >
               <FontAwesomeIcon icon={faUsers} bounce/>
            </InfoBox>
            <InfoBox title="Pengguna Aktif" value="3" >
               <FontAwesomeIcon icon={faUserCheck} bounce/>
            </InfoBox>
            <InfoBox title="Pengguna NonAktif" value="3" >
               <FontAwesomeIcon icon={faUserXmark} bounce/>
            </InfoBox>
         </div>
         {/* Profil */}
         <div className="row mt-4">
            <ProfileBox/>
            <UserBox/>
         </div>
      </div>
   )
}

export default HomePage