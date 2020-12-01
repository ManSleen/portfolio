import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import styled from "styled-components"

import earthBW from "../assets/icons/earth-bw.svg"
import GitHub from "../assets/icons/GitHub.js"
import Youtube from "../assets/icons/Youtube.js"
import arrowRight from "../assets/icons/arrow-right.svg"
import arrowLeft from "../assets/icons/arrow-left.svg"
import giraffeLogo from "../images/giraffe_fullLogo_goldBlue copy.png"
import SEO from "../components/seo"

import gatherPeopleDataVideo from "../videos/1-gather-people-data.mp4"
import problemSolveVideo from "../videos/2-problem-solve.mp4"

const GiraffeLogo = styled.img`
  width: 300px;
`
const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

const FeatureVideo = styled.video`
  width: 80%;
  margin: 0 auto;
  filter: drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.3));
  border-radius: 5px;
  @media screen and (max-width: 900px) {
    margin-bottom: 80px;
  }
`

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
              setup process. Users can then join workspaces and start adding
              skills to their profile. Other users can search the database for
              skills and get connected with other users, either through the
              online app or our integrated Slack app.
              <br />
              <br />
              Giraffe’s frontend is built with React and custom Material UI
              components. State is managed with the Context API. The app's
              backend is built using a combination of AWS Lambda functions, a
              GraphQL API and uses a DynamoDB database as the data layer.
              <br />
              <br />
              User authentication is handled with Cognito. Static assets are
              stored in S3 buckets.
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
              <div className="tech material-ui">
                <p>Material UI</p>
              </div>
              <div className="tech graphql">
                <p>GraphQL</p>
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
                  href="https://app.getgiraffe.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon">
                    <img alt="" className="links-earth" src={earthBW} />
                  </div>
                </a>
                <a
                  href="https://app.getgiraffe.io"
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
            </div>
          </div>
        </div>
        <div className="project-design-container">
          <h6>UX/UI Design</h6>
          <p>
            I created the initial library of UI components and color palette for
            the app and employed UX best practices to create a usable and
            easy-to-navigate online experience.
          </p>
          <div className="colors-container">
            <div className="color giraffe-blue">
              <p>#0A4B90</p>
            </div>
            <div className="color giraffe-yellow ">
              <p>#F9BC15</p>
            </div>
            <div className="color giraffe-light-blue">
              <p>#6BB6E7</p>
            </div>
            <div className="color giraffe-green">
              <p>#1EB980</p>
            </div>
            <div className="color giraffe-red">
              <p>#B00020</p>
            </div>
          </div>

          <div className="how-to-screens">
            <VideoContainer>
              <FeatureVideo autoPlay muted loop playsInline preLoad="metadata">
                <source src={gatherPeopleDataVideo} type="video/mp4" />
              </FeatureVideo>
              <br />
              <br />
              <FeatureVideo autoPlay muted loop playsInline preLoad="metadata">
                <source src={problemSolveVideo} type="video/mp4" />
              </FeatureVideo>
            </VideoContainer>
          </div>
          <div className="project-logo-container">
            <GiraffeLogo alt="" src={giraffeLogo} />
          </div>
        </div>
      </div>
      <div className="previous-next">
        <Link to="/designhub">
          <div className="previous">
            <div>
              <img alt="" src={arrowLeft} />
            </div>
            <div>
              <p>Previous</p>
              <h6>DesignHub</h6>
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
