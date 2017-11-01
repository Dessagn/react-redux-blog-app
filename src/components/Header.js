import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <nav>
        <ul className="container">
          <li><NavLink className="btn btn-custom" exact to='/'>Home</NavLink></li>
          <li><NavLink className="btn btn-custom" to='/about'>About</NavLink></li>
          <li><NavLink className="btn btn-custom" to='/post-detail'>Post Details</NavLink></li>
          <li><NavLink className="btn btn-custom" to='/new-post'>New Post</NavLink></li>
        </ul>
      </nav>
    );
}

export default Header;