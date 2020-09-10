import React from "react";
import Header from '../Header/Header'
import classes from "./Referrals.module.css";

const Referrals = () => {
  return (
    <div className={classes.wrapper}>
      <Header page={"Referrals"} />
      <div className={classes.mainArea}>
        <div className={classes.apply}>
          <div className={classes.refBox}>
            <div className={classes.title}>Referrals (Invite friends and earn redeemable reward points.)</div>
            
            <div className={classes.innerBox}>
                <div className={classes.boxes}>
                    <div className={classes.innerBoxes}>Get your referral link for web</div>
                    <div className={classes.innerBoxes}>Get your referral link for web</div>
                </div>
            
                <div className={classes.findRef} >YOU CAN FIND YOUR REFERRALS BELOW</div>
              <div className={classes.referralBox}>
                  <h1>Referrals</h1>
                  <h1>1</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
