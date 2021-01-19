import React from "react"
import axios from "axios"
import * as qs from "query-string"
import { useContext, useState, useEffect, useReducer } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./Contact.scss"
import CloseContactButton from "../CloseContactButton"
import FocusTrap from "focus-trap-react"
import formReducer from "../../reducers/formReducer"

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  nameError: null,
  emailError: null,
  messageError: null,
}

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)

  // set a state variable which can be used to disable the save/submit button
  // we set it to true so that the form is disabled on first render
  const [disabled, setDisabled] = useState(true)
  const [hasFocus, setHasFocus] = useState(null)

  //  field values
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [phone, setPhone] = useState("")
  // const [message, setMessage] = useState("")

  const [formState, dispatch] = useReducer(formReducer, initialFormState)

  const handleTextChange = e => {
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    })
  }

  const handleFieldError = (field, errorStatus) => {
    dispatch({
      type: "HANDLE FIELD ERROR",
      field: field,
      payload: errorStatus,
    })
  }

  const clearErrors = () => {
    dispatch({
      type: "CLEAR ERRORS",
    })
  }

  const resetFormFields = () => {
    console.log("reset form fields")
    dispatch({
      type: "RESET FORM FIELDS",
    })
  }

  const [formSuccess, setFormSuccess] = useState(false)
  const [formFail, setFormFail] = useState(false)

  // set error messages
  // const [nameError, setNameError] = useState(null)
  // const [emailError, setEmailError] = useState(null)
  // const [messageError, setMessageError] = useState(null)

  // run any validation here
  const formValidation = () => {
    console.log("validate")
    let hasNameError = true
    let hasEmailError = true
    let hasMessageError = true

    if (formState.name === "") {
      //setNameError("Please add your name")
      handleFieldError("nameError", "Please add your name")
      hasNameError = true
    } else {
      hasNameError = false
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailValid = re.test(formState.email)

    if (!emailValid) {
      //setEmailError("Please add a valid email address")
      handleFieldError("emailError", "Please add a valid email address")
      hasEmailError = true
    } else {
      hasEmailError = false
    }

    if (formState.message === "") {
      //setMessageError("Please add your message")
      handleFieldError("messageError", "Please add your message")
      hasMessageError = true
    } else {
      setMessageError(null)
      hasMessageError = false
    }

    if (hasNameError || hasEmailError || hasMessageError) {
      setDisabled(true)
      console.log("errors")
    } else {
      setDisabled(false)
      console.log("no errors")
      submitForm()
    }
  }

  const submitForm = () => {
    console.log("submit form")

    const form = {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      message: formState.message,
    }

    console.log(form)

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
        resetFormFields()
      })
      .catch(function (response) {
        // handle error
        console.log("fail" + response)
        setFormFail(true)
        resetFormFields()
      })
  }

  const clearErrors = event => {
    // setNameError(null)
    // setEmailError(null)
    // setMessageError(null)
    clearErrors()
    setHasFocus(event.target.name)
    //console.log(hasFocus)
  }

  const onBlur = () => {
    // console.log(event.target.name)
    setHasFocus(null)
  }

  const handleSubmit = event => {
    event.preventDefault()
    formValidation()
  }

  useEffect(() => {
    function clearForm() {
      setNameError(null)
      setEmailError(null)
      setMessageError(null)
      // setName("")
      // setEmail("")
      // setPhone("")
      // setMessage("")
      resetFormFields()
      setFormSuccess(false)
      setFormFail(false)
    }
    setTimeout(function () {
      clearForm()
    }, 1000)
  }, [isContactActive])

  return (
    <div
      id="contact"
      className={`contact-wrapper ${isContactActive ? "visible" : ""}`}
      aria-label="Contact Form"
      aria-expanded={isContactActive}
      aria-hidden={!isContactActive}
    >
      <FocusTrap active={isContactActive}>
        <div className="contact-inner">
          <CloseContactButton>
            <span className="sr-only">Close</span>
          </CloseContactButton>

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
                    className={`contact-form-item 
                  ${formState.nameError ? "has-error" : ""}
                  ${hasFocus === "name" ? "has-focus" : ""}
                  `}
                  >
                    <label htmlFor="name">Name*</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formState.name}
                      placeholder="Your name"
                      //onChange={e => setName(e.target.value)}
                      onChange={e => handleTextChange(e)}
                      onFocus={e => clearErrors(e)}
                      onBlur={e => onBlur(e)}
                    />
                    {formState.nameError && (
                      <span className="error">{formState.nameError}</span>
                    )}
                  </div>

                  <div
                    className={`contact-form-item 
                  ${formState.emailError ? "has-error" : ""}
                  ${hasFocus === "email" ? "has-focus" : ""}
                  `}
                  >
                    <label htmlFor="email">Email address*</label>
                    <input
                      id="email"
                      type="text"
                      name="email"
                      value={formState.email}
                      placeholder="Your email"
                      //onChange={e => setEmail(e.target.value)}
                      onChange={e => handleTextChange(e)}
                      onFocus={e => clearErrors(e)}
                      onBlur={e => onBlur(e)}
                    />
                    {formState.emailError && (
                      <span className="error">{formState.emailError}</span>
                    )}
                  </div>

                  <div
                    className={`contact-form-item
                ${hasFocus === "phone" ? "has-focus" : ""}
                `}
                  >
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      value={formState.phone}
                      placeholder="Your phone number"
                      //onChange={e => setPhone(e.target.value)}
                      onChange={e => handleTextChange(e)}
                      onFocus={e => clearErrors(e)}
                      onBlur={e => onBlur(e)}
                    />
                  </div>

                  <div
                    className={`contact-form-item 
                  ${formState.messageError ? "has-error" : ""}
                  ${hasFocus === "message" ? "has-focus" : ""}
                  `}
                  >
                    <label htmlFor="message">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      placeholder="How can I be of help?"
                      //onChange={e => setMessage(e.target.value)}
                      onChange={e => handleTextChange(e)}
                      onFocus={e => clearErrors(e)}
                      onBlur={e => onBlur(e)}
                    />
                    {formState.messageError && (
                      <span className="error">{formState.messageError}</span>
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
                  Thanks for getting in touch - if you have any further
                  questions please email:
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
      </FocusTrap>
    </div>
  )
}
export default Contact
