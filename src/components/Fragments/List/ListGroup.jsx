import React from "react"
import { MDBListGroup } from "mdb-react-ui-kit"
import List from "./List"

const listGroup = (props)=>{
     const {fileNote} = props
     // console.log(fileNote)
     return (
          <MDBListGroup>
               {
                    fileNote.map((file, index)=>{
                         if (file.status === null){
                              return <List status={''} key={index}>{file.name}</List>
                         }else if (file.status === 'loading'){
                              return <List status={'spinner'} key={index}>{file.name}</List>
                         }else if (file.status === 'check'){
                              return <List status={'check'} key={index}>{file.name}</List>
                         }else if (file.status === 'fail'){
                              return <List status={'fail'} key={index}>{file.name}</List>
                         }
                    })
               }
               
          </MDBListGroup>
     )
}

export default listGroup