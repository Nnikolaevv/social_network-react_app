import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Container, LinearProgress} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(2),
        }
    },
}))


const Preloader = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <LinearProgress />
        </Container>

    )
}

export default Preloader;