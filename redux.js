import { configureStore, createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
     name:"cart",
     initialState:[],
     reducers:{
          addToCart(state, action){
               state.push(action.payload)
          }
     }
})

const loginSlice = createSlice({
     name:"login",
     initialState: {login:false},
     reducers:{
          verifikasi(state, action){
               state.login = action.payload
          }
     }
})

const store = configureStore({
     reducer:{
          cart: cartSlice.reducer,
          login: loginSlice.reducer
     }
})

store.subscribe(()=>{
     console.log("STORE UPDATE ", store.getState())
})

store.dispatch(cartSlice.actions.addToCart({id:0, qty:10}))
store.dispatch(cartSlice.actions.addToCart({id:0, qty:10}))

store.dispatch(loginSlice.actions.verifikasi(true))
store.dispatch(loginSlice.actions.verifikasi(false))