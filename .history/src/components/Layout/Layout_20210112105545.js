import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import Contact from "../Contact"
import "./Layout.scss"
import "../../sass/base-styles.scss"
import { NavigationStore } from "../../contexts/NavigationContext"
import { ContactStore } from "../../contexts/ContactContext"

const Layout = ({ children }) => {
  return (
    <NavigationStore>
      <ContactStore>
        <div className="layout">
          <div className="layout__container">
            <div className="layout__container-inner">
              <Header />
              {children}
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </ContactStore>
    </NavigationStore>
  )
}
export default Layout
