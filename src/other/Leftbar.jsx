import React from "react";
import {Container, makeStyles, Typography} from "@material-ui/core";
import Home from "@material-ui/icons/Home";


const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh',
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up('sm')]: {
           backgroundColor: 'white',
            color: '#555',
            border: '1px solid #ece7e7'
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
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }

}))

const Leftbar = (props) => {
    const classes= useStyles()
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Homepage</Typography>
            </div>
        </Container>
    );
};

export default Leftbar
