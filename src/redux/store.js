import { configureStore} from "@reduxjs/toolkit"
import dataReducer from "./slices/dataSlice"
import commandReducer from "./slices/commandSlice"
import paginationReducer from "./slices/paginationSlice"

const store = configureStore({
     reducer:{
          dataSlice: dataReducer,
          commandSlice: commandReducer,
          paginationSlice: paginationReducer
     }
})

console.log("oncreate store : ", store.getState())

// store.subscribe(()=>{
//      console.log("STORE UPDATE ", store.getState())
// })

export default store