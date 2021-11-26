import React, {ChangeEvent, FC, useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";
import ExpandMore from '@material-ui/icons/ExpandMore'
import {ClassNameMap} from "@mui/material";
import {ProfileType} from "../../../types/types";

type PropsType = {
    classes: ClassNameMap
    saveProfile: (data: Object) => Promise<any>
    profile: ProfileType
    initialValues: ProfileType
    isOwner: boolean
    savePhoto: (file: File) => void
}

const ProfileInfo: FC<PropsType> = ({classes, saveProfile, profile, isOwner, savePhoto}) => {

    const [editMode, setEditMode] = useState(false);
    const [expanded, setExpanded] = useState('false');

    const onClickEdit = () => {
        setEditMode(!editMode)
    }

    const editProfileInfoSave = (data: object) => {
        // todo: remove then
        saveProfile(data)
            .then(() => setEditMode(false))
    }

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : false);
    }

    if (!profile) {
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
                            {!editMode ? <ProfileData profile={profile}
                                                      onClickEdit={onClickEdit}
                                                      classes={classes}
                                                      editMode={editMode}
                                />
                                : <ProfileDataForm profile={profile}
                                                   editProfileInfoSave={editProfileInfoSave}
                                                   initialValues={profile}
                                                   onPhotoSelected={onPhotoSelected}
                                                   editMode={editMode}
                                                   isOwner={isOwner}
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
