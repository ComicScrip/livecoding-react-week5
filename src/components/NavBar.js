import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar () {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Accueil</Link></li>
        <li><Link to='/students'>Students</Link></li>
      </ul>
    </nav>
  );
}
