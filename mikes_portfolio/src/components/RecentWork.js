import React from "react"

import hammer from "../assets/icons/hammer.svg"
import down from "../assets/icons/down.svg"

const RecentWork = () => {
  return (
    <div className="recent-work-container">
      <img src={hammer} />
      <h2>Recent Work</h2>
      <p>What I’ve been working on lately</p>
      <img className="down-arrow bounce" src={down} />
    </div>
  )
}

export default RecentWork
