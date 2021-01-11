import React from "react"
import { useEffect, useRef, useContext } from "react"
import NavigationContext from "../../contexts/NavigationContext"
import "./MobileMenuOpenButton.scss"

const MobileMenuOpenButton = () => {
  const { isNavActive, onNavActiveChange } = useContext(NavigationContext)
  const buttonRef = useRef()

  useEffect(() => {
    if (!isNavActive) {
      buttonRef.current.focus()
    }
  }, [isNavActive])

  return (
    <button
      className="drawer-toggle"
      onClick={() => onActiveChange()}
      ref={buttonRef}
    >
      {/* TODO: <span class="sr-only">Open</span>*/}
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  )
}

export default MobileMenuOpenButton
