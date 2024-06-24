import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
     name: 'api',
     initialState: {
          incomingmail: "http://localhost:8000/incoming_mail/",
          usermanagement: "http://localhost:8000/user_management/"
     }
})

export default apiSlice.reducer