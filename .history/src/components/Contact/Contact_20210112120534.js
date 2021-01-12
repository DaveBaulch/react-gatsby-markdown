import React from "react"
import { useContext, useState, useEffect } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./Contact.scss"
import CloseContactButton from "../CloseContactButton"

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)

  // we use the help of useRef to test if it's the first render
  const firstRender = useRef(true)

  // set a state variable which can be used to disable the save/submit button
  // we set it to true so that the form is disabled on first render
  const [disable, setDisabled] = useState(true)

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

  // for every change in our state this will be fired
  // we add validation here and disable the save button if required
  useEffect(() => {
    // we want to skip validation on first render
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    // here we can disable/enable the save button by wrapping the setState function
    // in a call to the validation function which returns true/false
    setDisabled(formValidation())
  }, [name, email, phone, message]) // any state variable(s) included in here will trigger the effect to run

  const handleSubmit = event => {
    event.preventDefault()
    // if form is valid, submit
  }

  // here we run any validation, returning true/false
  const formValidation = () => {
    if (name === "") {
      setNameError("Name cant be blank!")
      return true
    } else {
      setNameError(null)
      return false
    }
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
                {nameError && <span className="error">{nameError}</span>}
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
                {emailError && <span className="error">{nameError}</span>}
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
                {emailError && <span className="error">{nameError}</span>}
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
                disabled={disabled}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
