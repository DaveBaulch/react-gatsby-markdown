import React from "react"
import { useRef, useContext } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./OpenContactButton.scss"
import PropTypes from "prop-types"

const OpenContactButton = ({ children }) => {
  const { isContactActive, onContactActiveChange } = useContext(ContactContext)
  const buttonRef = useRef()

  return (
    <button
      className="open-contact-button"
      onClick={() => onContactActiveChange()}
      aria-controls="contact"
      aria-expanded={isContactActive}
      ref={buttonRef}
    >
      {children}
    </button>
  )
}

const OpenContactButton = ({ children }) => {
.propTypes = {
  children: PropTypes.element.isRequired,
}

export default OpenContactButton
