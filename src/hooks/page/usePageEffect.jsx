import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

const usePageEffect = (callBackAction)=>{
     const command = useSelector(state=>state.commandSlice.command)
     const dispatch = useDispatch()
     
     useEffect(()=>{
          callBackAction(command, dispatch)
     }, [command])
     
     useEffect(()=>{
          localStorage.setItem('search_value', '')
     }, [])
}

export default usePageEffect