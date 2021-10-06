import React, {useState} from "react";
import {alpha, AppBar, Container, makeStyles, Toolbar} from "@material-ui/core";
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
        width: '60%',
        [theme.breakpoints.down('xs')]: {
            display: (props) => (props.open ? 'flex' : 'none'),
            justifyContent: 'space-between',
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
        right: theme.spacing(1),
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
        '&:hover': {
            marginBottom: theme.spacing(1)
        },
    },
    avatar: {
        '&:hover': {
            marginBottom: theme.spacing(1),
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        }
    }
}))

const Header = (props) => {
    const [open, setOpen] = useState(false)

    const classes = useStyles({open});

    const onSetOpenClick = (value) => {
        setOpen(value)
    }

    return (
            <AppBar position={"fixed"}>
                <Container style={{padding: 0}}>
                    <Toolbar className={classes.toolBar}>
                        <HeaderLogo classes={classes} />
                        <HeaderSearch classes={classes} onSetOpenClick={onSetOpenClick}/>
                        {props.isAuth
                            ? <HeaderLoginScreen
                                classes={classes}
                                onSetOpenClick={onSetOpenClick}
                                logout={props.logout}
                                ava={props.ava}/>
                            : <HeaderLogoutScreen />
                        }
                    </Toolbar>
                </Container>
            </AppBar>
    );
};

export default Header

