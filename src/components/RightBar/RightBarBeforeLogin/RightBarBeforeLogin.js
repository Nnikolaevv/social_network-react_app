import React from "react";
import {Container, makeStyles, } from "@material-ui/core";



const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10),
        position: 'sticky',
        top: 0,
    },
}))

const RightBarBeforeLogin = (props) => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
           BeforeLogin
        </Container>
    );
};

export default RightBarBeforeLogin
