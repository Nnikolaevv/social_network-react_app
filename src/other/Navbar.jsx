import React, {useState} from "react";
import {alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import Mail from "@material-ui/icons/Mail";
import Notifications from "@material-ui/icons/Notifications";
import Cancel from "@material-ui/icons/Cancel";



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
        [theme.breakpoints.down('sm')]: {
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

const Navbarr = (props) => {
    const [open, setOpen] = useState(false)

    const classes= useStyles({ open });


    return (
        <AppBar position={"fixed"}>
            <Toolbar className={classes.toolBar}>
                <Typography variant='h6' className={classes.logoLg}>
                    Social network
                </Typography>
                <Typography variant='h6' className={classes.logoSm}>
                    SN
                </Typography>
                <div className={classes.search}>
                    <Search className={classes.searchIcons}/>
                    <InputBase  className={classes.input}
                                placeholder="Search…"/>
                    <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchButton} onClick={() => setOpen(true)}/>
                    <Badge badgeContent={4} color="secondary" className={classes.budge}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.budge}>
                        <Notifications />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/6.jpg" />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbarr
