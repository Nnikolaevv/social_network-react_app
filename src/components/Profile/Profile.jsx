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
    makeStyles,
    Typography
} from "@material-ui/core";
import ProfileStatusWithHooks from "./ProfileInfo/ProfileStatusWithHooks";
import avatar from "../../assets/img/ava.jpg";
import Preloader from "../common/Preloader/Preloader";
import Contact from "./ProfileInfo/Contact/Contact";


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
    profileInfo: {
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
                {/*{props.isOwner && <Input type={'file'} onChange={onPhotoSelected} />}*/}

            </div>
            <div className={classes.profileInfo}>
                <Typography variant='h4' className={classes.profileInfoName}>
                    {props.profile.fullName}
                </Typography>
                <Typography variant='span' className={classes.profileInfoDeck}>
                    <ProfileStatusWithHooks {...props}/>
                </Typography>
            </div>

            <Card className={classes.about}>
                <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        <b>Full name</b> : {props.profile.fullName}
                    </Typography>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        <b>Looking for a job</b> : {props.profile.lookingForAJob ? 'yes' : 'no'}
                    </Typography>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        <b>About me</b>: {props.profile.aboutMe}
                    </Typography>

                </CardContent>
                <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                        return  <Contact key={key}
                                         contactTitle={key}
                                         contactValue={props.profile.contacts[key]}
                        />
                    })}
                    </Typography>
                </CardContent>

                {props.isOwner &&  <Button variant="contained" color="primary"onClick={props.onClickEdit}>Edit</Button>}

            </Card>
            {/**/}
            {/*<MyPostsContainer/>*/}
        </div>

    )
}

export default Profile
