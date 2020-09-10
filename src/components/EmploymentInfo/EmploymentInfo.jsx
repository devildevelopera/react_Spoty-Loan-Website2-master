import React from 'react'

import classes from "../Personalinfo/PersonalInfo.module.css";
import Header from "../Header/Header";
import FormButton from "../Buttons/FormButton";


const EmploymentInfo = () => {
    return (
        <div className={classes.wrapper}>
      <Header page={"Employment Information"} />
      <div className={classes.mainArea}>
        <div className={classes.form}>
          <form onSubmit={(e) => e.preventDefault}>
              
            <div>
              <input
                required
                type="email"
                name="email"
                placeholder="Official Email"
              />
            </div>
            <div>
              <input
                required
                type="date"
                name="dob"
                placeholder="Employment Date"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="employername"
                placeholder="Employer Name"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="Address"
                placeholder="Employer Address"
              />
            </div>
           <div className={classes.updatebtn}> <FormButton title={'Update'} type={'submit'} /></div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default EmploymentInfo
