import React from "react";
import Header from "../Header/Header";
import classes from "./MyLoan.module.css";
import { SingleCol, Monthly, TowCol, LoanSummry } from "../Box/DetailedBox";

// const Btn = ({ link, title, bgColor }) => {
//   const navigate = useNavigate();

//   const handelClick = () => {
//     navigate(`${link}`);
//   };

//   return (
//     <div
//       style={{ background: `#${bgColor}` }}
//       className={classes.btn}
//       onClick={handelClick}
//     >
//       {title}
//     </div>
//   );
// };

const MyLoan = () => {
  return (
    <div className={classes.wrapper}>
      <Header page={"My Loan"} />
      <div className={classes.mainArea}>
        <div className={classes.boxes}>
          <SingleCol
            title={"Product"}
            header={"Name"}
            data={["21/052020", "21/052020", "21/052020"]}
          />
          <Monthly />
          <TowCol
            title={"Tenor"}
            header={"Duration"}
            col1={["1 Month", "2 Month", "3 Month"]}
            col2={["1 Month", "2 Month", "3 Month"]}
          />
          <SingleCol
            title={"Status"}
            header={"Status"}
            data={["Approved", "Approved", "Approved"]}
          />
        </div>
        <div className={classes.lowerBox}>
          <LoanSummry title={"Loan Ammount"} />
          <TowCol
            title={"Balance"}
            
            col1={["Balance", "Balance", "Balance"]}
            col2={["Balance", "Balance", "Balance"]}
          />
        </div>
      </div>
    </div>
  );
};

export default MyLoan;
