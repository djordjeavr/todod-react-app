import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './App.css';


function Navbar(){
    return (
<div className='navbar'>
    <ul>
        <Link to='/'>
        <li>Home</li>
        </Link>
        <Link to="/todo">
        <li >Todo</li>
        </Link>
    </ul>
</div>

      );
  }


export default Navbar;
