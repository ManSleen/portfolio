import React from "react"
import Header from "../components/header"

import earthBW from "../assets/icons/earth-bw.svg"
import GitHub from "../assets/icons/GitHub.js"

const HowTo = () => {
  return (
    <>
      <Header />
      <div className="project-header how-to-header">
        <h1>How-To</h1>
      </div>
      <div className="project-description-container">
        <div className="project-intro-container">
          <div className="intro-text">
            <h2>How-To</h2>
            <h4>React.js Web App</h4>
            <p>
              How-To is an app that makes it easy to browse and create tutorials
              or “how-to” guides. After a quick and simple sign-up procedure,
              users can immediately begin creating their own guides. Users are
              able to fill in their guide’s info, upload images, and add
              instructions from their personalized user dashboard.
              <br />
              <br /> The app utilizes React as it’s front-end framework and
              handles state management using Redux. Node and Express were used
              to create the app’s backend and API. The app’s database was
              created using PostgreSQL
            </p>
          </div>
          <div className="details">
            <h5>Tech Stack</h5>
            <div className="tech-stack-container">
              <div className="tech react">
                <p>React</p>
              </div>
              <div className="tech redux">
                <p>Redux</p>
              </div>
              <div className="tech node">
                <p>Node</p>
              </div>
              <div className="tech postgres">
                <p>PostgreSQL</p>
              </div>
              <div className="tech express">
                <p>Express</p>
              </div>
              <div className="tech aws">
                <p>AWS S3</p>
              </div>
              <div className="tech twilio">
                <p>Twilio</p>
              </div>
            </div>
            <hr />
            <div className="project-details-container">
              <h5>Details</h5>
              <p>
                <span>Project Duration: </span>2 Weeks
              </p>
              <p>
                <span>Role: </span>UI/UX, Front End, Back End
              </p>
            </div>
            <hr />
            <div className="links-container">
              <h5>Links</h5>
              <div className="link">
                <img className="links-earth" src={earthBW} />
                <p>Live Demo</p>
              </div>
              <div className="link">
                <GitHub color="black" />
                <p>GitHub Repo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-design-container">
          <h6>Design</h6>
          <p>
            The How-To app was designed with a mobile-first mentality. I first
            optimized the UI for a small devices and worked my way up to bigger
            screen sizes. My ultimate goal was to keep the design simple but
            still visually interesting.
          </p>
          <div className="colors-container">
            <div className="color how-to-green">
              <p>#55D55A</p>
            </div>
            <div className="color how-to-blue">
              <p>#3AB6EC</p>
            </div>
            <div className="color how-to-yellow">
              <p>#F3C41E</p>
            </div>
            <div className="color how-to-red">
              <p>#E94949</p>
            </div>
            <div className="color how-to-orange">
              <p>#EC7723</p>
            </div>
            <div className="color how-to-black">
              <p>#171717</p>
            </div>
          </div>
          <div className="fonts-ui-container">
            <div className="card fonts-container">
              <h6>Fonts</h6>
            </div>
            <div className="card ui-container">
              <h6>UI Elements</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowTo
