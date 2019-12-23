import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import scrollToElement from "scroll-to-element"

import LinkedIn from "../assets/icons/LinkedIn"
import GitHub from "../assets/icons/GitHub"
import Twitter from "../assets/icons/Twitter"
import MVLogo from "../assets/icons/MVLogo"
import Sidebar from "./Sidebar"

const Header = ({ siteTitle }) => {
  const handleLinkClick = (e, target) => {
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/") {
        if (e) e.preventDefault()
        scrollToElement(target, {
          duration: 1000,
        })
      }
    }
  }

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
          <a href="https://github.com/ManSleen" target="_blank">
            {/* <img className="svg" src={github} /> */}
            <GitHub color={`${scrollPosition > 860 ? "#0b0d0d" : "white"}`} />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-vansleen/"
            target="_blank"
          >
            <LinkedIn color={`${scrollPosition > 860 ? "#0b0d0d" : "white"}`} />
          </a>
          <a href="https://twitter.com/man_sleen" target="_blank">
            <Twitter color={`${scrollPosition > 860 ? "#0b0d0d" : "white"}`} />
          </a>
          <Link onClick={e => handleLinkClick(e, "#about")} to={"/#about"}>
            ABOUT
          </Link>
          <Link onClick={e => handleLinkClick(e, "#work")} to={"/#work"}>
            WORK
          </Link>
          <Link onClick={e => handleLinkClick(e, "#contact")} to={"/#contact"}>
            CONTACT
          </Link>
          <div className="mobile-menu-button">
            <Sidebar />
          </div>
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
