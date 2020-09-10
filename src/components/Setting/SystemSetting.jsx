import React from 'react'
import classes from './Setting.module.css'
const SystemSetting = () => {
    return (
        <div className={classes.form}>
        <form onSubmit={(e)=>e.preventDefault}>
          <div><input required type="text" name="Name" placeholder="Name( Spoty Loans )"/></div>
          <div><input required  type="number" name="username" placeholder="Phone No (+234 708 244 4891)"/></div>
          <div><input required type="text" name="fb" placeholder="Facebook URL( https://www.facebook.com/SpotyLoans-Nig-105431704132995/?modal=admin_todo_tour )"/></div>
          <div><input required type="text" name="tw" placeholder="Twitter URL( https://twitter.com/LoansSpoty )"/></div>
          <div><input required type="text" name="ins" placeholder="Instagram( https://www.linkedin.com/in/oficial-spoty-loans-85564918b/ )"/></div>
          <div><input required type="text" name="adr" placeholder="Address( _________________ )"/></div>
          <div><input required type="text" name="sms" placeholder="Per SMS Charge( 3 )"/></div>
          <div className={classes.upload}>
            <div><label htmlFor="headerLogo">Select Header Logo:</label> <input type="file"  /></div>
            <div><label htmlFor="headerLogo">Select Footer Logo:</label> <input type="file"  /></div>
          </div>


          <div className={classes.buttons}>
            <input className={classes.btn} type="submit" value="Submit"/>
            <button className={classes.btn}>Reset</button>
          </div>
        </form>
      </div>
    )
}

export default SystemSetting
