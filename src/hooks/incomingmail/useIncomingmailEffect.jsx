import { useEffect } from "react"
import useUrlResource from "../useUrlResource"
import useIncomingmailActions from "./useIncomingmailActions"

const useIncomingmailEffect = (link, url, token, command, setUrl, setData, setIData)=>{
     useEffect(()=>{
          useUrlResource(link, setUrl, command)
          useIncomingmailActions(link, url, token, command, setData, setIData)
     }, [command])
}

export default useIncomingmailEffect