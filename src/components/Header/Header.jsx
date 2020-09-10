import React from 'react'
import classes from './Header.module.css'
import profile from '../../images/profile.JPG'

// const WelcomeButton = ()=>{
//     return(
//         <div className={classes.welcome}>
//           <div className={classes.row}>
//             <p>Welcome</p>
//             <i className="fa fa-bell"></i>
//           </div>
//           <span className={classes.name}>Name Here</span>
//         </div>
//     )
// }

const ProfileArea = ()=>{
  return(
    <div className={classes.profile}>
      <i className="fa fa-bell"></i>
      <img src={profile} alt="profile"/>
    </div>
  )
}

const Header = ({page}) => {
    return (
        <div className={classes.topBar}>
        <span>{page}</span>
        <ProfileArea/>
      </div>
    )
}

export default Header
