import React from "react"
import { useEffect, useRef, useContext } from "react"
import ContactContext from "../../contexts/ContactContext"
import "./OpenContactButton.scss"

const OpenContactButton = () => {
  const { isContactActive, onContactActiveChange } = useContext(ContactContext)
  const buttonRef = useRef()

  useEffect(() => {
    if (isNavActive) {
      buttonRef.current.focus()
    }
  }, [isNavActive])

  return (
    <button
      className="drawer-close"
      onClick={() => onNavActiveChange()}
      ref={buttonRef}
    >
      {/*TODO: <span className="sr-only">Close</span>*/}
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  )
}

export default OpenContactButton
