import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import avatar from '../../../assets/img/ava.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataFormRedux from "./ProfileData/ProfileDataForm";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const [editMode, setEditMode] = useState(false);

    const onClickEdit = () => {
        setEditMode(true)
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

                {editMode ? <ProfileDataFormRedux profile={props.profile}
                                                  onSubmit={editProfileInfoSave}
                                                  initialValues={props.profile}/>
                          : <ProfileData profile={props.profile}
                                         onClickEdit={onClickEdit}
                                         isOwner={props.isOwner}/>}

            </div>
        </div>
    )
}



export default ProfileInfo