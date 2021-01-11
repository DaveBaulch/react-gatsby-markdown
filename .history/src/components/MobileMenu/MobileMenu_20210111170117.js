import React from "react"
import { useContext } from "react"
import NavigationContext from "../../contexts/NavigationContext"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./MobileMenu.scss"

const MobileMenu = () => {
  const { isActive, onActiveChange } = useContext(NavigationContext)

  return (
    <div className="sidenav-container" aria-hidden={!isActive}>
      <div>
        <div
          className="sidenav-backdrop"
          onClick={() => onActiveChange()}
        ></div>

        <div className="sidenav-wrapper">
          <SidenavCloseButton
            onClick={() => onActiveChange()}
            hidden={!isActive}
          />

          <div className="sidenav" onClick={() => onActiveChange()}>

            <ul className="sidenav-list">
              <li className="sidenav-list__item">
                <AniLink
                  to="/"
                  className="sidenav-list__link"
                  hidden={!isActive}
                >
                  Home
                </AniLink>
              </li>
              <li className="sidenav-list__item">
                <AniLink
                  to="/about"
                  className="sidenav-list__link"
                  hidden={!isActive}
                >
                  About
                </AniLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
