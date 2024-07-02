import { useEffect } from "react"
import useUrlResource from "../useUrlResource"
import useActionsIncomingmail from "./useActionsIncomingmail"

const useEffectIncomingmail = (link, url, token, command, setUrl, setData, setIData)=>{
     useEffect(()=>{
          useUrlResource(link, setUrl, command)
     }, [command])

     useEffect(()=>{
          useActionsIncomingmail(link, url, token, command, setData, setIData)
     }, [url])
}

export default useEffectIncomingmail