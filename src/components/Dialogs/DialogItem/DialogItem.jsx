import React from "react";
import "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <div className='dialog'>
            <div className='avatarBlock'>
                <img src={props.avatarImg} alt="img"/>
            </div>
            <div>
                <NavLink to={`/dialogs/${props.id}`} activeClassName='active'>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem