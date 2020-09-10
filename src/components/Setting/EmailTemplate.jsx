import React from 'react'
import classes from './Setting.module.css'

const EmailTemplate = () => {
    return (
        <div className={classes.form}>
        <form onSubmit={(e)=>e.preventDefault}>
          <div><input required type="text" name="message" placeholder="Message Title ( Registration as a member )"/></div>
          <div><input required  type="text" name="password" placeholder="Subject ( You have been registered on spotyloans.com )"/></div>
          <div><textarea  name="password" placeholder="Message ( Dear %Name%,

Welcome to SpotyLoans!!!

You have been registered on spotyloans.com. Please verify your email ID by clicking on the 
url %url% or copy the link to your browser and verify.

Thank you,
your Friend from Spotyloans )"/></div>
          <div className={classes.buttons}>
            <input className={classes.btn} type="submit" value="Submit"/>
            <button className={classes.btn}> Reset</button>
          </div>
        </form>
      </div>
    )
}

export default EmailTemplate
