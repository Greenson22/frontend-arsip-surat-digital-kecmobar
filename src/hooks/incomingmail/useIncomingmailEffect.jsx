import { useEffect } from "react"
import useIncomingmailActions from "./useIncomingmailActions"

const useIncomingmailEffect = (url, token, command, setData, setIData, setCommand)=>{
     useEffect(()=>{
          useIncomingmailActions(url, token, command, setData, setIData, setCommand)
     }, [command])
}

export default useIncomingmailEffect