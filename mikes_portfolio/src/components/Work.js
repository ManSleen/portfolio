import React from "react"
import { Link } from "gatsby"

import howToCover from "../images/how-to-cover.png"
import replateCover from "../images/replate-cover.png"
import designHubCover from "../images/designhub-cover.png"
import rightArrow from "../assets/icons/right-arrow.svg"

const Work = () => {
  return (
    <>
      <a className="work-anchor" id="work"></a>
      <div className="work-container">
        <div className="project-container">
          <div className="work-left">
            <Link to="/how-to">
              <img src={howToCover} />
            </Link>
          </div>
          <div className="work-right">
            <div className="project-info">
              <h2>How-To</h2>
              <h4>React.js Web App</h4>
              <p>
                Tumblr bicycle rights kickstarter celiac viral air plant
                jianbing before they sold out microdosing you probably haven't
                heard of them migas poke.{" "}
              </p>
              <div className="more-info">
                <Link to="/how-to">MORE INFO</Link>
                <img src={rightArrow} />
              </div>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="work-right">
            <div className="project-info">
              <h2>Replate</h2>
              <h4>React.js Web App</h4>
              <p>
                Tumblr bicycle rights kickstarter celiac viral air plant
                jianbing before they sold out microdosing you probably haven't
                heard of them migas poke.{" "}
              </p>
              <div className="more-info">
                <Link to="/replate">MORE INFO</Link>
                <img src={rightArrow} />
              </div>
            </div>
          </div>
          <div className="work-left">
            <Link to="/replate">
              <img src={replateCover} />
            </Link>
          </div>
        </div>
        <div className="project-container">
          <div className="work-left">
            <Link to="/designhub">
              <img src={designHubCover} />
            </Link>
          </div>
          <div className="work-right">
            <div className="project-info">
              <h2>DesignHub</h2>
              <h4>React.js Web App</h4>
              <p>
                Tumblr bicycle rights kickstarter celiac viral air plant
                jianbing before they sold out microdosing you probably haven't
                heard of them migas poke.{" "}
              </p>
              <div className="more-info">
                <Link to="/designhub">MORE INFO</Link>
                <img src={rightArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
