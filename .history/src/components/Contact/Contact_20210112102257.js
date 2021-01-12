import { React, useContext } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./Contact.scss"

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)

  return <div>Contact</div>



}
export default Contact
