import axios from "axios";
import { useState } from "react";
import Show from "./components/Show.jsx";
import {Link, NavLink, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import {Services} from "./components/Services.jsx";

const App = () => {
    const activeClass="text-red-500 hover:text-red-600 transition-colors duration-300 underline underline-offset-1"
    const inactiveClass="text-white hover:text-red-600 transition-colors duration-300"

    return (
        <div>
            <nav className="flex items-center justify-center gap-10 bg-zinc-800 py-3 shadow-md">
                <NavLink className={ ({isActive}) => (isActive? activeClass:inactiveClass)} to="/">Home</NavLink>
                <NavLink className={ ({isActive}) => (isActive? activeClass:inactiveClass)} to="/show">Show</NavLink>
                <NavLink className={ ({isActive}) => (isActive? activeClass:inactiveClass)} to="/services">Services</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/show" element={<Show/>}/>
                <Route path="/services" element={<Services />}/>
            </Routes>


        </div>
    );
};

export default App;
