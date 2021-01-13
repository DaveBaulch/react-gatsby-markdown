import React from "react"
import { useState, useEffect } from "react"
import HeaderLinks from "../HeaderLinks"
import HeaderProfile from "../HeaderProfile"
import MobileMenu from "../MobileMenu"
import "./Header.scss"
import MobileMenuOpenButton from "./../MobileMenuOpenButton"

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)")

    desktop.addEventListener("change", () => {
      setIsDesktop(desktop.matches)
    })

    setIsDesktop(desktop.matches)
  }, [])

  return (
    <>
      <div className="header-wrapper">
        <div className="bg-img">
          <div className="header-img header-img--1" />
          <div className="header-img header-img--2" />
          <div className="header-img header-img--3" />
          <div className="header-img header-img--4" />
        </div>
        <div className="gradient-overlay" />
        <div id="header" className="header">
          <header className="header__inner container">
            {isDesktop && <HeaderLinks />}
            <HeaderProfile />
            {!isDesktop && <MobileMenuOpenButton />}
          </header>
        </div>
      </div>
      {!isDesktop && <MobileMenu />}
    </>
  )
}

export default Header
