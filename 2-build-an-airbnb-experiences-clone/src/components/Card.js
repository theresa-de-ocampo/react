import React from "react"
import star from "../images/star.png"

/*
Challenge: Build the Card component
For now, hard-code in the data (like
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    return (
        <article className="card">
            <img className="preview" src={require('../images/' + props.img)} alt="Preview" />
            <div className="stats">
                <img className="star" src={star} alt="Star" />
                &nbsp;{props.rating}
                <span className="secondary-text">
                    &nbsp;({props.reviewCount})
                    <span className="middle-dot">&nbsp;&#183;</span>
                    &nbsp;{props.country}
                </span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </article>
    )
}