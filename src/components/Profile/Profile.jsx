import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar, Button,
    Card, CardContent,
    Input,
    makeStyles, TextField,
    Typography
} from "@material-ui/core";
import ProfileStatus from "./ProfileInfo/ProfileStatus";
import avatar from "../../assets/img/ava.jpg";
import Preloader from "../common/Preloader/Preloader";
import Contact from "./ProfileInfo/Contact/Contact";
import TextFieldsForm from "../common/FormsUI/MaterialUIForms/TextField/TextFieldsForm";


const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
    },
    cover: {
        position: "relative",
        height: theme.spacing(32),
    },
    coverImg: {
        width: "100%",
        height: theme.spacing(24),
        objectFit: "cover",

    },
    avatar: {
        width: theme.spacing(18),
        height: theme.spacing(18),
        borderRadius: "50%",
        objectFit: "cover",
        position: "absolute",
        left: 0,
        right: 0,
        margin: 'auto',
        top: theme.spacing(14),
        border: '3px solid white'
    },
    about: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    profileInfoName: {},
    profileInfoDeck: {}
}))


const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.cover}>
                <img className={classes.coverImg}
                     src='https://images.unsplash.com/photo-1612729875065-1385f02852ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1324&q=80'
                     alt=''/>
                <img className={classes.avatar}
                     src={props.profile.photos.large || avatar}
                />


            </div>
            <div className={classes.about}>
                <Typography variant='h4' className={classes.profileInfoName}>
                    {props.profile.fullName}
                </Typography>
                <Typography variant='span' className={classes.profileInfoDeck}>
                    <ProfileStatus {...props}/>
                </Typography>
            </div>

            <ProfileInfo {...props} classes={classes}/>

            {/*<MyPostsContainer/>*/}
        </div>

    )
}

export default Profile
