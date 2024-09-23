// import React from 'react'
// import { useState } from 'react';

// function Context() {
//     const [name,setName] = useState("Swaraj");
//     const [age,setAge] = useState(24);
//   return (
//     <div>
//         <h2>Top Level Element</h2>
//         <div>⬇️</div>
//         <Dummy name={name} age={age}></Dummy>
//         <Grandparent name={name} age={age} setName={setName}></Grandparent>
//     </div>
//   )
// }

// function Dummy({name,age}) {
//     return (
//         <>
//         <h3>Dummy</h3>
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//         </>
//     )
// }

// function Grandparent({name, age, setName}){
//     console.log("Grandparent was rendered");
//     return <>
//         <h3>GrandParent</h3>
//         <div>⬇️</div>
//         <Parent1 name={name} age={age} setName={setName}></Parent1>
//     </>
    
// }

// function Parent1({name, age, setName}){
//     console.log("Parent1 was rendered");
//     return <>
//         <h3>Parent1</h3>
//         <div>⬇️</div>
//         <Parent2 name={name} age={age} setName={setName}></Parent2>
//     </>
// }

// function Parent2({name, age, setName}){
//     console.log("Parent2 was rendered");
//     return <>
//         <h3>Parent2</h3>
//         <div>⬇️</div>
//         <Child name={name} age={age} setName={setName}></Child>
//     </>
// }

// function Child({name, age, setName}){
//     console.log("Child was rendered");
//     return (
//         <>
//         <h3 onClick={()=>setName("Aditya")}>Child</h3>
//         <p>Hello my name is {name} and my age is {age}</p>
//         </>
//     )
// }

// export default Context








import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
// creates a store -> storeApnaBazaar is the name of the store 
const storeApnaBazaar = createContext("default-value");
console.log(storeApnaBazaar);
//stock up the store -> put data inside store 
const data = {
    rice: "10kg",
    wheat: "20kg",
    ketchup: "100kg",
}
function Context() {
    const [name,setName] = useState("Swaraj");
    const [age,setAge] = useState(24);
  return (
    <div>
        <h2>Top Level Element</h2>
        <div>⬇️</div>
        <storeApnaBazaar.Provider value={data}>
            <Dummy name={name} age={age}></Dummy>
            <Grandparent name={name} age={age} setName={setName}></Grandparent>
        </storeApnaBazaar.Provider>
        
    </div>
  )
}

function Dummy({name,age}) {
    const items = useContext(storeApnaBazaar);
    return (
        <>
        <h3>Dummy</h3>
            {/* <p>Name: {name}</p>
            <p>Age: {age}</p> */}
            <p>Wheat: {items.wheat}</p>
            <p>Rice: {items.rice}</p>
        </>
    )
}

function Grandparent({name, age, setName}){
    console.log("Grandparent was rendered");
    return <>
        <h3>GrandParent</h3>
        <div>⬇️</div>
        <Parent1 name={name} age={age} setName={setName}></Parent1>
    </>
    
}

function Parent1({name, age, setName}){
    console.log("Parent1 was rendered");
    return <>
        <h3>Parent1</h3>
        <div>⬇️</div>
        <Parent2 name={name} age={age} setName={setName}></Parent2>
    </>
}

function Parent2({name, age, setName}){
    console.log("Parent2 was rendered");
    return <>
        <h3>Parent2</h3>
        <div>⬇️</div>
        <Child name={name} age={age} setName={setName}></Child>
    </>
}

function Child({name, age, setName}){
    console.log("Child was rendered");
    const items = useContext(storeApnaBazaar);
    return (
        <>
        {/* <h3 onClick={()=>setName("Aditya")}>Child</h3>
        <p>Hello my name is {name} and my age is {age}</p> */}
        <h3>Child</h3>
        <p>Wheat: {items.wheat}</p>
        <p>Rice: {items.rice}</p>
        </>
    )
}

export default Context