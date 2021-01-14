import React from "react"
import SocialSharingItem from "../SocialSharingItem"
import "./SocialSharing.scss"
import twitterIcon from "../../images/icon-twitter.svg"
import linkedinIcon from "../../images/icon-linkedin.svg"
import facebookIcon from "../../images/icon-facebook.svg"

const SocialSharing = () => (
  <div className="social-links-wrapper">
    <ul className="social-links">
      <li className="social-links__item">
        <SocialSharingItem href={`http://www.twitter.com`}>
          <img src={twitterIcon} width="20" height="16" alt="Twitter" />
          <span className="social-sharing-text">Twitter</span>
        </SocialSharingItem>
      </li>
      <li className="social-links__item">
        <SocialSharingItem href={`http://www.linkedin.com`}>
          <img src={linkedinIcon} width="21" height="21" alt="LinkedIn" />
          <span className="social-sharing-text">LinkedIn</span>
        </SocialSharingItem>
      </li>
      <li className="social-links__item">
        <SocialSharingItem href={`http://www.facebook.com`}>
          <img src={facebookIcon} width="21" height="21" alt="Facebook" />
          <span className="social-sharing-text">Facebook</span>
        </SocialSharingItem>
      </li>
    </ul>
  </div>
)

export default SocialSharing
