import React from "react"
import { usePageSizeSelect } from "../../../hooks"
import { useDispatch } from "react-redux"

const PageSize = (props)=>{
     const {api} = props
     const dispatch = useDispatch()
     return (
          <div className="col-12 col-md-2 d-flex">
               <sub className="mt-3">Show</sub>
               <div className="col-2 col-md-9 ms-1 me-1">
                    <select className="form-select form-select-sm" name="" id="page_size" onClick={(event)=>{usePageSizeSelect(event, api, dispatch)}}>
                         <option value="5">5</option>
                         <option value="10">10</option>
                         <option value="15">15</option>
                         <option value="20">20</option>
                         <option value="25">25</option>
                    </select>
               </div>
               <sub className="mt-3">Entries</sub>
          </div>
     )
}

export default PageSize