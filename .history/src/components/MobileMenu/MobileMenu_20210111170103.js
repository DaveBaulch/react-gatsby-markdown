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
                  HOme
                </AniLink>
              </li>
              <li className="sidenav-list__item">
                <AniLink
                  to="/carousel"
                  className="sidenav-list__link"
                  hidden={!isActive}
                >
                  Carousel
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
