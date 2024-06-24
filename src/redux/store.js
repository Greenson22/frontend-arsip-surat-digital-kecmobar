import { configureStore} from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import apiReducer from './slices/apiSlice'

const store = configureStore({
     reducer:{
          auth: authReducer,
          api: apiReducer
     }
})

console.log("oncreate store : ", store.getState())

store.subscribe(()=>{
     console.log("STORE UPDATE ", store.getState())
})

export default store