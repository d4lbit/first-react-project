import React from "react";
import logo from "../logo.png"

export default function Navbar() {
    return (
        <header>
            <img src={logo} className="logo" alt="Logo" />
            <h2>ReactFacts</h2>
            <h3>React Course - Project 1</h3>
        </header>
    )
}