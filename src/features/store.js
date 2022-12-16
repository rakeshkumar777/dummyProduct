import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './userSlice'

const store= configureStore({
    reducer:{
        userReducer:rootReducer,
    }
})

export default store;
