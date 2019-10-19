import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import mvLogo from "../assets/icons/mv-logo.svg"
import github from "../assets/icons/github.svg"
import linkedin from "../assets/icons/linkedin.svg"
import twitter from "../assets/icons/twitter.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="nav-bar">
      <div className="logo-container">
        <img src={mvLogo} />
      </div>
      <div className="nav-links-container">
        <a href="">
          <img src={github} />
        </a>
        <a href="">
          <img src={linkedin} />
        </a>
        <a href="">
          <img src={twitter} />
        </a>
        <a href="">ABOUT</a>
        <a href="">WORK</a>
        <a href="">CONTACT</a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
