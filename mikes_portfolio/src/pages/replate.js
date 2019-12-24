import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

import earthBW from "../assets/icons/earth-bw.svg"
import GitHub from "../assets/icons/GitHub.js"
import arrowRight from "../assets/icons/arrow-right.svg"
import arrowLeft from "../assets/icons/arrow-left.svg"

import replateFonts from "../images/replate-fonts.svg"
import replateUIElements from "../images/replate-ui-elements.svg"
import howToScreens from "../images/how-to-iphone-screens.svg"
import salad from "../images/salad.svg"

const HowTo = () => {
  return (
    <>
      <Header />
      <div className="project-header replate-header">
        <h1>Replate</h1>
      </div>
      <div className="project-description-container">
        <div className="project-intro-container">
          <div className="intro-text">
            {/* <h2>Replate</h2>
            <h4>React.js Web App</h4> */}
            <p>
              Replate is an app designed to help reduce food waste by making it
              easy to donate surplus food to people in need. Users are guided
              through a sign-up process where they can choose to create a
              Business account or a Volunteer account. Business accounts have
              the ability to post and edit food pickups. Volunteer accounts can
              claim food pickups that they want to receive.
              <br />
              <br />
              The app utilizes React as it’s front-end framework and handles
              state management using Redux. Node and Express were used to create
              the app’s backend and API. The app’s database was created using
              PostgreSQL .
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
            </div>
            <hr />
            <div className="project-details-container">
              <h5>Details</h5>
              <p>
                <span>Completed: </span>JUNE 2019
              </p>
              <p>
                <span>Project Duration: </span>5 Days
              </p>
              <p>
                <span>Role: </span>UI/UX, Front End
              </p>
            </div>
            <hr />
            <div className="links-container">
              <h5>Links</h5>
              <div className="link">
                <a
                  href="https://replate-app.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="links-earth" src={earthBW} />
                </a>
                <a
                  href="https://replate-app.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Live Demo</p>
                </a>
              </div>
              <div className="link">
                <a
                  href="https://github.com/lambda-replate/Lambda-Replate-FE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub color="black" />
                </a>
                <a
                  href="https://github.com/lambda-replate/Lambda-Replate-FE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>GitHub Repo</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-design-container">
          <h6>UI Design</h6>
          <p>
            The Replate app was designed to be simple and easy-to-use. I created
            minimalistic UI elements and used some pre-made ANT Design elements
            throughout the app.
          </p>
          <div className="colors-container">
            <div className="color replate-green">
              <p>#4CB050</p>
            </div>
            <div className="color replate-blue">
              <p>#3066BE</p>
            </div>
            <div className="color replate-black">
              <p>#272D2D</p>
            </div>
            <div className="color replate-red">
              <p>#C94E3E</p>
            </div>
          </div>
          <div className="fonts-ui-container">
            <div className="card fonts-container">
              <h6>Fonts</h6>
              <img src={replateFonts} />
            </div>
            <div className="card ui-container">
              <h6>UI Elements</h6>
              <img src={replateUIElements} />
            </div>
          </div>

          <div className="how-to-screens">
            {/* <img src={howToScreens} /> */}
          </div>
          <div className="project-logo-container">
            <img src={salad} />
          </div>
        </div>
      </div>
      <div className="previous-next">
        <Link to="/how-to">
          <div className="previous">
            <div>
              <img src={arrowLeft} />
            </div>
            <div>
              <h4>Previous</h4>
              <h6>How-To</h6>
            </div>
          </div>
        </Link>
        <Link to="/designhub">
          <div className="next">
            <div>
              <h4>Next</h4>
              <h6>DesignHub</h6>
            </div>
            <div>
              <img src={arrowRight} />
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default HowTo
