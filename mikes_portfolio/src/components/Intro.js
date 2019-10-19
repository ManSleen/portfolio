import React from "react"
import earth from "../assets/icons/earth.svg"
import sparkles from "../assets/icons/sparkles.svg"
import bacon from "../assets/icons/bacon.svg"
import joystick from "../assets/icons/joystick.svg"
import em from "../assets/icons/em.svg"
import wrench from "../assets/icons/wrench.svg"
import snowboard from "../assets/icons/snowboard.svg"
import floppy from "../assets/icons/floppy.svg"

const Intro = () => {
  return (
    <div className="Intro-container">
      <div className="earth">
        <img src={earth} />
      </div>
      <div className="sparkles">
        <img src={sparkles} />
      </div>
      <div className="bacon">
        <img src={bacon} />
      </div>
      <div className="joystick">
        <img src={joystick} />
      </div>
      <div className="em">
        <img src={em} />
      </div>
      <div className="wrench">
        <img src={wrench} />
      </div>
      <div className="snowboard">
        <img src={snowboard} />
      </div>
      <div className="floppy">
        <img src={floppy} />
      </div>
      <div className="name-container">
        <h3>Hey, I'm</h3>
        <h1>Mike VanSleen</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
    </div>
  )
}

export default Intro
