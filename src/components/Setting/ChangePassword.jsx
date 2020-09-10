import React from 'react'
import classes from './Setting.module.css'

const ChangePassword = () => {
    return (
        <div className={classes.form}>
            <form onSubmit={(e)=>e.preventDefault}>
              <div><input required type="password" name="password" placeholder="Old Password"/></div>
              <div><input required  type="password" name="password" placeholder="New Password"/></div>
              <div><input required type="password" name="password" placeholder="Confirm Password"/></div>
              <div className={classes.buttons}>
                <input className={classes.btn} type="submit" value="Change Password"/>
                <button className={classes.btn}> Reset</button>
              </div>
            </form>
          </div>
    )
}

export default ChangePassword
