import React from "react"
import "./Contact.scss"
import { useEffect, useRef, useContext } from "react"
import ContactContext from "../../contexts/ContactContext"

const Contact = () => {
  const { isContactActive, onNavActiveChange } = useContext(NavigationContext)
  
  return <div>Contact page</div>
}
export default Contact
