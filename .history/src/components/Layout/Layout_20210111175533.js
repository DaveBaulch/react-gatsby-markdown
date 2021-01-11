import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import Contact from "../Contact"
import "./Layout.scss"
import "../../sass/base-styles.scss"
import { NavigationStore } from "../../contexts/NavigationContext"
import { ContactStore } from "../../contexts/ContactContext"

const Layout = ({ children }) => {
  const { isNavActive, onNavActiveChange } = useContext(NavigationContext)
  
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
