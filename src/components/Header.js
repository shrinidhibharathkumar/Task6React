import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src="/images/profile.jpg" alt="Profile" className="profile-image" />
      <h1>Shrinidhi B</h1>
      <p>Front-end Developer</p>
    </header>
  );
}

export default Header;
