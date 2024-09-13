import React, { useEffect, useState } from 'react'
import {Routes, Route, Link, Outlet, useParams, Navigate} from 'react-router-dom'
function ReactRouterDOM() {
  return (
    <>
    <div>Navbar</div>
    <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
    </ul>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}>
            {/* nested routing */}
            <Route path='company' element={<Company></Company>}></Route>
            <Route path='ceo' element={<Ceo></Ceo>}></Route>
        </Route>
        {/* dynamic routing */}
        {/* <Route path='/user/:id/:name' element={<User></User>}></Route> */}
        <Route path='/user/:id' element={<User></User>}></Route>
        {/* redirecting the routes */}
        <Route path='/home' element={<Navigate to="/"></Navigate>}></Route>
        {/* default routing */}
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    </>
  )
}


function Home(){
    return(
        <>
            <div>Home Page</div>
            <h1>Our company is the best</h1>
        </>
    )
}

function About(){
    return(
        <>
            <div>About Page</div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id distinctio illo voluptatum sapiente, vero sed minus quia necessitatibus neque provident quae ea tempore dolores fuga itaque possimus deserunt cumque soluta.</h1>
            <Outlet></Outlet>
        </>
    )
}

function Company(){
    return(
        <>
            <h2>We never layoff</h2>
            <Outlet></Outlet>
        </>
    )
}

function Ceo(){
    return(
        <>
        <h2>Very good, best guy , best ceo</h2>
        <Outlet></Outlet>
        </>
    )
}

function User(){
    const [user,setUser] = useState(null);
    const {id,name} = useParams();
    // console.log(obj);
    
    useEffect(()=>{
        const fetchData= async function(){
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const result = await response.json();
            console.log(result);
            setUser(result);
        }
        fetchData();

    },[])
    return(
        <>
        {
            user == null ? (<h1>Loading ...</h1>) : (
            <>
                <h3>Name {user.name}</h3>
                <h3>Email {user.email}</h3>
                <h3>Phone {user.phone}</h3>
            </>)
        }
        
        </>
    )
}

function PageNotFound(){
    return (
        <div>
            <h1>Oops ! Incorrect URL</h1>
        </div>
    )
}



export default ReactRouterDOM