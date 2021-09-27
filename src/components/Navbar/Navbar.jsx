import React from "react";
import {Container, makeStyles, Typography} from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import {useHistory} from "react-router-dom";
import Message from "@material-ui/icons/Message";
import PeopleIcon from '@material-ui/icons/People';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';


const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh',
        position: 'sticky',
        top: 0,
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up('sm')]: {
            backgroundColor: 'white',
            color: '#555',
            borderRight: '1px solid #ece7e7'
        }
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        }
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            fontSize: '18px'
        }
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    }

}))

const NavBar = (props) => {
    let history = useHistory()

    const toProfile = () => {
        history.push('/profile')
    }
    const toDialogs = () => {
        history.push('/dialogs')
    }
    const toUsers = () => {
        history.push('/users')
    }

    const toFeed = () => {
        history.push('/feed')
    }

    const classes= useStyles()
    return (
        <Container className={classes.container}>
            <div className={classes.item} onClick={toProfile}>
                <Home className={classes.icon}/>
                <Typography className={classes.text} >
                    Profile
                </Typography>
            </div>
            <div className={classes.item} onClick={toDialogs}>
                <Message className={classes.icon}/>
                <Typography className={classes.text} >
                    Dialogs
                </Typography>
            </div>
            <div className={classes.item} onClick={toUsers}>
                <PeopleIcon className={classes.icon}/>
                <Typography className={classes.text} >
                    Users
                </Typography>
            </div>
            <div className={classes.item}onClick={toFeed}>
                <DynamicFeedIcon className={classes.icon}/>
                <Typography className={classes.text} >
                    Feed
                </Typography>
            </div>

        </Container>
    );
};

export default NavBar

