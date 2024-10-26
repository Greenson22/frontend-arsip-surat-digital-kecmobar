import React from 'react'
import { useSelector } from 'react-redux'
import { useLoginValidate } from '../../hooks'

function ClassifyLetterPage(){
     const data = useSelector(state=>state.dataSlice.data)

     useLoginValidate()

     return (
          <div>
               <h1>hello dunia tipu tipu</h1>
          </div>
     )
}

export default ClassifyLetterPage