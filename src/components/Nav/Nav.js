import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav-div'>
         <Link to='/home'>Home</Link>   
         <Link to='/add-event'>Add Event</Link>   
          
        </div>
    );
};

export default Nav;