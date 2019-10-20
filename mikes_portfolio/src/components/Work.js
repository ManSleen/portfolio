import React from "react"

import howToCover from "../images/how-to-cover.png"
import replateCover from "../images/replate-cover.png"
import designHubCover from "../images/designhub-cover.png"
import rightArrow from "../assets/icons/right-arrow.svg"

const Work = () => {
  return (
    <div className="work-container">
      <div className="project-container">
        <div className="work-left">
          <img src={howToCover} />
        </div>
        <div className="work-right">
          <div className="project-info">
            <h3>How-To</h3>
            <h4>React.js Web App</h4>
            <p>
              Tumblr bicycle rights kickstarter celiac viral air plant jianbing
              before they sold out microdosing you probably haven't heard of
              them migas poke.{" "}
            </p>
            <div className="more-info">
              <a href="">MORE INFO</a>
              <img src={rightArrow} />
            </div>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="work-right">
          <div className="project-info">
            <h3>Replate</h3>
            <h4>React.js Web App</h4>
            <p>
              Tumblr bicycle rights kickstarter celiac viral air plant jianbing
              before they sold out microdosing you probably haven't heard of
              them migas poke.{" "}
            </p>
            <div className="more-info">
              <a href="">MORE INFO</a>
              <img src={rightArrow} />
            </div>
          </div>
        </div>
        <div className="work-left">
          <img src={replateCover} />
        </div>
      </div>
      <div className="project-container">
        <div className="work-left">
          <img src={designHubCover} />
        </div>
        <div className="work-right">
          <div className="project-info">
            <h3>DesignHub</h3>
            <h4>React.js Web App</h4>
            <p>
              Tumblr bicycle rights kickstarter celiac viral air plant jianbing
              before they sold out microdosing you probably haven't heard of
              them migas poke.{" "}
            </p>
            <div className="more-info">
              <a href="">MORE INFO</a>
              <img src={rightArrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
