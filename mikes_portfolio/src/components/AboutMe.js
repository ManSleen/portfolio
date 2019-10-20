import React from "react"
import thumbsUp from "../assets/icons/thumbsUp.svg"
import html5 from "../assets/icons/html5.svg"
import javascript from "../assets/icons/javascript.svg"
import react from "../assets/icons/react.svg"
import css3 from "../assets/icons/css3.svg"
import srirachaMike from "../images/srirachaMike.svg"

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-info">
        <img className="thumbs-up" src={thumbsUp} />
        <h2>About Me</h2>
        <p>
          I develop the web and I love hot sauce. Call me weird, but I've always
          enjoyed getting down with technology. As a kid I tore apart the family
          computer and made plain HTML websites with Notepad. Now, as an adult
          slightly larger kid, I'm finding the web is the perfect place for me
          to get real weird.
        </p>
        <img class="web-tech" src={html5} />
        <img class="web-tech" src={javascript} />
        <img class="web-tech" src={react} />
        <img class="web-tech" src={css3} />
      </div>
      <div className="about-me-image">
        <img src={srirachaMike} />
      </div>
    </div>
  )
}

export default AboutMe