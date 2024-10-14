import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ContactPage from "./Components/ContactPage";
import AboutPage from "./Components/AboutPage";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
