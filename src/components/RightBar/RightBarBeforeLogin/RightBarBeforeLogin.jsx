import React from "react";
import {ImageList, ImageListItem, makeStyles, Typography,} from "@material-ui/core";


const RightBarBeforeLogin = (props) => {
    const classes = props.classes

    return (
        <React.Fragment>
            <Typography className={classes.title}
                        gutterBottom>
                Gallery
            </Typography>
            <ImageList rowHeight={100} style={{marginBottom: 20}} cols={2}>
                <ImageListItem>
                    <img src='https://v4.mui.com/static/images/image-list/breakfast.jpg' alt=''/>
                </ImageListItem>
                <ImageListItem>
                    <img src='https://v4.mui.com/static/images/image-list/burgers.jpg' alt=''/>
                </ImageListItem>
                <ImageListItem>
                    <img src='https://v4.mui.com/static/images/image-list/camera.jpg' alt=''/>
                </ImageListItem>
                <ImageListItem>
                    <img src='https://v4.mui.com/static/images/image-list/morning.jpg' alt=''/>
                </ImageListItem>
                <ImageListItem>
                    <img src='https://v4.mui.com/static/images/image-list/vegetables.jpg' alt=''/>
                </ImageListItem>
                <ImageListItem >
                    <img src='https://v4.mui.com/static/images/image-list/honey.jpg' alt='' />
                </ImageListItem>
            </ImageList>
        </React.Fragment>
    );
};

export default RightBarBeforeLogin
