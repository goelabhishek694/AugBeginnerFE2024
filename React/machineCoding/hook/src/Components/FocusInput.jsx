import {useRef} from 'react'

function FocusInput() {

    // create a ref object with a current property initialized to null
    const inputRef = useRef(null);
    console.log(inputRef);
    // inputRef = {
    //     current : null
    // }

    const focusInput = () => {
        inputRef.current.focus();
    }
  return (
    <div>
        <input ref = {inputRef} type='text'/>
        {/* inputRef = {
        current : input
        } */}
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default FocusInput