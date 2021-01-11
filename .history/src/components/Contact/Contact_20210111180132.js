import React from "react"
import "./Contact.scss"
import { useContext } from "react"
import ContactContext from "../../contexts/ContactContext"

const Contact = () => {
  const { isContactActive, onContactActiveChange } = useContext(ContactContext)

  return {
    {
    isContactActive && 
      
  }
  } 
}
export default Contact
