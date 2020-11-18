import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

import earthBW from "../assets/icons/earth-bw.svg"
import GitHub from "../assets/icons/GitHub.js"
import Youtube from "../assets/icons/Youtube.js"
import arrowRight from "../assets/icons/arrow-right.svg"
import arrowLeft from "../assets/icons/arrow-left.svg"
import designHubLogo from "../images/designhub-logo.svg"
import SEO from "../components/seo"

const HowTo = () => {
  return (
    <>
      <SEO title="Giraffe" />
      <Header />
      <div className="project-header giraffe-header ">
        <h1>Giraffe</h1>
      </div>
      <div className="project-description-container">
        <div className="project-intro-container">
          <div className="intro-text">
            {/* <h2>DesignHub</h2>
            <h4>React.js Web App</h4> */}
            <p>
              Giraffe is a serverless B2B SaaS application designed to help
              people find the help they need at work and allows businesses to
              keep track of employees' ever-changing skills and capabilities.
              Organizations are able to create a "Workspace" through a guided
              setup process.
              <br />
              <br />
              DesignHub’s front end is built with React and manages state with
              Redux. Node and Express make up the back end and API of the app.
              Users are authorized with Auth0 and can use existing accounts to
              gain access to DesignHub. Images are uploaded to an AWS S3 bucket
              and we used Twilio to send users messages and notifications about
              their account.
            </p>
          </div>
          <div className="details">
            <h5>Tech Stack</h5>
            <div className="tech-stack-container">
              <div className="tech react">
                <p>React.js w/ Hooks</p>
              </div>
              <div className="tech node">
                <p>Node.js</p>
              </div>
              <div className="tech aws-amplify">
                <p>AWS Amplify</p>
              </div>
              <div className="tech aws-s3">
                <p>AWS S3</p>
              </div>
              <div className="tech aws-dynamodb">
                <p>AWS DynamoDB</p>
              </div>
              <div className="tech aws-cognito">
                <p>AWS Cognito</p>
              </div>
              <div className="tech aws-lambda">
                <p>AWS Lambda</p>
              </div>
            </div>
            <hr />
            <div className="project-details-container">
              <h5>Details</h5>
              <p>
                <span>Completed: </span>Oct 2020
              </p>
              <p>
                <span>Project Duration: </span>8 Months
              </p>
              <p>
                <span>Role: </span>Frontend, Backend, DevOps
              </p>
            </div>
            <hr />
            <div className="links-container">
              <h5>Links</h5>
              <div className="link">
                <a
                  href="https://github.com/ManSleen/designhub-fe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon">
                    <img alt="" className="links-earth" src={earthBW} />
                  </div>
                </a>
                <a
                  href="https://designhubx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Live App</p>
                </a>
              </div>
              <div className="link">
                <a
                  href="https://github.com/lambda-replate/Lambda-Replate-FE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon">
                    <GitHub color="black" />
                  </div>
                </a>
                <a
                  href="https://github.com/lambda-replate/Lambda-Replate-FE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>GitHub Repo</p>
                </a>
              </div>
              <div className="link">
                <a
                  href="https://youtu.be/PTBgNKuqSsY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon">
                    <Youtube />
                  </div>
                </a>

                <a
                  href="https://youtu.be/PTBgNKuqSsY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Video Overview</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-design-container">
          <h6>UI Design</h6>
          <p>
            The users experience is the main priority for the UI of this app.
            Users can navigate the site quickly and without any guidance. It’s
            easy to upload images with our drag-and-drop feature. Adding a dark
            mode eases eye strain, while subtle user interactions give the app a
            tactile feel.
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

          <div className="how-to-screens">
            <iframe
              title="DesignHub Video Overview"
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/PTBgNKuqSsY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="project-logo-container">
            <img alt="" src={designHubLogo} />
          </div>
        </div>
      </div>
      <div className="previous-next">
        <Link to="/replate">
          <div className="previous">
            <div>
              <img alt="" src={arrowLeft} />
            </div>
            <div>
              <p>Previous</p>
              <h6>Replate</h6>
            </div>
          </div>
        </Link>
        <Link to="/how-to">
          <div className="next">
            <div>
              <p>Next</p>
              <h6>How-To</h6>
            </div>
            <div>
              <img alt="" src={arrowRight} />
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default HowTo
