import React from "react";
import classes from './Button.module.css'

import {useNavigate} from 'react-router-dom'

const Button = ({ icon, text, link }) => {
  const navigate = useNavigate()
  const handelClick = ()=>{
    navigate(`/${link}`)
} 
  return (
    <div onClick={handelClick} className={classes.icon1}>
      <div className={classes.icon}>
        <i className={`fa ${icon}`} aria-hidden="true"></i>
        {text}
      </div>
    </div>
  );
};

const ActionButtons = () => {


  return (
    <div className={classes.actions}>
      <div className={classes.row}>
        <Button icon={"fa-th"} text={"DashBoard"} link={''} />
        <Button icon={"fa-file-o"} text={" Apply For Loan"} link={'apply-for-loan'} />
      </div>
      <div className={classes.row}>
      <Button icon={"fa-location-arrow"} text={"Referral"} link={'referral'} />
      <Button icon={"fa-briefcase"} text={"My Loans"} link={'my-loan'} />
      
        
      </div>
    </div>
  );
};

export default ActionButtons;
