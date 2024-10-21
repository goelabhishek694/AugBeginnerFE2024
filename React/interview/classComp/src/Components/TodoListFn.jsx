import React, { useEffect, useState } from 'react'

function TodoListFn() {
    const [todos,setTodo] = useState([]);
    const [currTodo,setCurrTodo] = useState("");
    // console.log("Constructor: setting up initila state and bindings");

    useEffect(()=>{
        console.log('i am called after comp is mounted');
        setTimeout(()=>{
            setTodo(['Learn React', 'Read a book']);
        },1000)

        return () =>{
            console.log("Compo will unmount : cleaning up resources");
        }
    },[])

    useEffect(()=>{
        console.log("i am called only when todo state has been updated");
    },[todos])

    const handleInput = (e) =>{
        setCurrTodo(e.target.value)
    }

    const handleAddTodo = () => {
        setTodo(prevState => [...prevState, currTodo]);
        setCurrTodo("")
    }
    console.log("Ui is rendered");
    
  return (
    <div>
        <h1>My Todo List</h1>
        <input type="text" value={currTodo} onChange={handleInput}/>
        <button onClick={handleAddTodo}>Add To-Do</button>
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoListFn
