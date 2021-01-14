import React from "react"
import PropTypes from "prop-types"
import "./Button.scss"

const Button = ({ variant, children }) => (
  <button className={`button ${variant}`}>{children}</button>
)

OpenContactButton.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Button
