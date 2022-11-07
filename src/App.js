import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import { selectUserName } from "./features/user/userSlice";
import { useSelector } from "react-redux";

function App() {
    const userName = useSelector(selectUserName);
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={userName ? <Navigate to={"/home"} /> : <Navigate to={"/login"} />} />
                    <Route path="/home" element={userName ? <Home /> : <Navigate to="../login" />} />
                    <Route path="/login" element={userName ? <Navigate to="../home" /> : <Login />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
