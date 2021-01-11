import React from "react"
import { useState, useEffect } from 'react'
// import { CSSTransition } from "react-transition-group"
import HeaderLinks from "../HeaderLinks"
import HeaderProfile from "../HeaderProfile"
import "./Header.scss"

const Header = () => (

  return (
    <div className="header-wrapper">
      <div className="gradient-overlay" />

      <div id="header" className="header">
        <header className="header__inner container">
          <HeaderLinks />
          <HeaderProfile />
        </header>
      </div>

    </div>
  )
}

export default Header
