import React from "react"
import star from "../images/star.png"
import katieZaferes from "../images/katie-zaferes.png"

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

export default function Card() {
    return (
        <article className="card">
            <img className="preview" src={katieZaferes} alt="Preview" />
            <div className="tally">
                <img className="star" src={star} alt="Star" />
                <span className="rating"> 5.0 </span>
                <span className="secondary-text">
                    (<span className="no-of-ratings">6</span>)
                    <span className="middle-dot"> &#183;</span>
                    <span className="country"> USA</span>
                </span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $<span className="price">136</span></b> / person</p>
        </article>
    )
}