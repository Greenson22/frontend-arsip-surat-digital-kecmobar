import axios from "axios"
import { useEffect } from "react"

const useContainerLayoutEffect = (dataRef)=>{
     useEffect(()=>{
          function handleAxiosResponse(response){
            const namaBulan = [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ]
            const unixTime = response.data.unixtime
            const dateTime = new Date(unixTime*1000)
            dataRef.current.textContent = dateTime.getDate()+' '+namaBulan[dateTime.getMonth()]+' '+dateTime.getFullYear()
          }
          function handleAxiosError(err){
            console.log(err)
          }
          axios.get(import.meta.env.VITE_WORLD_TIME_MAKASAR_API_KEY).then(handleAxiosResponse).catch(handleAxiosError)
        }, [])
}

export default useContainerLayoutEffect