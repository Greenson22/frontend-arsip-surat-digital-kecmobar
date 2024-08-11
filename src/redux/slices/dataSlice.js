import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
     name: 'data',
     initialState: {
          data: null,
          iData: 0,
     },
     reducers: {
          setData: (state, action)=> {
               state.data = action.payload
          },
          setIData: (state, action)=> {
               state.iData = action.payload
          }
     }
})

export const { setData, setIData } = dataSlice.actions
export default dataSlice.reducer