import React from 'react';
import './MobileMenu.scss';

const Button = ({ variant, children }) => (
  <button className={`button ${variant}`}>{children}</button>
);

export default Button;
