import React from "react"
import "./HeaderProfile.scss"
import profileImage from "../../images/dave_250.jpg"

const HeaderProfile = () => (
  <>
    <img src={profileImage} className="photo" alt="Dave Baulch" />

    <h2 className="profile-name">
      <span className="profile-name__name">Dave Baulch</span>
      <span className="profile-name__title">Front-End Developer</span>
    </h2>
  </>
)

export default HeaderProfile
