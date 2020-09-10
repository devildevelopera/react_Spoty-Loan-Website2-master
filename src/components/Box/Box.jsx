import React from "react";
import classes from "./Box.module.css";

const Box = ({ img, background, title, info }) => {
  return (
    <div style={{ backgroundColor: `${background}` }} className={classes.box}>
      <div className={classes.boxTitle}>{title}</div>
      <div className={classes.boxIcon}>
        <img className={classes.img} src={img} alt="loan-img" />
      </div>
     <span>{info}</span>

    </div>
  );
};

export default Box;
