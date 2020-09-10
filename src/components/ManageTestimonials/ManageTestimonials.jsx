import React from "react";
import classes from "../ManageUser/ManageUser.module.css";
import Header from "../Header/Header";
import SettingButton   from '../Buttons/SettingButton'
import { Outlet } from "react-router";

const ManageTestimonials = () => {
  return (
    <div>
      <Header page={'Manage Testimonials'}/>
      <div className='mainArea'>
      <div className={classes.buttonRow}>
        <SettingButton title={'View Testimonial'} link={'manage-testimonials'}/>
        <SettingButton title={'Add Testimonial'} link={'manage-testimonials/add-testimonial'}/>
      </div>

      <Outlet/>
      </div>
      
    </div>
  );
};

export default ManageTestimonials;
