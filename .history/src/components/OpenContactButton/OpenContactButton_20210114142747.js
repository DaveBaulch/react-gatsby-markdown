import React from "react"
import { useRef, useContext } from "react"
import PropTypes from "prop-types"
import ContactContext from "../../contexts/ContactContext"
import "./OpenContactButton.scss"

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

OpenContactButton.propTypes = {
  children: PropTypes.any,
}

export default OpenContactButton
