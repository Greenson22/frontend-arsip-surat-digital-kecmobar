import { useEffect } from "react"
import useIncomingmailActions from "./useIncomingmailActions"

const useIncomingmailEffect = (command, setData, setIData, setCommand)=>{
     useEffect(()=>{
          useIncomingmailActions(command, setData, setIData, setCommand)
     }, [command])
}

export default useIncomingmailEffect