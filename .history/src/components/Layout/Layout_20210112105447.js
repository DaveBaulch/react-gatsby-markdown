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
          <div className="app-container">
            <div className="app-container__inner">
            <Header />
            {children}
            <Contact />
            <Footer />
          </div>
        </div>
      </ContactStore>
    </NavigationStore>
  )
}
export default Layout
