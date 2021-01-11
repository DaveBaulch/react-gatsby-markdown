import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import Contact from "../Contact"
import "./Layout.scss"
import "../../sass/base-styles.scss"
import { NavigationStore } from "../../contexts/NavigationContext"

const Layout = ({ children }) => (
  <NavigationStore>
  <div className="layout">
    <Header />
    {children}
    <Footer />
    <Contact />
  </div>
)
export default Layout
