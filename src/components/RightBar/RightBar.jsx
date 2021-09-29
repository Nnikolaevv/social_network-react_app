import React from "react";
import RightBarAfterLogin from "./RightBarAfterLogin/RightBarAfterLogin";
import RightBarBeforeLogin from "./RightBarBeforeLogin/RightBarBeforeLogin";
import {Container, makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh',
        paddingTop: theme.spacing(9),
        position: 'sticky',
        top: 0,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        borderLeft: '1px solid #ece7e7',
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
        color: '#555',
    },
    link: {
        marginRight: theme.spacing(2),
        color: '#555',
        fontSize: 16,
    }
}))

const RightBar = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            {props.isAuth
                ? <RightBarAfterLogin classes={classes} {...props}/>
                : <RightBarBeforeLogin classes={classes} {...props} />
            }
        </div>
    )

}

export default RightBar