import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

import LinkedIn from "../assets/icons/LinkedIn"
import GitHub from "../assets/icons/GitHub"
import Twitter from "../assets/icons/Twitter"
import MVLogo from "../assets/icons/MVLogo"

const Header = ({ siteTitle }) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = e => {
    let scrollTop = window.scrollY
    setScrollPosition(scrollTop)
  }

  return (
    <header>
      <div className={`nav-bar${scrollPosition > 860 ? " inverse" : ""}`}>
        <div className="logo-container">
          <Link to="/">
            <MVLogo
              color={`${scrollPosition > 860 ? "#0b0d0d" : "white"}`}
              size="80"
            />
          </Link>
        </div>
        <div className={`nav-links-container`}>
          <a href="">
            {/* <img className="svg" src={github} /> */}
            <GitHub color={`${scrollPosition > 860 ? "#0b0d0d" : "white"}`} />
          </a>
          <a href="">
            <LinkedIn color={`${scrollPosition > 860 ? "#0b0d0d" : "white"}`} />
          </a>
          <a href="">
            <Twitter color={`${scrollPosition > 860 ? "#0b0d0d" : "white"}`} />
          </a>
          <a href="">ABOUT</a>
          <a href="">WORK</a>
          <a href="">CONTACT</a>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
