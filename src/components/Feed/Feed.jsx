import React from "react";
import {Container, makeStyles} from "@material-ui/core";

import FeedPost from "./FeedPost/FeedPost";


const useStyles = makeStyles(theme => ({

}))

const Feed = (props) => {
    const classes = useStyles()
    return (
        <Container>
            <FeedPost/>
            <FeedPost/>
        </Container>
    );
};

export default Feed
