import React from 'react'
import classes from './Button.module.css'
import {useNavigate} from 'react-router-dom'

const MenuButton = ({width ,name, link, bgColor}) => {
    const navigate = useNavigate()
    const handelClick = ()=>{
        navigate(`/${link}`)
    }

    return (
        <div style={{backgroundColor:`#${bgColor}`,width:`${width}`}} onClick={handelClick} className={classes.btn}>
            {name}
        </div>
    )
}

export const ExternalButton = ({width ,name, link, bgColor}) => {
  
    const handelClick = ()=>{
        window.open(
            `${link}`,
            '_blank'
          );
    }

    return (
        <div style={{backgroundColor:`#${bgColor}`,width:`${width}`}} onClick={handelClick} className={classes.btn}>
            {name}
        </div>
    )
}

export default MenuButton
