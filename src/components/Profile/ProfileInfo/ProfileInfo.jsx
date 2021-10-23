import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMore from '@material-ui/icons/ExpandMore'


const ProfileInfo = (props) => {
    const classes = props.classes
    const [editMode, setEditMode] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const onClickEdit = () => {
        setEditMode(!editMode)
    }

    const editProfileInfoSave = (data) => {
        props.saveProfile(data)
            .then(() => setEditMode(false))

    }

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.profileInfoContainer}>

            <div className={classes.profileAccordion}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>User info</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {!editMode ? <ProfileData profile={props.profile}
                                                      onClickEdit={onClickEdit}
                                                      isOwner={props.isOwner}
                                                      classes={props.classes}/>
                                : <ProfileDataForm profile={props.profile}
                                                   editProfileInfoSave={editProfileInfoSave}
                                                   initialValues={props.profile}
                                                   onPhotoSelected={onPhotoSelected}
                                                   onCkickEdit={onClickEdit}
                                                   editMode={editMode}
                                                   isOwner={props.isOwner}
                                />
                            }
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>



        </div>
    )
}


export default ProfileInfo
