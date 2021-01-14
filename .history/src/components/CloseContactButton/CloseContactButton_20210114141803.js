import React from "react"
import { useRef, useContext } from "react"
import PropTypes from "prop-types"
import ContactContext from "../../contexts/ContactContext"
import "./CloseContactButton.scss"

const OpenContactButton = ({ children }) => {
  const { isContactActive, onContactActiveChange } = useContext(ContactContext)
  const buttonRef = useRef()

  return (
    <button
      className="close-contact-button"
      onClick={() => onContactActiveChange()}
      aria-controls="contact"
      aria-expanded={isContactActive}
      ref={buttonRef}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
}

export default OpenContactButton
