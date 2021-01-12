import React from "react"
import { useContext, useState } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./Contact.scss"
import CloseContactButton from "../CloseContactButton"

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
  }



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
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="contact-form-item">
                  <label for="name">Name*</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Your name"
                    onChange={e => setName(e.target.value)}
                  />
                  <span className="error">Please add your name</span>
                </div>

                <div className="contact-form-item">
                  <label for="email">Email address*</label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Your email"
                    onChange={e => setEmail(e.target.value)}
                  />
                  <span className="error">Please add a valid email address</span>
                </div>

                <div class="contact-form-item">
                  <label for="phone">Phone number</label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={phone}
                    placeholder="Your phone number"
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>

                <div className="contact-form-item">
                  <label for="message">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    placeholder="How can I be of help?"
                    onChange={e => setMessage(e.target.value)}
                  />
                  <span className="error">Please add your message</span>
                </div>

                <input
                  type="submit"
                  value="Send"
                  className="contact-form-button"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Contact
