import { React, useContext } from "react"
import "./Contact.scss"
import ContactContext from "../../contexts/ContactContext"

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)

  if (isContactActive) {
    return <div>Contact</div>
  }

  return null
}
export default Contact
