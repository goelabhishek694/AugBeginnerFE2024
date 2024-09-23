import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import counterSlice from '../../redux/counterSlice';
console.log(counterSlice);

const actions = counterSlice.actions;
function CounterRedux() {

    const {count , name , age} = useSelector((store) => {return store.counterState });
    // console.log(counterSliceInitialStateObj);
    
    const dispatch = useDispatch();

    const handleIncrement = () => {
        console.log("increment will happen");
        dispatch(actions.increment());
        
    }
    const handleDecrement = () => {
        console.log("decrement will happen");
        dispatch(actions.decrement());
    }

  return (
    <div>
        <h1>Counter</h1>
        <button onClick={handleIncrement}>+</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>-</button>
    </div>

  )
}

export default CounterRedux