import React, {useState} from "react";
import {Avatar, Badge, Button, Menu, MenuItem} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Mail from "@material-ui/icons/Mail";
import Notifications from "@material-ui/icons/Notifications";
import {useHistory} from "react-router-dom";


const HeaderLoginScreen = (props) => {
    let history = useHistory()

    const classes = props.classes

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const onSetOpenClick = () => {
        props.onSetOpenClick(true)
    }

    const handleClose = () => {
        setAnchorEl(null);

    }

    const handleCloseProfile = () => {
        setAnchorEl(null);
        history.push('/profile')

    }

    const handleCloseLogout = () => {
        props.logout()
        setAnchorEl(null);
    };

    const toDialogs = () => {
        history.push('/dialogslist')
    }


    return (
        <div className={classes.icons}>
            <Search className={classes.searchButton} onClick={onSetOpenClick}/>
            <Badge badgeContent={4} color="secondary" className={classes.budge} onClick={toDialogs}>
                <Mail/>
            </Badge>
            <Badge badgeContent={2} color="secondary" className={classes.budge}>
                <Notifications/>
            </Badge>
            <Avatar className={classes.avatar}
                    alt="Remy Sharp"
                    src={props.ava && props.ava.photos.large}
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