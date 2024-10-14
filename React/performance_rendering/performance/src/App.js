// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState, Suspense, lazy } from "react";
import UseMemo from "./Components/UseMemo";
import UseCallback from "./Components/UseCallback";
// import HomePage from "./Components/HomePage";
// import ContactPage from "./Components/ContactPage";
// import AboutPage from "./Components/AboutPage";
// import Navbar from "./Components/Navbar";

//lazy load the components
// Homepage = cb function -> import my comp. 
const HomePage = lazy(() => import("./Components/HomePage"));
const ContactPage = lazy(() => import("./Components/ContactPage"));
const AboutPage = lazy(() => import("./Components/AboutPage"));

function App() {
  // const [HomePage, setHomePage] = useState(null);
  // const [AboutPage, setAboutPage] = useState(null);
  // const [ContactPage, setContactPage] = useState(null);

  //preloading the homepage component
  // useEffect(() => {
  //   import("./Components/HomePage").then((module) =>
  //     setHomePage(() => module.default)
  //   );
  // }, []);

  // const loadHomePage = () => {
  //   import("./Components/HomePage").then((module) =>
  //     setHomePage(() => module.default)
  //   );
  // };

  // const loadAboutPage = () => {
  //   import("./Components/AboutPage").then((module) =>
  //     setAboutPage(() => module.default)
  //   );
  // };

  // const loadContactPage = () => {
  //   import("./Components/ContactPage").then((module) =>
  //     setContactPage(() => module.default)
  //   );
  // };

  return (
    // <>
    //   <BrowserRouter>
    //     <div>
    //       <nav>
    //         <ul>
    //           <li>
    //             <Link to="/">Home</Link>
    //           </li>
    //           <li>
    //             <Link to="/about">About</Link>
    //           </li>
    //           <li>
    //             <Link to="/contact">Contact</Link>
    //           </li>
    //         </ul>
    //       </nav>
    //       <Suspense fallback={<div>Loading...</div>}>
    //         <Routes>
    //           <Route path="/" element={<HomePage />}></Route>
    //           <Route path="/contact" element={<ContactPage />}></Route>
    //           <Route path="/about" element={<AboutPage />}></Route>
    //         </Routes>
    //       </Suspense>
    //     </div>
    //   </BrowserRouter>
    // </>
    // <UseMemo></UseMemo>
    <UseCallback></UseCallback>
  );
}

export default App;


