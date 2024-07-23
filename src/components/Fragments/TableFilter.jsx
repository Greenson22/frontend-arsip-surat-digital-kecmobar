import { useEffect, useRef } from "react"
import PageSize from "./TableFilter/PageSize"

const TableFilter = (props)=>{
     const {setCommand} = props
     const searchRef = useRef()

     useEffect(()=>{
          searchRef.current.value = localStorage.getItem('search_value')
          searchRef.current.focus()
     }, [])

     function handleOnChangeSearch(event){
          setCommand({
               'command': 'search',
               'words': event.target.value
          })
          localStorage.setItem('search_value', event.target.value)
     }

     return(
          <div className="row">
               <PageSize setCommand={setCommand}/>
               <div className="col-0 col-md-6 my-1"></div>
               <div className="col-12 col-md-4 d-flex">
                    <sub className="mt-3 me-2">Search:</sub>
                    <input type="search" className="form-control form-control-sm mb-2" name="search_box" onChange={handleOnChangeSearch} ref={searchRef}/>
               </div>
          </div>
     )
}

export default TableFilter