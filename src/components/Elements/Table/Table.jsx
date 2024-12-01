import React from "react"

export const Table = (props)=>{
     const {children, add_class} = props
     return (
          <div className="table-responsive">
               <table className={`table table-bordered table-striped ${add_class}`}>
                    {children}
               </table>
          </div>
     )
}

export default Table