import React from "react";
import './Header.module.css';
import {NavLink} from "react-router-dom";
import HeaderLoginInfo from "./HeaderLoginInfo";

const Header = (props) => {
  return (
    <header className='header'>
       <div>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5vFX9tv64JjrobsjPi_62hz5WBWU0FXjfA&usqp=CAU" alt=""/>
       </div>

        <div className='loginBlock'>
            {props.isAuth ? <HeaderLoginInfo {...props} /> : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
  )
};

export default Header
