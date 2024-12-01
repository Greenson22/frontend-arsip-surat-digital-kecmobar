export const Row = (props) => {
     const {children} = props
     return (
          <div className="row">
               {children}
          </div>
     )
}

export const Col = (props) => {
     const {children, col} = props
     return (
          <div className={`col-${col}`}>
               {children}
          </div>
     )
}