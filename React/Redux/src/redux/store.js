import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import TodoSlice from "./todoSlice";
import UserSlice from "./userSlice";
// import thunkMiddleWare  from "redux-thunk";

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        todoState: TodoSlice.reducer,
        userState: UserSlice.reducer
    },
    // middleware: [thunkMiddleWare]
})

console.log(store);


export default store; 