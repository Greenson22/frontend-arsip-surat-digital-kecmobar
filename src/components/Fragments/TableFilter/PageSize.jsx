import { usePageSizeSelect } from "../../../hooks"

const PageSize = (props)=>{
     const {setCommand} = props

     return (
          <div className="col-12 col-md-2 d-flex">
               <sub className="mt-3">Show</sub>
               <div className="col-2 col-md-9 ms-1 me-1">
                    <select className="form-select form-select-sm" name="" id="page_size" onClick={(event)=>{usePageSizeSelect(event, setCommand)}}>
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