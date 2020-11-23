import React from "react"
import thumbsUp from "../assets/icons/thumbsUp.svg"
import html5 from "../assets/icons/html5.svg"
import javascript from "../assets/icons/javascript.svg"
import react from "../assets/icons/react.svg"
import css3 from "../assets/icons/css3.svg"
import python from "../assets/icons/python.svg"
import node from "../assets/icons/node.svg"
import figma from "../assets/icons/figma.svg"
import aws from "../assets/icons/aws-logo-1.png"
import srirachaMike from "../images/srirachaMike.svg"

const AboutMe = () => {
  return (
    <>
      <a className="about-anchor" id="about"></a>
      <div className="about-me-container">
        <div className="about-me-info">
          <img alt="" className="thumbs-up" src={thumbsUp} />
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
            <img alt="" className="web-tech" src={html5} />
            <img alt="" className="web-tech" src={javascript} />
            <img alt="" className="web-tech" src={react} />
            <img alt="" className="web-tech" src={css3} />
            <img alt="" className="web-tech" src={python} />
            <img alt="" className="web-tech" src={node} />
            <img alt="" className="web-tech" src={figma} />
            <img alt="" className="web-tech aws" src={aws} />
          </div>
        </div>
        <div className="about-me-image">
          <img alt="" src={srirachaMike} />
        </div>
      </div>
    </>
  )
}

export default AboutMe
