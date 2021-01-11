import React from "react"
import { useState, useEffect } from "react"
// import { CSSTransition } from "react-transition-group"
import HeaderLinks from "../HeaderLinks"
import HeaderProfile from "../HeaderProfile"
import MobileMenu from "../MobileMenu"
import "./Header.scss"

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)")

    desktop.addEventListener("change", () => {
      setIsDesktop(desktop.matches)
    })

    setIsDesktop(desktop.matches)
  }, [])

  return (
    <div className="header-wrapper">
      <div className="gradient-overlay" />

      <div id="header" className="header">
        <header className="header__inner container">
          <HeaderLinks />
          <HeaderProfile />

          {!isDesktop && 
          <MobileMenu />
        </header>
      </div>
    </div>
  )
}

export default Header
