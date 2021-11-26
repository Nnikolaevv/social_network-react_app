import React, {FC} from "react";
import "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    avatarImg: string
    id: number
    name: string
}


const DialogItem: FC<PropsType> = ({avatarImg, id, name}) => {
    return (
        <div className='dialog'>
            <div className='avatarBlock'>
                <img src={avatarImg} alt="img"/>
            </div>
            <div>
                <NavLink to={`/dialogs/${id}`} activeClassName='active'>{name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem