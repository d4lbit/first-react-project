import React from "react";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
// import logo from "./logo.png"

export default function App(){
    return (
        <div className="container">
          <Navbar />
          <Main />
        </div>
    )
}