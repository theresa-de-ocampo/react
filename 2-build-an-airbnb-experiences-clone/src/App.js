import React from "react"
import "./index.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <section id="cards">
                <Card
                    img="katie-zaferes.png"
                    rating={5.0}
                    reviewCount={6}
                    country="USA"
                    title="Life Lessons with Katie Zaferes"
                    price={136}
                />
            </section>
        </div>
    )
}