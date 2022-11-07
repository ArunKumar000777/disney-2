import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import {selectUserName} from './features/user/userSlice'
import { useSelector } from "react-redux";


function App() {
const userName = useSelector(selectUserName)
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={!userName ? <Navigate to={'/login'}/> : <Home />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
