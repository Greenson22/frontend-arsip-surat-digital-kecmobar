import { useEffect } from "react"
import useIncomingmailActions from "./useIncomingmailActions"

const useIncomingmailEffect = (command, setData, setIData, setCommand)=>{
     useEffect(()=>{
          useIncomingmailActions(command, setData, setIData, setCommand)
     }, [command])
     useEffect(()=>{
          console.log("incoming mail dibuat")
          localStorage.setItem('search_value', '')
     }, [])
}

export default useIncomingmailEffect