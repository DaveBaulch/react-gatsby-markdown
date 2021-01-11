import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import Contact from "../Contact"
import "./Layout.scss"
import "../../sass/base-styles.scss"
import { NavigationStore } from "../../contexts/NavigationContext"
import { useContext } from "react"
import { ContactStore } from "../../contexts/ContactContext"

const Layout = ({ children }) => {
  const { isContactActive, onContactActiveChange } = useContext(ContactContext)

  return (
    <NavigationStore>
      <div className="layout">
        <Header />
        {children}
        {isContactActive && <Contact />}
        <Footer />
      </div>
    </NavigationStore>
  )
}
export default Layout
