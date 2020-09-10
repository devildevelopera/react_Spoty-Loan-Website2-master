import React from "react";
import classes from "./Box.module.css";
import MenuButton from "../Buttons/MenuButton";

export const LoanSummry = ({title='Loan Summry'}) => {
  return (
    <div className={classes.detailedBox}>
      <div className={classes.title}>{title}</div>
      <ul>
        <li>
          <span>Loan Ammount</span> <span>2020.21</span>
        </li>
        <li>
          <span>Loan Status</span> <span>Paid</span>
        </li>
        <li>
          <span>Loan Duration</span> <span>6 Month</span>
        </li>
      </ul>
    </div>
  );
};

export const LoanShedule = () => {
  return (
    <div className={classes.detailedBox}>
      <div className={classes.title}>Loan Shedule</div>
      <div className={classes.rightListThreeColumns}>
        <div className={classes.list}>
          <h4>Data</h4>
          <ul>
            <li>20/05/2020</li>
            <li>20/05/2020</li>
            <li>20/05/2020</li>
          </ul>
        </div>
        <div className={classes.list}>
          <h4>Total Due</h4>
          <ul>
            <li>2020.200</li>
            <li>1445.264</li>
            <li>25541.45</li>
          </ul>
        </div>
        <div className={classes.list}>
          <h4>Status</h4>
          <ul>
            <li style={{ color: "green" }}>Paid</li>
            <li style={{ color: "red" }}>Pending</li>
            <li style={{ color: "red" }}>Pending</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const RecentTrans = () => {
  return (
    <div className={classes.detailedBox}>
      <div className={classes.title}>Recent Transactions</div>
      <div className={classes.rightListThreeColumns}>
        <div className={classes.list}>
          <h4>Transaction Type</h4>
          <ul>
            <li>Repayment</li>
            <li>Repayment</li>
            <li>Repayment</li>
          </ul>
        </div>
        <div className={classes.list}>
          <h4>Date</h4>
          <ul>
            <li>21/05/2020</li>
            <li>21/05/2020</li>
            <li>21/05/2020</li>
          </ul>
        </div>
        <div className={classes.list}>
          <h4>Ammount</h4>
          <ul>
            <li>25541.45</li>
            <li>25541.45</li>
            <li>25541.45</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const DetailedBox = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.detailedBox}>
        <div className={classes.title}>
          Repayment Can Be Made On Following Bank Details
        </div>
        <ul>
          <li>
            <span>Bank Name:</span> <span> Full Bank Name</span>
          </li>
          <li>
            <span>Account Name:</span> <span> Full Account Name</span>
          </li>
          <li>
            <span>Account Number:</span> <span> 131215131515</span>
          </li>
        </ul>
        <br />
        <ul>
          <li>
            <span>Bank Name:</span> <span> Full Bank Name</span>
          </li>
          <li>
            <span>Account Name:</span> <span> Full Account Name</span>
          </li>
          <li>
            <span>Account Number:</span> <span> 131215131515</span>
          </li>
        </ul>
      </div>
      <MenuButton bgColor={'0099ff'} width={'130px'} name={"Loan Topup"} link={"top-up"} />
    </div>
  );
};

export const SingleCol = ({title, data,header}) => {
  return (
    <div className={classes.detailedBox}>
      <div className={classes.title}>{title}</div>
      <div className={classes.rightListThreeColumns}>
        <div className={classes.list}>
          <h4>{header}</h4>
          <ul>
             {data.map((e)=><li>{e}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};
export const Monthly = () => {
  return (
    <div className={classes.detailedBox}>
      <div className={classes.title}>Monthly Repayment</div>
      <div className={classes.rightListThreeColumns}>
        <div className={classes.list}>
          <h4>Email</h4>
          <ul>
            <li>some@gmail.com</li>
            <li>some@gmail.com</li>
            <li>some@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const TowCol = ({title,header,col1,col2}) => {
  return (
    <div className={classes.detailedBox}>
      <div className={classes.title}>{title}</div>
      <div className={classes.rightListThreeColumns}>
        <div className={classes.list}>
         <h4 >{header}</h4>  
          <ul>
           {col1.map((e)=><li>{e}</li>)}
            
            
          </ul>
        </div>
        <div className={classes.list}>
        <h4>{header}</h4>
          <ul>
          {col2.map((e)=><li>{e}</li>)}
            
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default DetailedBox;

