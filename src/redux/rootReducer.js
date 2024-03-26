
import { combineReducers } from "redux";
import userSlice from "./slices/userSlice"

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  auth: userSlice,
});

export default rootReducer;