import { useEffect } from "react"

const usePageEffect = (command, setData, setIData, setCommand, callBackAction)=>{
     useEffect(()=>{
          callBackAction(command, setData, setIData, setCommand)
     }, [command])
     
     useEffect(()=>{
          localStorage.setItem('search_value', '')
     }, [])
}

export default usePageEffect