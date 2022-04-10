import React from "react"
import "./index.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Hero />
        </div>
    )
}