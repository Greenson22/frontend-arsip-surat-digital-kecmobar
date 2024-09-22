import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

const usePageEffect = (callBackAction)=>{
     const command = useSelector(state=>state.commandSlice.command)
     const page = useSelector(state=>state.paginationSlice.page)
     const pageSize = useSelector(state=>state.paginationSlice.pageSize)
     const dispatch = useDispatch()
     
     useEffect(()=>{
          callBackAction(command, page, pageSize, dispatch)
     }, [command, page, pageSize])
     
     useEffect(()=>{
          localStorage.setItem('search_value', '')
     }, [])
}

export default usePageEffect