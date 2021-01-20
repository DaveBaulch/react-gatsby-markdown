import React from "react"
import axios from "axios"
import * as qs from "query-string"
import { useContext, useEffect, useReducer } from "react"
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
  nameError: "",
  emailError: "",
  messageError: "",
  formDisabled: true,
  hasFocus: null,
  formSuccess: false,
  formFail: false,
}

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)
  const [formState, dispatch] = useReducer(formReducer, initialFormState)

  const handleTextChange = e => {
    dispatch({
      type: "HANDLE_INPUT_TEXT",
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

  const clearFormErrors = () => {
    dispatch({
      type: "CLEAR FIELD ERRORS",
    })
  }

  const resetFormFields = () => {
    dispatch({
      type: "RESET FORM FIELDS",
    })
  }

  const setDisabled = status => {
    dispatch({
      type: "SET DISABLED",
      payload: status,
    })
  }

  const setHasFocus = element => {
    dispatch({
      type: "SET HAS FOCUS",
      payload: element,
    })
  }

  const setFormSuccess = status => {
    dispatch({
      type: "SET FORM SUCCESS",
      payload: status,
    })
  }

  const setFormFail = status => {
    dispatch({
      type: "SET FORM FAIL",
      payload: status,
    })
  }

  // run any validation here
  const formValidation = () => {
    //console.log("validate")
    let hasError = false

    if (formState.name === "") {
      handleFieldError("nameError", "Please add your name")
      hasError = true
    } else {
      handleFieldError("nameError", "")
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailValid = re.test(formState.email)

    if (!emailValid) {
      handleFieldError("emailError", "Please add a valid email address")
      hasError = true
    } else {
      handleFieldError("emailError", "")
    }

    if (formState.message === "") {
      handleFieldError("messageError", "Please add your message")
      hasError = true
    } else {
      handleFieldError("messageError", "")
    }

    if (hasError) {
      setDisabled(true)
      //console.log("errors")
    } else {
      setDisabled(false)
      //console.log("no errors")
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
    clearFormErrors()
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
      clearFormErrors()
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
            {!formState.formSuccess && !formState.formFail && (
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
                  ${formState.hasFocus === "name" ? "has-focus" : ""}
                  `}
                  >
                    <label htmlFor="name">Name*</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formState.name}
                      placeholder="Your name"
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
                  ${formState.hasFocus === "email" ? "has-focus" : ""}
                  `}
                  >
                    <label htmlFor="email">Email address*</label>
                    <input
                      id="email"
                      type="text"
                      name="email"
                      value={formState.email}
                      placeholder="Your email"
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
                ${formState.hasFocus === "phone" ? "has-focus" : ""}
                `}
                  >
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      value={formState.phone}
                      placeholder="Your phone number"
                      onChange={e => handleTextChange(e)}
                      onFocus={e => clearErrors(e)}
                      onBlur={e => onBlur(e)}
                    />
                  </div>

                  <div
                    className={`contact-form-item 
                  ${formState.messageError ? "has-error" : ""}
                  ${formState.hasFocus === "message" ? "has-focus" : ""}
                  `}
                  >
                    <label htmlFor="message">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      placeholder="How can I be of help?"
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
            formState.
            {formState.formSuccess && (
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
            {formState.formFail && (
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
