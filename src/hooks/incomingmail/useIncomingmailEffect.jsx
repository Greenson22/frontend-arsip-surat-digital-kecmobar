import { useEffect } from "react"
import useIncomingmailActions from "./useIncomingmailActions"

const useIncomingmailEffect = (url, token, command, setData, setIData, setFileUrl, setCommand)=>{
     useEffect(()=>{
          useIncomingmailActions(url, token, command, setData, setIData, setFileUrl, setCommand)
     }, [command])
}

export default useIncomingmailEffect