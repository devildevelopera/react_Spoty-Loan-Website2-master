import React from "react";
import classes from './Button.module.css'
import { useNavigate } from "react-router-dom";
const SettingButton = ({ link, title }) => {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate(`/${link}`);
  };

  return (
    <div onClick={handelClick} className={classes.settingBtn}>
      {title}
    </div>
  );
};

export default SettingButton;
