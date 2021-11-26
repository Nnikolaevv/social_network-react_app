import React, {ChangeEvent, FC, useState} from "react";
import {Avatar, Badge, Menu, MenuItem} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Mail from "@material-ui/icons/Mail";
import Notifications from "@material-ui/icons/Notifications";
import {useHistory} from "react-router-dom";
import {ClassNameMap} from "@mui/material";
import {ProfileType} from "../../../types/types";

type PropsType = {
    classes: ClassNameMap
    onSetOpenClick: (arg0: boolean) => void
    logout: () => void
    ava: ProfileType
}
const HeaderLoginScreen: FC<PropsType> = ({classes, onSetOpenClick, logout, ava}) => {
    let history = useHistory()


    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e: any) => {
        setAnchorEl(e.currentTarget);
    };

    const setOpenClick = () => {
        onSetOpenClick(true)
    }

    const handleClose = () => {
        setAnchorEl(null);

    }

    const handleCloseProfile = () => {
        setAnchorEl(null);
        history.push('/profile')

    }

    const handleCloseLogout = () => {
        logout()
        setAnchorEl(null);
    };

    const toDialogs = () => {
        history.push('/dialogslist')
    }

    return (
        <div className={classes.icons}>
            <Search className={classes.searchButton} onClick={setOpenClick}/>
            <Badge badgeContent={4} color="secondary" className={classes.budge} onClick={toDialogs}>
                <Mail/>
            </Badge>
            <Badge badgeContent={2} color="secondary" className={classes.budge}>
                <Notifications/>
            </Badge>
            <Avatar className={classes.avatar}
                    alt="Remy Sharp"
                    src={ava && ava.photos.large}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
                <MenuItem onClick={handleCloseLogout}>Logout</MenuItem>
            </Menu>

        </div>
    )
}

export default HeaderLoginScreen;