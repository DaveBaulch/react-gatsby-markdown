import React from "react"
import axios from "axios"
import * as qs from "query-string"
import { useContext, useState, useRef, useEffect } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./Contact.scss"
import CloseContactButton from "../CloseContactButton"

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)

  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()

  // set a state variable which can be used to disable the save/submit button
  // we set it to true so that the form is disabled on first render
  const [disabled, setDisabled] = useState(true)

  //  field values
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const [formSuccess, setFormSuccess] = useState(false)
  const [formFail, setFormFail] = useState(false)

  // set error messages
  const [nameError, setNameError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [phoneError, setPhoneError] = useState(null)
  const [messageError, setMessageError] = useState(null)

  // run any validation here
  const formValidation = () => {
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
      // console.log("errors")
    } else {
      setDisabled(false)
      // console.log("no errors")
      submitForm()
    }
  }

  const submitForm = () => {
    //console.log("submit form")

    const form = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    }

    const axiosConfig = {
      header: { "Content-Type": "application/x-www-form-urlencoded" },
    }
    axios
      .post(
        "/",
        qs.stringify({
          "form-name": "contact",
          ...form,
        }),
        axiosConfig
      )
      .then(function (response) {
        // handle success
        console.log("success" + response)
        setFormSuccess(true)
      })
      .catch(function (response) {
        // handle error
        console.log("fail" + response)
        setFormFail(true)
      })
  }

  const clearErrors = e => {
    setNameError(null)
    setEmailError(null)
    setPhoneError(null)
    setMessageError(null)
    setFormSuccess(false)
    setFormFail(false)
    //alert(e.target.name)
  }

  const onBlur = e => {
    //alert(e.target.name)
  }

  const handleSubmit = event => {
    event.preventDefault()
    formValidation()
  }

  useEffect(() => {
    setNameError(null)
    setEmailError(null)
    setPhoneError(null)
    setMessageError(null)
    setFormSuccess(false)
    setFormFail(false)
  }, [])

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
          {!formSuccess && !formFail && (
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
                <div
                  className={`contact-form-item ${
                    nameError ? "has-error" : ""
                  }`}
                  ref={nameRef}
                >
                  <label htmlFor="name">Name*</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Your name"
                    onChange={e => setName(e.target.value)}
                    onFocus={e => clearErrors(e)}
                    onBlur={e => onBlur(e)}
                  />
                  {nameError && <span className="error">{nameError}</span>}
                </div>

                <div
                  className={`contact-form-item ${
                    emailError ? "has-error" : ""
                  }`}
                  ref={emailRef}
                >
                  <label htmlFor="email">Email address*</label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Your email"
                    onChange={e => setEmail(e.target.value)}
                    onFocus={e => clearErrors(e)}
                    onBlur={e => onBlur(e)}
                  />
                  {emailError && <span className="error">{nameError}</span>}
                </div>

                <div
                  className={`contact-form-item ${
                    phoneError ? "has-error" : ""
                  }`}
                  ref={phoneRef}
                >
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={phone}
                    placeholder="Your phone number"
                    onChange={e => setPhone(e.target.value)}
                    onFocus={e => clearErrors(e)}
                    onBlur={e => onBlur(e)}
                  />
                  {phoneError && <span className="error">{phoneError}</span>}
                </div>

                <div
                  className={`contact-form-item ${
                    messageError ? "has-error" : ""
                  }`}
                  ref={messageRef}
                >
                  <label htmlFor="message">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    placeholder="How can I be of help?"
                    onChange={e => setMessage(e.target.value)}
                    onFocus={e => clearErrors(e)}
                    onBlur={e => onBlur(e)}
                  />
                  {messageError && (
                    <span className="error">{messageError}</span>
                  )}
                </div>

                <input
                  type="submit"
                  value="Send"
                  className="contact-form-button"
                />
              </form>
            </div>
          )}

          {formSuccess && (
            <div className="success-block">
              <h2>Thank you!</h2>
              <p>
                Thanks for getting in touch - if you have any further questions
                please email:
                <a href="mailto: davebaulch@yahoo.co.uk">
                  davebaulch@yahoo.co.uk
                </a>
              </p>
            </div>
          )}

          {formFail && (
            <div className="error-block">
              <h2>Oh no!</h2>
              <p>
                It looks like something went wrong - please email me directly
                at:
                <a href="mailto: davebaulch@yahoo.co.uk">
                  davebaulch@yahoo.co.uk
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Contact
