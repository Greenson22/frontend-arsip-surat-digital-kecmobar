import { useEffect } from "react"
import useIncomingmailActions from "./useIncomingmailActions"

const useIncomingmailEffect = (command, setData, setIData, setCommand)=>{
     useEffect(()=>{
          useIncomingmailActions(command, setData, setIData, setCommand)
     }, [command])
     useEffect(()=>{
          localStorage.setItem('search_value', '')
          // localStorage.getItem('incomingmail_pagination')
     }, [])
}

export default useIncomingmailEffect