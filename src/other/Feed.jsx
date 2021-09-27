import React from "react";
import {Container, makeStyles} from "@material-ui/core";
import Postt from "./Post";


const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(10)
    },
}))

const Feed = (props) => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Postt/>
            <Postt/>
            <Postt/>
            <Postt/>
            <Postt/>
            <Postt/>
        </Container>
    );
};

export default Feed
