import React from "react"
import PropTypes from "prop-types"
import "./ButtonLink.scss"

const ButtonLink = ({ variant, href, children }) => (
  <a href={href} className={`button ${variant}`}>
    {children}
  </a>
)

export default ButtonLink
