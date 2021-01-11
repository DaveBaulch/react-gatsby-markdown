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
            <h2>Components</h2>
            <ul className="sidenav-list">
              <li className="sidenav-list__item">
                <AniLink
                  to="/hero"
                  className="sidenav-list__link"
                  hidden={!isActive}
                >
                  Hero
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
              <li className="sidenav-list__item">
                <AniLink
                  to="/cards"
                  className="sidenav-list__link"
                  hidden={!isActive}
                >
                  Cards
                </AniLink>
              </li>
              <li className="sidenav-list__item">
                <AniLink
                  to="/sectors"
                  className="sidenav-list__link"
                  hidden={!isActive}
                >
                  Sectors
                </AniLink>
              </li>
              <li className="sidenav-list__item">
                <AniLink
                  to="/cta"
                  className="sidenav-list__link"
                  hidden={!isActive}
                >
                  CTA
                </AniLink>
              </li>
              <li className="sidenav-list__item">
                <Link
                  to="/quote"
                  className="sidenav-list__link"
                  hidden={!isActive}
                >
                  Quote
                </Link>
              </li>
              <li className="sidenav-list__item">
                <Link
                  to="/text"
                  className="sidenav-list__link"
                  hidden={!isActive}
                >
                  Text
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
