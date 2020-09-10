import React from "react";
import classes from "./Setting.module.css";
import Header from "../Header/Header";
import SettingButton  from '../Buttons/SettingButton'



import {  useLocation, Outlet } from "react-router";

const Setting = () => {
  let pathname = useLocation()
  console.log(pathname)

  return (
    <div className={classes.wrapper}>
      <Header page={"Change Password"} />
      <div className={classes.mainArea}>
          <div className={classes.buttonRow}>
            <SettingButton title={'Change Password'} link={'setting'}/>
            <SettingButton title={'Change Username'} link={'setting/change-username'}/>
            <SettingButton title={'System Setting'} link={'setting/system-setting'}/>
            <SettingButton title={'Email Templates'} link={'setting/email-template'}/>
            <SettingButton title={'Manage FAQ'} link={'setting/manage-faq'}/>
          </div>
          

         <Outlet/>
      </div>
    </div>
  );
};

export default Setting;
