import React from "react"
import { useContext } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./Contact.scss"
import CloseContactButton from "../CloseContactButton"

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)

  return (
    <div
      id="contact"
      className={`contact-wrapper ${isContactActive ? "visible" : ""}`}
      aria-label="Contact Form"
      aria-expanded={isContactActive}
      aria-hidden={!isContactActive}
    >
      <div className="contact-inner">
        <CloseContactButton />
        <div className="left-col">
          <h1>It would be great to hear from you!</h1>
          <p>
            Please send me a message if I can be of help in any way, or you'd
            just like to chat...
          </p>
        </div>

        <div className="right-col">
          <div className="contact-block">
   
            <form
            name="contact"
            action="/"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            class="contact-form"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div class="form-item">
              <label for="name">Name*</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
              >
              <span className="error">Please add your name</span>
            </div>

            <div className="form-item">
              <label for="email">Email address*</label>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Your email"
              >
              <span className="error">Please add a valid email address</span>
            </div>

            <div class="form-item">
              <label for="phone">Phone number</label>
              <input
                id="phone"
                type="text"
                name="phone"
                placeholder="Your phone number"
              >
            </div>

            <div className="form-item">
              <label for="message">Message*</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I be of help?"
              />
              <span className="error">Please add your message</span>
            </div>

            <input type="submit" value="Send" className="button form-button">
                  
          </form>            
          
      </div>
    </div>
  )
}
export default Contact
