import React from "react"
import { useContext } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./Contact.scss"

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)

  return (
    <div
      id="contact"
      className={`contact-wrapper ${isContactActive ? "contact-wrapper active" : ""}}
      aria-label="Contact Form"
      aria-expanded={isContactActive}
      aria-hidden={!isContactActive}
    >
      <div className="contact-inner">
        <div className="left-col">
          <h1>It would be great to hear from you!</h1>
          <p>
            Please send me a message if I can be of help in any way, or you'd
            just like to chat...
          </p>
        </div>

        <div className="right-col">
          <div className="contact-block">Contact form goes here</div>
        </div>
      </div>
    </div>
  )
}
export default Contact
