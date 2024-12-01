const Input = (props)=>{
     const {label, type="text", add_class_input} = props
     return(
          <div>
               <label htmlFor="" className="form-label">{label}</label>
               <input type={type} className={`form-control form-control-sm mb-2 ${add_class_input}`}/>
          </div>
     )
}

export default Input