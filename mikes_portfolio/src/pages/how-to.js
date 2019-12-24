import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

import earthBW from "../assets/icons/earth-bw.svg"
import GitHub from "../assets/icons/GitHub.js"
import arrowRight from "../assets/icons/arrow-right.svg"
import arrowLeft from "../assets/icons/arrow-left.svg"

import howToFonts from "../images/roboto.svg"
import howToUIElements from "../images/how-to-ui-elements.svg"
import howToScreens from "../images/how-to-iphone-screens.svg"
import hammerWrench from "../images/hammer-wrench.svg"

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
            {/* <h2>Overview</h2> */}
            {/* <h4>React.js Web App</h4> */}
            <p>
              How-To is an app that makes it easy to browse and create tutorials
              or “how-to” guides. Users are guided through a quick
              sign-up/sign-in process before they can begin creating their own
              guides. Users are able to fill in their guide’s info, upload
              images, and add guide instructions from their personalized user
              dashboard.
              <br />
              <br /> The app utilizes React as it’s front-end framework and
              handles state management using Redux. Node and Express were used
              to create the app’s backend and API. The app’s database was
              created using PostgreSQL. Uploaded images are stored in a modular
              AWS S3 bucket.
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
            </div>
            <hr />
            <div className="project-details-container">
              <h5>Details</h5>
              <p>
                <span>Completed: </span>OCT 2019
              </p>
              <p>
                <span>Project Duration: </span>2 Weeks
              </p>
              <p>
                <span>Role: </span>Identity, UI/UX, Front & Back End
              </p>
            </div>
            <hr />
            <div className="links-container">
              <h5>Links</h5>
              <div className="link">
                <a
                  href="https://howto-app.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="links-earth" src={earthBW} />
                </a>
                <a
                  href="https://howto-app.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Live Demo</p>
                </a>
              </div>
              <div className="link">
                <a
                  href="https://github.com/ManSleen/How-To-Redesign-FE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub color="black" />
                </a>
                <a
                  href="https://github.com/ManSleen/How-To-Redesign-FE"
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
            I designed How-To to work best on phone-sized devices and worked my
            way up to bigger screen sizes. My ultimate goal was to keep the
            design simple but still visually interesting.
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
              <img src={howToFonts} />
            </div>
            <div className="card ui-container">
              <h6>UI Elements</h6>
              <img src={howToUIElements} />
            </div>
          </div>
          <div className="prototype-container">
            <h6>Prototype</h6>
            <iframe
              height="600"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FH2RlU96r30K3HM0cC4ETMw%2FHow-To-UI-Design%3Fnode-id%3D23%253A1115%26viewport%3D-397%252C139%252C1.008410096168518%26scaling%3Dscale-down"
              allowFullScreen
            ></iframe>
          </div>

          <div className="project-logo-container">
            <img src={hammerWrench} />
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
              <h6>DesignHub</h6>
            </div>
          </div>
        </Link>
        <Link to="/replate">
          <div className="next">
            <div>
              <h4>Next</h4>
              <h6>Replate</h6>
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
