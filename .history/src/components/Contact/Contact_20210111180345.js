import React from "react"
import "./Contact.scss"
import { useContext } from "react"
import ContactContext from "../../contexts/ContactContext"

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)

  if(isContactActive) {
    return {
      <div>Contact</div>
    }
  }
}
export default Contact
