import React from "react"
import PropTypes from "prop-types"
import "./SocialSharingItem.scss"

const SocialSharingItem = ({ href, children }) => (
  <a href={href} className="social-sharing-item">
    {children}
  </a>
)

WorkArticle.propTypes = {
  edge: PropTypes.object.isRequired,
}

export default SocialSharingItem
