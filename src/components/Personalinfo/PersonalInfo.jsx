import React from "react";
import classes from "./PersonalInfo.module.css";
import Header from "../Header/Header";
import FormButton from "../Buttons/FormButton";

const PersonalInfo = () => {
  return (
    <div className={classes.wrapper}>
      <Header page={"Personal Information"} />
      <div className={classes.mainArea}>
        <div className={classes.form}>
          <form onSubmit={(e) => e.preventDefault}>
              <div>
                  <select>
                      <option value="">Title</option>
                      <option value="">Mr</option>
                      <option value="">Mrs</option>
                      <option value="">Dr</option>
                      <option value="">Cheef</option>
                      <option value="">Rev</option>
                      
                  </select>
              </div>
            <div>
              <input
                required
                type="text"
                name="Name"
                placeholder="Name( Spoty Loans )"
              />
            </div>
            <div>
              <input
                required
                type="date"
                name="dob"
                placeholder="Date of Birth"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="gender"
                placeholder="Gender"
              />
            </div>
            <div>
              <input
                required
                type="number"
                name="mobie"
                placeholder="Mobile Number"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="status"
                placeholder="Marital Status"
              />
            </div>
            <div>
              <input
                required
                type="number"
                name="exp"
                placeholder="Monthly Expenses"
              />
            </div>
            
            <div className={classes.uploadOptions}>
              <div>
                <p>Select New Profile Photo:</p>
                <label className="custom">
                  <input type="file" />
                  Choose File
                </label>
              </div>
            </div>
           <div className={classes.updatebtn}> <FormButton title={'Update'} type={'submit'} /></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
