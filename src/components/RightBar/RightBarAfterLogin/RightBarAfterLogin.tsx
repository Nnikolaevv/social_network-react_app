import React, {FC} from "react";
import {Avatar, Divider, ImageList, ImageListItem, Link, makeStyles, Typography} from "@material-ui/core";
import {AvatarGroup} from "@material-ui/lab";
import {useHistory} from "react-router-dom";
import {ClassNameMap} from "@mui/material";

type PropsType = {
    classes: ClassNameMap
}

const RightBarAfterLogin: FC<PropsType> = ({classes}) => {

    let history = useHistory();


    const toGallery = () => {
        history.push('/gallery')
    }

    return (
        <React.Fragment>
            <Typography className={classes.title}
                        gutterBottom>
                Online Friends
            </Typography>
            <AvatarGroup max={5} style={{marginBottom: 20}}>
                <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg"/>
                <Avatar alt="Travis Howard" src="https://v4.mui.com/static/images/avatar/2.jpg"/>
                <Avatar alt="Cindy Baker" src="https://v4.mui.com/static/images/avatar/3.jpg"/>
                <Avatar alt="Agnes Walker" src="https://v4.mui.com/static/images/avatar/4.jpg"/>
                <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/5.jpg"/>
                <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/6.jpg"/>
                <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/7.jpg"/>
                <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/8.jpg"/>
            </AvatarGroup>
            <Typography className={classes.title}
                        gutterBottom
                        // onClick={toGallery}
            >
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
            <Typography className={classes.title}
                        gutterBottom>
                Categories
            </Typography>
            <Link href="#" className={classes.link} variant={"body2"}>
                Sport
            </Link>
            <Link href="#" className={classes.link} variant={"body2"}>
                Food
            </Link>
            <Link href="#" className={classes.link} variant={"body2"}>
                Music
            </Link>
            <Divider flexItem style={{marginBottom: 5}}/>
            <Link href="#" className={classes.link} variant={"body2"}>
                Movies
            </Link>
            <Link href="#" className={classes.link} variant={"body2"}>
                Science
            </Link>
            <Link href="#" className={classes.link} variant={"body2"}>
                Life
            </Link>
        </React.Fragment>
    );
};

export default RightBarAfterLogin
