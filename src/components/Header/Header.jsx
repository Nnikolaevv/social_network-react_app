import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
       <div>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5vFX9tv64JjrobsjPi_62hz5WBWU0FXjfA&usqp=CAU" alt=""/>
       </div>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
  )
};

export default Header
