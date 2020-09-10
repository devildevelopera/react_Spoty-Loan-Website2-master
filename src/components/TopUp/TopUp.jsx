import React from 'react'
import Header from '../Header/Header'
import classes from './TopUp.module.css'

import Box from "../Box/Box";
import p1 from "../../images/setting.png";
import p2 from "../../images/applicaion.png";
import p3 from "../../images/testimonial.png";
import p4 from "../../images/viewUser.png";
import {CuFormButton} from '../Buttons/FormButton'
const TopUp = () => {
    return (
        <div className={classes.wrapper}>
        <Header page={"Top-Up"} />
      <div className={classes.mainArea}>
        <div className={classes.boxRow}>
          <Box
            img={p1}
            background={"#9cecea"}
            title={"Spoty Kia Kia Loan"}
            info={"LOAN NAME"}
          />
          <Box
            img={p2}
            background={"#cbefd3"}
            title={"5000"}
            info={"LOAN AMMOUNT"}
          />
          <Box
            img={p4}
            background={"#a0a0fc"}
            title={"26-Sep-2020"}
            info={"NEXT REPAYMENT DATE"}
          />
          <Box img={p3} background={"#fa9ee4"} title={"1"} info={"TENOR"} />
        </div>

        <div className={classes.inputFields}>
        <div>
              <input
                required
                type="number"
                name="Topup"
                placeholder="Top-Up Ammount (Ammount)"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="duration"
                placeholder="Duration tenor (select Duration)"
              />
            </div>
            <CuFormButton
              width={"200px"}
              title={"Request"}
              bgColor={"ba1937"}
            />
        </div>
        </div>
        </div>
    )
}

export default TopUp
