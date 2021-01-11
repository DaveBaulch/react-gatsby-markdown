import React from 'react';
import './MobileMenu.scss';

const MobileMenu = ({ variant, children }) => (
  <button className={`button ${variant}`}>{children}</button>
)

export default MobileMenu
