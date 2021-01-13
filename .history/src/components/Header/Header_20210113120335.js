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
        <transition-group name="bg" tag="div" class="bg-img">
          <div
            v-if="currentPage === 'index'"
            key="img1"
            class="header-img header-img--1"
          />
          <div
            v-else-if="currentPage === 'about'"
            key="img2"
            class="header-img header-img--2"
          />
          <div
            v-else-if="currentPage === 'cv'"
            key="img3"
            class="header-img header-img--3"
          />
          <div v-else key="img4" class="header-img header-img--4" />
        </transition-group>
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
