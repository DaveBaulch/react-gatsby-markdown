import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import Contact from "../Contact"
import "./Layout.scss"
import "../../sass/base-styles.scss"
import { NavigationStore } from "../../contexts/NavigationContext"
import ContactContext from "../../contexts/ContactContext"

const Layout = ({ children }) => {
  const { isContactActive } = useContext(ContactContext)

  return (
    <NavigationStore>
      <div className="layout">
        <Header />
        {children}
        <Contact />
        <Footer />
      </div>
    </NavigationStore>
  )
}
export default Layout
