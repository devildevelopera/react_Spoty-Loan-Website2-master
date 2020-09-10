import React from "react";
import Box from "../Box/Box";

import classes from "./LoginScreen.module.css";

import p1 from "../../images/setting.png";
import p2 from "../../images/applicaion.png";
import p3 from "../../images/testimonial.png";
import p4 from "../../images/viewUser.png";
import Header from "../Header/Header";
import DetailedBox, { LoanShedule,RecentTrans,LoanSummry } from "../Box/DetailedBox";


// const WelcomeMessage = ({message})=>{
//     return(
//         <div className={classes.messageRow}>
//           <div className={classes.message}>
//           <i className='fa fa-check'></i> {message}
//           </div>
//         </div>
//     )
// }

const LoginScreen = () => {

  return (
    <div className={classes.wrapper}>
      <Header page={"Active Loans"} />
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
        <div className={classes.tables}>
          <DetailedBox />
          <div className={classes.tablesRight}>
            <LoanShedule />
            <RecentTrans />
            <LoanSummry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
