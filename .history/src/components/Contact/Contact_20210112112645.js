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
            <input type="hidden" name="form-name" value="contact">
            <div ref="name-wrapper" class="form-item">
              <label for="name">Name*</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                className="js-contact-focussable"
                tabindex="-1"
              >
              <span className="error">Please add your name</span>
            </div>

            <div ref="email-wrapper" class="form-item" :class="{ hasError: formEntered && !emailValid }">
              <label for="email">Email address*</label>
              <input
                id="email"
                v-model="form.email"
                type="text"
                name="email"
                placeholder="Your email"
                class="js-contact-focussable"
                tabindex="-1"
                @focus="onFocus"
                @blur="onBlur"
              >
              <span className="error">Please add a valid email address</span>
            </div>

            <div ref="phone-wrapper" class="form-item">
              <label for="phone">Phone number</label>
              <input
                id="phone"
                v-model="form.phone"
                type="text"
                name="phone"
                placeholder="Your phone number"
                class="js-contact-focussable"
                tabindex="-1"
                @focus="onFocus"
                @blur="onBlur"
              >
            </div>

            <div ref="message-wrapper" classNameclassName="form-item" :class="{ hasError: formEntered && !messageValid }">
              <label for="message">Message*</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I be of help?"
                tabindex="-1"
              />
              <span className="error">Please add your message</span>
            </div>

            <input type="submit" value="Send" class="button form-button js-contact-focussable" tabindex="-1">
          </form>            
          
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
