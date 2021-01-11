import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import Contact from "../Contact"
import "./Layout.scss"
import "../../sass/base-styles.scss"
import ContactStore from "../../contexts/ContactContext"
import NavigationStore from "../../contexts/NavigationContext"

const Layout = ({ children }) => {
  return (
    <NavigationStore>
      <ContactStore>
        <div className="layout">
          <Header />
          {children}
          <Footer />
          <Contact />
    </NavigationStore>
  )
}
export default Layout
