import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import Contact from "../Contact"
import "./Layout.scss"
import "../../sass/base-styles.scss"
import { NavigationStore } from "../../contexts/NavigationContext"
import { ContactStore } from "../../contexts/ContactContext"
import { useContext } from "react"

const Layout = ({ children }) => {

  return (
    <NavigationStore>
      <ContactStore>
        <div className="layout">
          <Header />
          {children}
          {isContactActive && <Contact />}
          <Footer />
        </div>
      </ContactStore>
    </NavigationStore>
  )
}
export default Layout
