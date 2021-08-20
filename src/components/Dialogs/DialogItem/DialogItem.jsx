import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <div className={s.dialog}>
            <div className={s.avatarBlock}>
                <img src={props.avatarImg} alt="img"/>
            </div>
            <div>
                <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem