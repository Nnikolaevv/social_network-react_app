import React, {useState} from "react";
import {alpha, AppBar, makeStyles, Toolbar} from "@material-ui/core";
import HeaderLoginScreen from "./HeaderLogin/HeaderLoginScreen";
import HeaderLogoutScreen from "./HeaderLogout/HeaderLogoutScreen";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

const useStyles = makeStyles(theme => ({
    toolBar: {
        display: "flex",
        justifyContent: "space-between"
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            display: (props) => (props.open ? 'flex' : 'none'),
            width: '70%',
        },
    },
    searchIcons: {
        padding: theme.spacing(0, 2),
        height: '100%',
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    input: {
        color: 'white',
    },
    cancel: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    icons: {
        alignItems: "center",
        display: (props) => props.open ? 'none' : 'flex',
    },
    budge: {
        marginRight: theme.spacing(2),
    },
}))

const Header = (props) => {
    const [open, setOpen] = useState(false)

    const classes = useStyles({open});

    const onSetOpenClick = (value) => {
        setOpen(value)
    }

    return (
        <AppBar position={"fixed"}>
            <Toolbar className={classes.toolBar}>
                <HeaderLogo classes={classes} />
                <HeaderSearch classes={classes} onSetOpenClick={onSetOpenClick}/>
                {props.isAuth
                    ? <HeaderLoginScreen
                                    classes={classes}
                                    onSetOpenClick={onSetOpenClick}
                                    logout={props.logout}
                                    avatar={props.photos}/>
                    : <HeaderLogoutScreen />
                }
            </Toolbar>

        </AppBar>
    );
};

export default Header

