import React from "react"

import hammer from "../assets/icons/hammer.svg"
import down from "../assets/icons/down.svg"

const RecentWork = () => {
  return (
    <div className="recent-work-container">
      <img alt="" src={hammer} />
      <h2>Recent Projects</h2>
      <p>What I’ve been working on lately.</p>
      <img alt="" className="down-arrow bounce" src={down} />
    </div>
  )
}

export default RecentWork
