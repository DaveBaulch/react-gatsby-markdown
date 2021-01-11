import React from "react"
import "./Contact.scss"
import { useContext } from "react"
import ContactContext from "../../contexts/ContactContext"

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)

  return {
    if(isNavActive) {
      isContactActive && <div>Contact form goes here</div>
    },
  }
}
export default Contact
