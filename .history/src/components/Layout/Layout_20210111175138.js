import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import Contact from "../Contact"
import "./Layout.scss"
import "../../sass/base-styles.scss"
import { NavigationStore } from "../../contexts/NavigationContext"
import { useContext } from "react"

const Layout = ({ children }) => {
  const { isContactActive } = useContext(ContactStore)

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
