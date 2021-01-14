import React from "react"
import { useRef, useContext } from "react"
import PropTypes from "prop-types"
import ContactContext from "../../contexts/ContactContext"
import "./CloseContactButton.scss"

const CloseContactButton = ({ children }) => {
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

CloseContactButton.propTypes = {
  children: PropTypes.node,
}

export default CloseContactButton
