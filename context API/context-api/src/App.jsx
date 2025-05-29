import { useState, useContext } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-700">
            <h1 className="text-5xl font-bold text-white mb-5">Context API :</h1>
            <Login/>
            <Profile/>
        </div>
    );
}

export default App;
