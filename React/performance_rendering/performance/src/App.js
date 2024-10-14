// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import HomePage from "./Components/HomePage";
// import ContactPage from "./Components/ContactPage";
// import AboutPage from "./Components/AboutPage";
// import Navbar from "./Components/Navbar";

import { useEffect, useState } from "react";
function App() {
  const [HomePage, setHomePage] = useState(null);
  const [AboutPage, setAboutPage] = useState(null);
  const [ContactPage, setContactPage] = useState(null);

  //preloading the homepage component
  useEffect(() => {
    import("./Components/HomePage").then((module) =>
      setHomePage(() => module.default)
    );
  }, []);

  const loadHomePage = () => {
    import("./Components/HomePage").then((module) =>
      setHomePage(() => module.default)
    );
  };

  const loadAboutPage = () => {
    import("./Components/AboutPage").then((module) =>
      setAboutPage(() => module.default)
    );
  };

  const loadContactPage = () => {
    import("./Components/ContactPage").then((module) =>
      setContactPage(() => module.default)
    );
  };

  return (
    <>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={loadHomePage}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={loadAboutPage}>About</Link>
              </li>
              <li>
                <Link to="/contact" onClick={loadContactPage}>Contact</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={HomePage ? <HomePage /> : <div>Loading...</div>}></Route>
            <Route path="/contact" element={ContactPage ? <ContactPage /> : <div>Loading...</div>}></Route>
            <Route path="/about" element={AboutPage ? <AboutPage /> : <div>Loading...</div>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
