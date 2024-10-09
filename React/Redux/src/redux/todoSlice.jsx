import {createSlice} from "@reduxjs/toolkit"

const TodoSlice = createSlice({
    name: "todos",
    initialState:{
        todoList:["task1", "task2"],
        value:""
    },
    reducers:{
        setValue: (state, descObj) => {
            console.log(" i am a setValue fn", descObj);  
            state.value = descObj.payload;
        },
        addTodo: (state, descObj) => {
            const newTask = descObj.payload;
            const updatedTodo = [...state.todoList, newTask];
            state.todoList = updatedTodo;
            state.value = "";
        }
    }
});

export default TodoSlice

// let y=10;
// function fn(x,y){
//     y = 2 * x;
//     x = y * x;
//     console.log("x ", x, " y ", y);
// }

// fn(5,2);
// fn(5,2);
// fn(5,2);