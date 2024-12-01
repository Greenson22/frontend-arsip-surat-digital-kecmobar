const TitleBar = (props)=>{
   return(
      <div className="card shadow">
         <div className="card-header">
         <h3 className="text-center">{props.children}</h3>
         </div>
      </div>
   )
}

export default TitleBar