import React from "react"
import logo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img id="logo" src={logo} alt="Logo" />
        </nav>
    )
}