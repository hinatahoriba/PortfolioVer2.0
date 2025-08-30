import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><a href="https://wry-ping-a57.notion.site/About-Me-25fad5eb1fd6800f8742f9b49c736394" className="nav-link" target="_blank" rel="noopener noreferrer">About Me</a></li>
          <li><a href="https://wry-ping-a57.notion.site/1b4ad5eb1fd680d1b7a8fc848b5281cf?v=1b4ad5eb1fd68063ad61000c3ef3f758" className="nav-link" target="_blank" rel="noopener noreferrer">Work</a></li>
          <li><a href="https://wry-ping-a57.notion.site/BLOG-1b4ad5eb1fd680f3a8cde71703e46df6" className="nav-link" target="_blank" rel="noopener noreferrer">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;