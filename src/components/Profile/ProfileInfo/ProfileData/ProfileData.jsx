import React from "react";
import Contact from "../Contact/Contact";
import {Button, Card, CardContent, Typography} from "@material-ui/core";

const ProfileData = (props) => {
    const classes = props.classes
    return (
        <div>
            <Card >
                <CardContent className={classes.profileInfoCard}>
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
            </Card>
            <Card>
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
            </Card>

            <Button variant="contained"
                    color="primary"
                    onClick={props.onClickEdit}>{!props.editMode && 'Edit' }</Button>
        </div>

    )
}

export default ProfileData;