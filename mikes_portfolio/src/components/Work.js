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
              <Link to="/how-to">
                <h2>How-To</h2>
              </Link>
              <p>
                How-To is an app that makes it easy to browse and create
                “how-to” guides.
              </p>
              <div className="more-info">
                <Link to="/how-to">MORE INFO</Link>
                <img src={rightArrow} />
              </div>
            </div>
          </div>
        </div>
        <div className="project-container reverse">
          <div className="work-right">
            <div className="project-info">
              <Link to="/replate">
                <h2>Replate</h2>
              </Link>
              <p>
                Replate is an app designed to help reduce food waste by making
                it easy to donate surplus food to people in need.
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
              <Link to="/designhub">
                <h2>DesignHub</h2>
              </Link>
              <p>
                DesignHub is a professional design platform and asset management
                system.
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
