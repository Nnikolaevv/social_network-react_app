import React from "react";
import './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import avatar from '../../../assets/img/ava.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }


    }
  return (
    <div className='profileInfo'>
      <div className='descriptionBlock'>
          <div><img src={props.profile.photos.large || avatar } alt="ava"/></div>
          {props.isOwner && <input type={'file'} onChange={onPhotoSelected}/>}
          <div><ProfileStatusWithHooks {...props} /></div>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo