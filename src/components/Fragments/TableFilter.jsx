import { useEffect, useRef } from "react"
import PageSize from "./TableFilter/PageSize"
import { setCommand } from "../../redux/slices/commandSlice"
import { useDispatch } from "react-redux"

const TableFilter = (props)=>{
     const {api} = props
     const searchRef = useRef()
     const dispatch = useDispatch()

     useEffect(()=>{
          searchRef.current.value = localStorage.getItem('search_value')
          searchRef.current.focus()
     }, [])

     function handleOnChangeSearch(event){
          dispatch(setCommand({
               'command': 'search',
               'words': event.target.value
          }))
          localStorage.setItem('search_value', event.target.value)
     }

     return(
          <div className="row">
               <PageSize api={api}/>
               <div className="col-0 col-md-6 my-1"></div>
               <div className="col-12 col-md-4 d-flex">
                    <sub className="mt-3 me-2">Search:</sub>
                    <input type="search" className="form-control form-control-sm mb-2" name="search_box" onChange={handleOnChangeSearch} ref={searchRef}/>
               </div>
          </div>
     )
}

export default TableFilter