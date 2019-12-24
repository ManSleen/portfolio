import React, { useState } from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import { faHome, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import LinkedIn from "../assets/icons/LinkedIn"
import GitHub from "../assets/icons/GitHub"
import Twitter from "../assets/icons/Twitter"

const Sidebar = ({ scrollPosition, handleLinkClick }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleStateChange = state => {
    setMenuOpen(state.isOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const toggleMenu = () => {
    setMenuOpen(state => !state.menuOpen)
  }

  return (
    <div className="nav-menu-container">
      <Menu
        width={"105vw"}
        right
        customCrossIcon={
          <FontAwesomeIcon size="3x" icon={faTimes} color="white" />
        }
        customBurgerIcon={false}
        isOpen={menuOpen}
        onStateChange={state => handleStateChange(state)}
      >
        <a
          href="https://github.com/ManSleen"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img className="svg" src={github} /> */}
          <GitHub color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/michael-vansleen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn color="white" />
        </a>
        <a
          href="https://twitter.com/man_sleen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter color="white" />
        </a>
        <Link
          onClick={e => {
            handleLinkClick(e, "#about")
            closeMenu()
          }}
          to={"/#about"}
        >
          ABOUT
        </Link>
        <Link
          onClick={e => {
            handleLinkClick(e, "#work")
            closeMenu()
          }}
          to={"/#work"}
        >
          WORK
        </Link>
        <Link
          onClick={e => {
            handleLinkClick(e, "#contact")
            closeMenu()
          }}
          to={"/#contact"}
        >
          CONTACT
        </Link>
      </Menu>
      <div onClick={() => toggleMenu()} className="nav-menu-button">
        <FontAwesomeIcon
          size="lg"
          icon={faBars}
          color={`${scrollPosition > 860 ? "#0b0d0d" : "white"}`}
        />
      </div>
    </div>
  )
}

export default Sidebar
