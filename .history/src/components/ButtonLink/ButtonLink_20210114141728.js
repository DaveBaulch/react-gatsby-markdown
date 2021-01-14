import React from "react"
import PropTypes from "prop-types"
import "./ButtonLink.scss"

const ButtonLink = ({ variant, href, children }) => (
  <a href={href} className={`button ${variant}`}>
    {children}
  </a>
)

Button.propTypes = {
  variant: PropTypes.string,
  const ButtonLink = ({ variant, href, children }) => (
: PropTypes.string,
  children: PropTypes.any.isRequired,
}

export default ButtonLink
