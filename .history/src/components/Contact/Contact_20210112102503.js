import { React, useContext } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./Contact.scss"

const Contact = () => {
  const { isContactActive } = useContext(ContactContext)

  return (
    <div
    id="contact"
    class="contact-wrapper"
    aria-label="Contact Form"
    aria-expanded="false"
    aria-hidden="true"
  >

    <div class="contact-inner">
      <div class="left-col">
        <h1>It would be great to hear from you!</h1>
        <p>Please send me a message if I can be of help in any way, or you'd just like to chat...</p>
      </div>

      <div class="right-col">
        <div class="contact-block">
          
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
