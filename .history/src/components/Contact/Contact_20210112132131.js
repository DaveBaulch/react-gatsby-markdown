import React from "react"
import { useContext, useState, useEffect } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./Contact.scss"
import CloseContactButton from "../CloseContactButton"

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)

  // set a state variable which can be used to disable the save/submit button
  // we set it to true so that the form is disabled on first render
  const [disabled, setDisabled] = useState(true)

  //  field values
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  // we can also set error messages to display to the user
  const [nameError, setNameError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [phoneError, setPhoneError] = useState(null)
  const [messageError, setMessageError] = useState(null)

  // here we run any validation, returning true/false
  function formValidation() {
    console.log("validate")
    let hasError = true

    if (name === "") {
      setNameError("Please add your name")
      hasError = true
    } else {
      hasError = false
    }

    if (email === "") {
      setEmailError("Please add a valid email address")
      hasError = true
    } else {
      hasError = false
    }

    if (phone === "") {
      setPhoneError("Please add a phone number")
      hasError = true
    } else {
      setPhoneError(null)
      hasError = false
    }

    if (message === "") {
      setMessageError("Please add your message")
      hasError = true
    } else {
      setMessageError(null)
      hasError = false
    }

    if (hasError) {
      setDisabled(true)
      alert("errors")
    } else {
      setDisabled(false)
      alert("no errors")
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    formValidation()
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
              <div className={`contact-wrapper ${isContactActive ? "visible" : ""}`>
                <label htmlFor="name">Name*</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Your name"
                  onChange={e => setName(e.target.value)}
                />
                {nameError && <span className="error">{nameError}</span>}
              </div>

              <div className="contact-form-item">
                <label htmlFor="email">Email address*</label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Your email"
                  onChange={e => setEmail(e.target.value)}
                />
                {emailError && <span className="error">{nameError}</span>}
              </div>

              <div className="contact-form-item">
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  value={phone}
                  placeholder="Your phone number"
                  onChange={e => setPhone(e.target.value)}
                />
                {phoneError && <span className="error">{phoneError}</span>}
              </div>

              <div className="contact-form-item">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  placeholder="How can I be of help?"
                  onChange={e => setMessage(e.target.value)}
                />
                {messageError && <span className="error">{messageError}</span>}
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
