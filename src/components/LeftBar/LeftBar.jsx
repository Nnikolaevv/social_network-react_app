import React from "react";
import {alpha, Container, makeStyles, Typography} from "@material-ui/core";
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
        paddingTop: theme.spacing(9),
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up('sm')]: {
            backgroundColor: 'white',
            color: '#555',
            borderRight: '1px solid #ece7e7'
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: theme.spacing(8),
        },
    },
    item: {
        display: "flex",
        width: '100%',
        height: theme.spacing(4),
        paddingLeft: theme.spacing(3),
        justifyContent: 'left',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(2),
            cursor: "pointer",
        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: "center",
            paddingLeft: theme.spacing(0),
            marginBottom: theme.spacing(3),
        },
        '&:hover': {
            color: alpha(theme.palette.primary.main, 0.75),
            marginLeft: theme.spacing(1),
        }
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            '&:hover': {
                color: alpha(theme.palette.background.default, 0.75),
                marginLeft: theme.spacing(1),
            }
        },
    },
    text: {
        fontWeight: 500,
        fontSize: '18px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    }
}))

const LeftBar = (props) => {

    const classes = useStyles();

    let history = useHistory();

    const toProfile = () => {
        history.push('/profile')
    };

    const toDialogs = () => {
        history.push('/dialogs')
    };

    const toUsers = () => {
        history.push('/users')
    };

    const toFeed = () => {
        history.push('/feed')
    }


    return (
        <div className={classes.container}>
            <div className={classes.item}
                 onClick={toProfile}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Profile
                </Typography>
            </div>
            <div className={classes.item}
                 onClick={toDialogs}>
                <Message className={classes.icon}/>
                <Typography className={classes.text}>Dialogs
                </Typography>
            </div>
            <div className={classes.item}
                 onClick={toUsers}>
                <PeopleIcon className={classes.icon}/>
                <Typography className={classes.text}>Users
                </Typography>
            </div>
            <div className={classes.item}
                 onClick={toFeed}>
                <DynamicFeedIcon className={classes.icon}/>
                <Typography className={classes.text}>Feed
                </Typography>
            </div>
        </div>

    );
};


export default LeftBar

