import { createSlice } from "@reduxjs/toolkit";

const commandSlice = createSlice({
     name: 'command',
     initialState: {
          command: null
     },
     reducers: {
          setCommand: (state, action)=>{
               state.command = action.payload
          }
     }
})

export const { setCommand } = commandSlice.actions
export default commandSlice.reducer