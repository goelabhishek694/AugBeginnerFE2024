import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import TodoSlice from "./todoSlice";

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        todoState: TodoSlice.reducer
    }
})

console.log(store);


export default store; 