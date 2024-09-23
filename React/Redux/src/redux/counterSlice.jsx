import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counterSlice",
    initialState: {
        count : 0 ,
        name: "Scaler",
        age: 23
    },
    //all udate logic
    reducers:{
        increment : (state) => {
            state.count = state.count+1;
        },
        decrement : (state) => {
            state.count -= 1 ;
        }
    }
})

export default counterSlice

