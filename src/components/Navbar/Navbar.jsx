import React from "react";
import './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBarFriendsContainer from "../sideBar/sideBarFriendsContainer";


const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='item' >
        <NavLink to={"/profile"} activeClassName='activeLink'>Profile</NavLink>
      </div>
      <div className='item'>
        <NavLink to={"/dialogs"} activeClassName='activeLink'>Messages</NavLink>
      </div>
        <div className='item'>
            <NavLink to={"/users"} activeClassName='activeLink'>Users</NavLink>
        </div>
      <div className='item'>
        <NavLink to={'/news'} activeClassName='activeLink'>News</NavLink>
      </div>
      <div className='item'>
        <NavLink to={'/music'} activeClassName='activeLink'>Music</NavLink>
      </div>
      <div className='item'>
        <NavLink to={'/settings'} activeClassName='activeLink'>Settings</NavLink>
      </div>
        <SideBarFriendsContainer />
    </nav>
  )
}

export default Navbar
