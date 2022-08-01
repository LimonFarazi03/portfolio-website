import React from 'react';
import bgImage from '../assents/images/bg.jpg';
import logo from '../assents/images/logo.png';
import './CSS/NavigationBar.css';


const NavigationBar = () => {
  const elements = <>
    <li><a href="##">Home</a></li>
    <li><a href="##">About</a></li>
    <li><a href="##">Portfolio</a></li>
    <li><a href="##">Service</a></li>
    <li><a href="##">Blog</a></li>
    <li><a href="##">Contact</a></li>
    <button className="CVbtn">Download CV</button>
  </>
    
  
  return (
    <div>
      <div class="fixed navbar">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {elements}
      </ul>
    </div>
    <a class="logo btn btn-ghost normal-case text-xl">
      <img src={logo} alt="logo" />
    </a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {elements}
    </ul>
  </div>
</div>
    </div>
  );
};

export default NavigationBar;