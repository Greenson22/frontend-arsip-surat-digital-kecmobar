import React, { useEffect, useRef } from "react"
import {Card, CardHeader, CardBody} from '../Elements/Card'
import { MDBBtn } from "mdb-react-ui-kit"

const AdvanceSettingBox = (props)=>{

    // menetapkan genai select default
    const genai_select = localStorage.getItem('genai')
    if (!genai_select){
        localStorage.setItem('genai', 'experimental')
    }
    
    return (
        <div className="col-12 col-md-12">
         <Card>
            <CardHeader>
               <h5 className="card-title">Advance Settings</h5>
            </CardHeader>
            <CardBody>
                <label htmlFor="">genai: {localStorage.getItem('genai')}</label>
                <br />

                <select name="genai" id="genai">
                    <option value="pro">gemini pro</option>
                    <option value="pro2">gemini pro2</option>
                    <option value="pro1">gemini pro1</option>
                    <option value="flash">gemini flash</option>
                    <option value="flash2">gemini flash2</option>
                    <option value="flash8b">gemini flash8b</option>
                    <option value="learn">gemini learn</option>
                    <option value="experimental">gemini experimental</option>
                </select>
                <br />

                <MDBBtn onClick={()=>{
                    const select = document.getElementById('genai')
                    console.log(select.value)
                    localStorage.setItem('genai', select.value)
                }}>Save</MDBBtn>
            </CardBody>
         </Card>
        </div>
    )
}

export default AdvanceSettingBox