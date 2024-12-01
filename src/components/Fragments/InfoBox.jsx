import {Card, CardBody} from '../Elements/Card'

const InfoBox = (props)=>{
     const {title, value, children} = props
     return(
          <div className="col-12 col-md-3">
               <Card>
                    <CardBody addClass="d-flex d-block justify-content-between">
                    <div>
                         <h5 className="card-title">{title}</h5>
                         <p className="card-text">{value}</p>
                    </div>
                    {children}
                    </CardBody>
               </Card>
          </div>
     )
}

export default InfoBox