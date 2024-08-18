import { TitleBar, ProfileBox } from '../Fragments'
import { useLoginValidate, usePageEffect, useHomeActions } from '../../hooks'
import { useSelector } from 'react-redux'

const HomePage = () => {
   const data = useSelector(state=>state.dataSlice.data)

   useLoginValidate()
   usePageEffect(useHomeActions)
   
   return(
      <div>
         <TitleBar>Beranda</TitleBar>
         {/* Profil */}
         <div className="row mt-4">
            {data && <ProfileBox user={data}/>}
         </div>
      </div>
   )
}

export default HomePage