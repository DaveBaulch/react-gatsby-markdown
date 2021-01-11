import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import Contact from "../Contact"
import "./Layout.scss"
import "../../sass/base-styles.scss"
import { useContext } from "react"
import ContactStore from "../../contexts/ContactContext"
import NavigationStore from "../../contexts/NavigationContext"
import NavigationContext from "../../contexts/NavigationContext"

const Layout = ({ children }) => {
  const { isContactActive } = useContext(ContactContext)

  return (
    <NavigationStore>
      <ContactStore>
        <div className="layout">
          <Header />
          {children}
          <Footer />
          {isContactActive && <Contact />}
        </div>
      </ContactStore>
    </NavigationStore>
  )
}
export default Layout
