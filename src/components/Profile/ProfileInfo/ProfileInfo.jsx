import React from "react";
import './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import avatar from '../../../assets/img/ava.jpg'
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }

  return (
    <div className='profileInfo'>
      <div className='descriptionBlock'>
          <div><img src={props.profile.photos.large || avatar } alt=""/></div>
          <div><ProfileStatusWithHooks {...props} /></div>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo