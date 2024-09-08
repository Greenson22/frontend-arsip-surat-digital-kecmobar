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
                         if (file.cloud === true){ //jika sudah di upload
                              return <List status={'cloud'} key={index}>{file.name}</List>
                         }
                         else if (file.loading === true) { //sementara melakukan analisis
                              return <List status={'spinner'} key={index}>{file.name}</List>
                         }else if (file.entities===null){ //jika entities masih null
                              return <List status={''} key={index}>{file.name}</List>
                         }else{ //selesai melakukan analisis
                              return <List status={'check'} key={index}>{file.name}</List>
                         }
                    })
               }
               
          </MDBListGroup>
     )
}

export default listGroup