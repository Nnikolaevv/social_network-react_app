import React from "react";
import './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import avatar from '../../../assets/img/ava.jpg'
import ProfileStatus from "./ProfileStatus";


function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }

  return (
    <div className='profileInfo'>
      {/*<div>*/}
      {/*  <img src="https://via.placeholder.com/1000x150"/>*/}
      {/*</div>*/}
      <div className='descriptionBlock'>
          <div><img src={props.profile.photos.large || avatar } alt=""/></div>
          <div><ProfileStatus {...props} /></div>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo