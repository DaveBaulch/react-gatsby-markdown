import { React, useContext } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./Contact.scss"

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)

  if (isContactActive) {
    return <div>Contact</div>
  }

  return null
}
export default Contact
