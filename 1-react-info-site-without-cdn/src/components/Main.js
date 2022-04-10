/**
 Challenge: Build the main section!

 Skip 2 aspects of the design for now:
 1. The colored bullets in the list
 2. The larger React logo on the side

 Those will be separate challenges coming up.
 */

import React from "react"

export default function Main() {
    return (
        <main>
            <h3>Fun Facts about React</h3>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}