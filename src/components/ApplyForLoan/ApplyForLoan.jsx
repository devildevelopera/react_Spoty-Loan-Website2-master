import React, { useState } from "react";
import classes from "./Loan.module.css";
import Header from "../Header/Header";
import MenuButton from "../Buttons/MenuButton";

const ApplyLoan = () => {
  let [option, setOptopn] = useState("");
  let [checked, setChecked] = useState(false);
  const handelChange = (e) => {
    setOptopn(e.target.value);
  };

  return (
    <div className={classes.apply}>
      <div className={classes.applyBox}>
        <div className={classes.title}>Apply Loan</div>

        <div className={classes.customSelect}>
          <select onChange={(e) => handelChange(e)}>
            <option selected="true" disabled="disabled" value="">
              Repayment Method (Select Method)
            </option>
            <option value="auto">Automated Recurring Billing Method</option>
            <option value="manual">Manual Payment Method</option>
          </select>
        </div>
        {option === "auto" ? (
          <div className={classes.inputArea}>
            <input
              required
              checked={checked}
              onChange={() => setChecked(!checked)}
              type="checkbox"
            />
            <label>
              <a target='blank' href="https://spotyloans.com/spoty-terms-condition">Term & Condition Apply</a>
            </label>
            {checked && (
              <div>
                <MenuButton
                  width={"200px"}
                  name={"Add Payment Card"}
                  bgColor={"ba1937"}
                  link={""}
                />
              </div>
            )}
          </div>
        ) : (
          ""
        )}
        {option === "manual" ? (
          <div className={classes.inputArea}>
            <MenuButton
              width={"200px"}
              name={"Add Payment Method"}
              bgColor={"ba1937"}
              link={"apply-for-loan/manual-method"}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const ApplyForLoan = () => {
  return (
    <div className={classes.wrapper}>
      <Header page={"Apply For Loan"} />
      <div className={classes.mainArea}>
        <ApplyLoan />
      </div>
    </div>
  );
};

export default ApplyForLoan;
