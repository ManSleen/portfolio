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
import designHubLogo from "../images/designhub-logo.svg"

const HowTo = () => {
  return (
    <>
      <Header />
      <div className="project-header designhub-header ">
        <h1>DesignHub</h1>
      </div>
      <div className="project-description-container">
        <div className="project-intro-container">
          <div className="intro-text">
            <h2>DesignHub</h2>
            <h4>React.js Web App</h4>
            <p>DesignHub was created to</p>
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
                <span>Completed: </span>Nov 2019
              </p>
              <p>
                <span>Project Duration: </span>8 Weeks
              </p>
              <p>
                <span>Role: </span>Front End, Back End
              </p>
            </div>
            <hr />
            <div className="links-container">
              <h5>Links</h5>
              <div className="link">
                <a
                  href="https://github.com/ManSleen/designhub-fe"
                  target="_blank"
                >
                  <img className="links-earth" src={earthBW} />
                </a>
                <a href="https://designhubx.com/" target="_blank">
                  <p>Live App</p>
                </a>
              </div>
              <div className="link">
                <a
                  href="https://github.com/lambda-replate/Lambda-Replate-FE"
                  target="_blank"
                >
                  <GitHub color="black" />
                </a>
                <a
                  href="https://github.com/lambda-replate/Lambda-Replate-FE"
                  target="_blank"
                >
                  <p>GitHub Repo</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-design-container">
          <h6>Design</h6>
          <p>
            The Replate app was designed to be simple and easy-to-use. I created
            minimalistic UI elements and used some pre-made ANT Design elements
            throughout the app.
          </p>
          <div className="colors-container">
            <div className="color designhub-black">
              <p>#15161A</p>
            </div>
            <div className="color designhub-grey ">
              <p>#6D6D72</p>
            </div>
            <div className="color designhub-blue">
              <p>#5557FE</p>
            </div>
            <div className="color designhub-purple">
              <p>#9555FE</p>
            </div>
            <div className="color designhub-gradient">
              <p>GRADIENT</p>
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
            <iframe
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/PTBgNKuqSsY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="project-logo-container">
            <img src={designHubLogo} />
          </div>
        </div>
      </div>
      <div className="previous-next">
        <Link to="/replate">
          <div className="previous">
            <div>
              <img src={arrowLeft} />
            </div>
            <div>
              <h4>Previous</h4>
              <h6>Replate</h6>
            </div>
          </div>
        </Link>
        <Link to="/how-to">
          <div className="next">
            <div>
              <h4>Next</h4>
              <h6>How-To</h6>
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
