export const CardHeader = (props)=>{
     const {children, adddClass} = props
     return (
          <div className={`card-header ${adddClass}`}>
               {children}
          </div>
     )
}

export const CardBody = (props)=>{
     return (
          <div className={`card-body ${props.addClass}`}>
               {props.children}
          </div>
     )
}

export const CardFooter = (props)=>{
     return (
          <div className="card-footer">
               {props.children}
          </div>
     )
}

export const Card = (props)=>{
     return (
          <div className={`card shadow ${props.addClass}`}>
               {props.children}
          </div>
     )
}
