import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer
    }
})

console.log(store);


export default store; 