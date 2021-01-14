import React from "react"
import PropTypes from "prop-types"
import "./Button.scss"

const Button = ({ variant, children }) => (
  <button className={`button ${variant}`}>{children}</button>
)

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default Button
