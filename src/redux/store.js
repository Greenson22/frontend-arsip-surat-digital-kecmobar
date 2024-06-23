import { configureStore} from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'

const store = configureStore({
     reducer:{
          auth: authReducer
     }
})

store.subscribe(()=>{
     console.log("STORE UPDATE ", store.getState())
})

export default store
// store.dispatch(authSlice.actions.setToken('12345'))