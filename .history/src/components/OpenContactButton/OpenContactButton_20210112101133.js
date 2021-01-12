import React from "react"
import { useEffect, useRef, useContext } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./OpenContactButton.scss"

const OpenContactButton = () => {
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
    </button>
  )
}

export default OpenContactButton
