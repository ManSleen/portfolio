import React from "react"
import thumbsUp from "../assets/icons/thumbsUp.svg"
import html5 from "../assets/icons/html5.svg"
import javascript from "../assets/icons/javascript.svg"
import react from "../assets/icons/react.svg"
import css3 from "../assets/icons/css3.svg"
import srirachaMike from "../images/srirachaMike.svg"

const AboutMe = () => {
  return (
    <>
      <a className="about-anchor" id="about"></a>
      <div className="about-me-container">
        <div className="about-me-info">
          <img className="thumbs-up" src={thumbsUp} />
          <h2>About Me</h2>
          <p>
            I develop the web and I love hot sauce. Call me weird, but I've
            always enjoyed getting down with technology. As a kid I tore apart
            the family computer and made plain HTML websites with Notepad. Now,
            as an <span> adult </span>
            slightly larger kid, I'm finding the web is the perfect place for me
            to get real weird.
          </p>
          <div className="web-tech-container">
            <img className="web-tech" src={html5} />
            <img className="web-tech" src={javascript} />
            <img className="web-tech" src={react} />
            <img className="web-tech" src={css3} />
          </div>
        </div>
        <div className="about-me-image">
          <img src={srirachaMike} />
        </div>
      </div>
    </>
  )
}

export default AboutMe
