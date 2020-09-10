import React from 'react'
import MenuButton,{ExternalButton} from '../Buttons/MenuButton'
import logo from '../../images/logo.png'
import ActionButtons from '../Buttons/ActionButtons'
import classes from './MenuBar.module.css'


const MenuBar = () => {
    return (
        <div className={classes.menuBar}>
            <div className={classes.menuArea}>
                   <div className={classes.logo}><img src={logo} alt="logo"/></div>
                    <ActionButtons/>
                    
                   <div className={classes.button}>
                   <p className={classes.extras}>EXTRAS:</p>
                      <MenuButton name={'Personal Informaiton'} link={'personal-information'}/>
                      <MenuButton name={'Employment Information'} link={'employment-information'}/>
                      <MenuButton name={'Contact Information'} link={'contact-information'}/>
                      <MenuButton name={'Bank Details'} link={'bank-details'}/>
                      <MenuButton name={'Guarantor'} link={'guarantor'}/>
                   </div>
                   <div className={classes.bottomButtons} >
                   <ExternalButton bgColor={'c63838'} name={'Logout'} link={'https://spotyloans.com/spotylogin'}/>
                   <ExternalButton bgColor={'fc6deb'} name={'FAQ'} link={'https://spotyloans.com/spotyfaq'}/>
                   <ExternalButton bgColor={'42c175'}name={'Contact Us'} link={'https://spotyloans.com/contactus'}/>
                   </div>
               </div>
        </div>
        
    )
}

export default MenuBar
