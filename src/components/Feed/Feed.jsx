import React from "react";
import {Container, makeStyles} from "@material-ui/core";
import FeedPost from "./FeedPost/FeedPost";



const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(3)
    }
}))

const Feed = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <FeedPost/>
            <FeedPost/>
        </div>
    );
};

export default Feed
