import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import avatar from '../../../assets/img/ava.jpg'
import ProfileStatus from "./ProfileStatus";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataFormRedux from "./ProfileData/ProfileDataForm";
import {Button} from "@material-ui/core";
import ProfileDataForm from "./ProfileData/ProfileDataForm";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const [editMode, setEditMode] = useState(false);

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
    return (
        <div className='profileInfo'>
            <div className='descriptionBlock'>

                {!editMode ? <ProfileData profile={props.profile}
                                          onClickEdit={onClickEdit}
                                          isOwner={props.isOwner}
                                          classes={props.classes}/>
                          :  <ProfileDataForm profile={props.profile}
                                              onSubmit={editProfileInfoSave}
                                              initialValues={props.profile}
                                              onPhotoSelected={onPhotoSelected}/>
                }
                {props.isOwner &&
                <Button variant="contained"
                        color="primary"
                        onClick={onClickEdit}>{!editMode ? 'Edit' : 'Save'}</Button>}
            </div>
        </div>
    )
}



export default ProfileInfo