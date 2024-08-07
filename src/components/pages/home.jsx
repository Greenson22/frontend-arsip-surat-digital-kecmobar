import { TitleBar, ProfileBox, UserBox, InfoBox } from '../Fragments'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faUsers, faUserCheck, faUserXmark } from '@fortawesome/free-solid-svg-icons'
import { useLoginValidate, usePageEffect, useHomeActions } from '../../hooks'
import { useState } from 'react'

const HomePage = () => {
   const [data, setData] = useState(null)
   const [iData, setIData] = useState(0)
   const [command, setCommand] = useState(null)
   
   useLoginValidate()
   usePageEffect(command, setData, setIData, setCommand, useHomeActions)
   
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
            {data && <ProfileBox user={data} setCommand={setCommand}/>}
         </div>
      </div>
   )
}

export default HomePage