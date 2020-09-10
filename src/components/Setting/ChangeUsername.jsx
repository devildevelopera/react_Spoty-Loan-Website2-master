import React from 'react'
import classes from './Setting.module.css'
const ChangeUsername = () => {
    return (
        <div className={classes.form}>
            <form onSubmit={(e)=>e.preventDefault}>
              <div><input required type="text" name="username" placeholder="New Username"/></div>
              <div><input required  type="text" name="username" placeholder="Confirm Username"/></div>
              <div className={classes.buttons}>
                <input className={classes.btn} type="submit" value="Submit"/>
                <button className={classes.btn}>Reset</button>
              </div>
            </form>
          </div>
    )
}

export default ChangeUsername
