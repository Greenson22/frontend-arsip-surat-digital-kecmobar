import { configureStore} from "@reduxjs/toolkit"
import dataReducer from "./slices/dataSlice"
import commandReducer from "./slices/commandSlice"

const store = configureStore({
     reducer:{
          dataSlice: dataReducer,
          commandSlice: commandReducer,
     }
})

console.log("oncreate store : ", store.getState())

// store.subscribe(()=>{
//      console.log("STORE UPDATE ", store.getState())
// })

export default store