import React from "react";
import classes from "./Button.module.css";
const FormButton = ({ title, type }) => {
    
    return (
    <div className={classes.buttons}>
      <button  type={`${type}`} className={classes.btn}>
        {title}
      </button>
    </div>
  );
};

export const CuFormButton = ({width, title, type,bgColor }) => {
    
  return (
  <div  className={classes.buttons}>
    <button style={{background:`#${bgColor}`,width:`${width}`}}  type={`${type}`} className={classes.btn}>
      {title}
    </button>
  </div>
);
};

export default FormButton;
