import React from "react"
import logo from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="React Logo" />
            <h1>ReactFacts</h1>
            <h2 className="nav--title">React Course - Project 1</h2>
        </nav>
    )
}