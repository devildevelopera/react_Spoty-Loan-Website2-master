import React from "react";

import profile from '../../images/profile.JPG'
import classes from "../ProfilePic/ProfilePic.module.css";
const ProfilePic = () => {
  return (
    <div className={classes.profilePic}>
      <img className={classes.profileImg} src={profile} alt="profile-pic" />
      <div className={classes.profileText}>
        <span>Your Profile Picture</span>
        <span>
          <a href="#">Upload/Change</a>
        </span>
      </div>
    </div>
  );
};

export default ProfilePic;
