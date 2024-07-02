import { usePageSizeSelect } from "../../hooks"

const TableFilter = (props)=>{
     const {link, setUrl} = props
     return(
          <div className="row">
               <div className="col-12 col-md-2 d-flex">
                    <sub className="mt-3">Show</sub>
                    <div className="col-2 col-md-9 ms-1 me-1">
                         <select className="form-select form-select-sm" name="" id="page_size" onClick={(event)=>{usePageSizeSelect(event, link, setUrl)}}>
                              <option value="5">5</option>
                              <option value="10">10</option>
                              <option value="15">15</option>
                              <option value="20">20</option>
                              <option value="25">25</option>
                         </select>
                    </div>
                    <sub className="mt-3">Entries</sub>
               </div>
               <div className="col-0 col-md-6 my-1"></div>
               <div className="col-12 col-md-4 d-flex">
                    <sub className="mt-3 me-2">Search:</sub>
                    <input type="search" className="form-control form-control-sm mb-2" name="search_box"/>
               </div>
          </div>
     )
}

export default TableFilter