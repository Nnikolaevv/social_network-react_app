import React, {useState} from "react";
import './ProfileInfo.module.css'
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
                <div>
                    <img src={props.profile.photos.large || avatar} alt="ava"/>
                    {props.isOwner && <input type={'file'} onChange={onPhotoSelected}/>}
                </div>
                {editMode ? <ProfileDataFormRedux profile={props.profile}
                                                  onSubmit={editProfileInfoSave}
                                                  initialValues={props.profile}

                    />
                          : <ProfileData profile={props.profile}
                                         onClickEdit={onClickEdit}
                                         isOwner={props.isOwner}/>}
                <div>
                    <ProfileStatusWithHooks {...props} />
                </div>

            </div>
        </div>
    )
}



export default ProfileInfo