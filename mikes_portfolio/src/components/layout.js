/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import Intro from "./Intro"
import AboutMe from "./AboutMe"
import RecentWork from "./RecentWork"
import Work from "./Work"
import Contact from "./Contact"

const Layout = ({ children }) => {
  useEffect(() => {
    console.log("hello")
  }, [])
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Intro />
      <div className="drips-container"></div>

      <AboutMe />
      <RecentWork />
      <Work />
      <Contact />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
