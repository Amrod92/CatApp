import React from 'react';
import { Link } from 'react-router-dom';
import Page404 from '../img/404.jpg';

const NotFound = () => (
  <div>
    <img src={Page404} alt='' />
    <h1>404 - Cat Not Found!</h1>
    <Link to='/'>Go Home</Link>
  </div>
);

export default NotFound;
