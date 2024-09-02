const AnalisisIndicator = (props)=>{
     const {isActive} = props
     return isActive ? (
          <div className="d-flex">
               <div className="spinner-grow spinner-grow-sm text-primary mt-4"></div>
               <div className="mt-4 ms-2">
                    <span className="text-animation text-primary">Proses menganalisa file...</span>
               </div>
          </div>
     ):(<div></div>)
}

export default AnalisisIndicator