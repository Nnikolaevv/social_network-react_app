import React from "react";
import {Container, makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10)
    },
}))

const Rightbar = (props) => {
    const classes= useStyles()
    return (
        <Container className={classes.container}>
            RIGHTBAR
        </Container>
    );
};

export default Rightbar
