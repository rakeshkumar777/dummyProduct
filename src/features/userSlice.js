import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isLoggedIn:false
       
    },
    reducers: {
        loggedin: (state, { payload }) => {
            state.user = payload
          
        },
        logout: (state) => {
            state.user = null
      
        }
    }
});
export const { loggedin, logout }=userSlice.actions;
export const selectUser = (state) => state.userReducer.user;
export default userSlice.reducer;