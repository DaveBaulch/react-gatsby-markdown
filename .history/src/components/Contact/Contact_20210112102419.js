import { React, useContext } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./Contact.scss"

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)

  return (
    <div
    id="contact"
    ref="contactPage"
    :class="{ visible: showContact }"
    class="contact-wrapper"
    aria-label="Contact Form"
    aria-expanded="false"
    aria-hidden="true"
  >
    <button
      id="close-button"
      ref="closeContactButton"
      type="button"
      class="button close-button js-contact-focussable"
      tabindex="-1"
      aria-controls="contact"
      aria-expanded="false"
      @click="closeContact"
    >
      <span class="sr-only">
        Close
      </span>
    </button>

    <div class="contact-inner">
      <div class="left-col">
        <h1>It would be great to hear from you!</h1>
        <p>Please send me a message if I can be of help in any way, or you'd just like to chat...</p>
      </div>

      <div class="right-col">
        <div class="contact-block" :class="{ hidden: formSubmitted }">
          <form
            name="contact"
            action="/"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            class="contact-form"
            @submit.prevent="checkForm"
          >
            <input type="hidden" name="form-name" value="contact">
            <div ref="name-wrapper" class="form-item" :class="{ hasError: formEntered && !nameValid }">
              <label for="name">Name*</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                name="name"
                placeholder="Your name"
                class="js-contact-focussable"
                tabindex="-1"
                @focus="onFocus"
                @blur="onBlur"
              >
              <span class="error">Please add your name</span>
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
              <span class="error">Please add a valid email address</span>
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

            <div ref="message-wrapper" class="form-item" :class="{ hasError: formEntered && !messageValid }">
              <label for="message">Message*</label>
              <textarea
                id="message"
                v-model="form.message"
                name="message"
                placeholder="How can I be of help?"
                class="js-contact-focussable"
                tabindex="-1"
                @focus="onFocus"
                @blur="onBlur"
              />
              <span class="error">Please add your message</span>
            </div>

            <input type="submit" value="Send" class="button form-button js-contact-focussable" tabindex="-1">
          </form>
        </div>

        <div class="success-block" :class="{ visible: formSuccess }">
          <h2>Thank you!</h2>
          <p>Thanks for getting in touch - if you have any further questions please email: <a href="mailto: davebaulch@yahoo.co.uk">davebaulch@yahoo.co.uk</a></p>
        </div>

        <div class="error-block" :class="{ visible: formError }">
          <h2>Oh no!</h2>
          <p>It looks like something went wrong - please email me directly at: <a href="mailto: davebaulch@yahoo.co.uk">davebaulch@yahoo.co.uk</a></p>
        </div>
      </div>
    </div>
  </div>
  )

}
export default Contact
