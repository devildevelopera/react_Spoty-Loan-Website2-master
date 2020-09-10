import React from "react";
import classes from "./ManageTestimonials.module.css";

const AddTestimonials = () => {
  return (
    <div className={classes.addTestimonials}>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <div>
          <input type="text" name="title" placeholder="Title" />
        </div>
        <div className={classes.upload}>
          <label htmlFor="file">Photo:</label>
          <input type="file" name="file" />
        </div>
        <div className={classes.details}>
          <div><label htmlFor="detals">Details:</label></div>
          <textarea name="Detail" placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo enim id ipsa, doloremque voluptas accusantium possimus nesciunt expedita nobis ipsam adipisci accusamus? Dolorum nihil expedita voluptates qui quae minus.'></textarea>
        </div>
        <div className={classes.buttons}>
          <input className={classes.btn} type="submit" value="Submit" />
          <button className={classes.btn}>Reset</button>
        </div>
        
      </form>
    </div>
  );
};

export default AddTestimonials;
