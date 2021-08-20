import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBarFriends from "../sideBar/sideBarFriends";


const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item} >
        <NavLink to={"/profile"} activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={"/dialogs"} activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink>
      </div>
        <SideBarFriends sideBarFriendsState={props.state.sideBar.friends} />
    </nav>
  )
}

export default Navbar
