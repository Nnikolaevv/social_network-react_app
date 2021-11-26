import React, {FC} from "react";
import Contact from "../Contact/Contact";
import {Button, Card, CardContent, Typography} from "@material-ui/core";
import {ContactsType, ProfileType} from "../../../../types/types";
import {ClassNameMap} from "@mui/material";

type PropsType = {
    classes: ClassNameMap
    profile: ProfileType
    onClickEdit: () => void
    editMode: boolean
}

const ProfileData: FC<PropsType> = ({classes, profile, onClickEdit,editMode}) => {

    return (
        <div>
            <Card >
                <CardContent className={classes.profileInfoCard}>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        <b>Full name</b> : {profile.fullName}
                    </Typography>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        <b>Looking for a job</b> : {profile.lookingForAJob ? 'no' : 'yes'}
                    </Typography>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        <b>About me</b>: {profile.aboutMe}
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        <b>Contacts</b>: {Object.keys(profile.contacts).map((key) => {
                        return  <Contact key={key}
                                         contactTitle={key}
                                         contactValue={profile.contacts[key as keyof ContactsType]}
                        />
                    })}
                    </Typography>
                </CardContent>
            </Card>
            <Button variant="contained"
                    color="primary"
                    onClick={onClickEdit}>
                {!editMode && 'Edit' }
            </Button>
        </div>

    )
}

export default ProfileData;