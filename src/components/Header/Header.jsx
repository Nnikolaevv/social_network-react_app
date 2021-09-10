import React from "react";
import './Header.module.css';
import {NavLink} from "react-router-dom";
import HeaderLoginInfo from "./HeaderLoginInfo";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

const Header = (props) => {
    return (
        <header className='header'>
           <HeaderLogo />
            <div className='loginBlock'>
                {props.isAuth ? <HeaderLoginInfo {...props} /> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header
