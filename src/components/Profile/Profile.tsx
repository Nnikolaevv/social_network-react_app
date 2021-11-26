import React, {ChangeEvent, FC} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {
    makeStyles,
    Typography
} from "@material-ui/core";
import ProfileStatus from "./ProfileInfo/ProfileStatus";
import avatar from "../../assets/img/ava.jpg";
import Preloader from "../common/Preloader/Preloader";
import Feed from "../Feed/Feed";
import {ProfileType} from "../../types/types";
import {ClassNameMap} from "@mui/material";


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
    profileInfoContainer: {
        alignItems: 'center',
        padding: theme.spacing(2)
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    profileAccordion: {
        paddingLeft: theme.spacing(2),
        width: theme.spacing(50)
    },
    profileInfoCard: {
        width: '100%',
    },
    profileInfoName: {},
    profileInfoDeck: {}
}))

type PropsType = {
    profile: ProfileType | null
    savePhoto: (file: File) => void
    status: string
    updateStatus: (status: string) => void
    saveProfile: (data: Object) => Promise<any>
    initialValues: ProfileType | null
    isOwner: boolean
}

const Profile: FC<PropsType> = ({profile, savePhoto, status, updateStatus, isOwner, saveProfile }) => {
    const classes = useStyles();

    if (!profile) {
        return <Preloader/>
    }

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.cover}>
                <img className={classes.coverImg}
                     src='https://images.unsplash.com/photo-1612729875065-1385f02852ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1324&q=80'
                     alt=''/>
                <img className={classes.avatar}
                     src={profile.photos.large || avatar}
                />
            </div>
            <div className={classes.about}>
                <Typography variant='h4' className={classes.profileInfoName}>
                    {profile.fullName}
                </Typography>
                <Typography variant='body1' className={classes.profileInfoDeck}>
                    <ProfileStatus status={status}
                                   updateStatus={updateStatus}
                    />
                </Typography>
            </div>
            <ProfileInfo  classes={classes}
                          saveProfile={saveProfile}
                          profile={profile}
                          isOwner={isOwner}
                          savePhoto={savePhoto}
                          initialValues={profile}
            />
            <Feed />
            {/*<MyPostsContainer/>*/}
        </div>
    )
}

export default Profile
