import React from "react";
import classes from "./Loan.module.css";
import Header from "../Header/Header";
import FormButton from '../Buttons/FormButton'
const ManualForm = () => {
  return (
    <div className={classes.wrapper}>
      <Header page={"Apply Loan"} />
      <div className={classes.mainArea}>
        <div className={classes.form}>
          <form onSubmit={(e) => e.preventDefault}>
            <div>
              <select name="loantype">
                <option value="">Select Loan Type</option>
              </select>
            </div>
            <div>
              <input
                required
                type="number"
                name="ammount"
                placeholder="Ammount(12314)"
              />
            </div>
            <div>
              <select name="duration">
                <option value="">Duration (Select Duration)</option>
                <option value="">1 Month</option>
                <option value="">2 Month</option>
                <option value="">3 Month</option>
                <option value="">4 Month</option>
                <option value="">5 Month</option>
                <option value="">6 Month</option>
                <option value="">7 Month</option>
                <option value="">8 Month</option>
                <option value="">9 Month</option>
                <option value="">10 Month</option>
                <option value="">11 Month</option>
                <option value="">12 Month</option>
              </select>
            </div>
            <div>
              <input
                required
                type="text"
                name="adr"
                placeholder="Address( _________________ )"
              />
            </div>
            <div>
              <input
                required
                type="email"
                name="email"
                placeholder="E-mail(info@spotyloans.com)"
              />
            </div>
            <div>
              <input
                required
                type="number"
                name="username"
                placeholder="Phone No (+234 708 244 4891)"
              />
            </div>
            <div>
              <input required type="text" name="bvn" placeholder="BVN" />
            </div>

            <div className={classes.question}>
              <p>How did you hear about us?</p>
              <input type="checkbox" name="online" id="" />{" "}
              <label htmlFor="onlie">online</label>
              <input type="checkbox" name="Sales" id="" />{" "}
              <label htmlFor="onlie">Sales Agent</label>
              <input type="checkbox" name="Radio" id="" />{" "}
              <label htmlFor="onlie">Radio</label>
              <input type="checkbox" name="Billboard" id="" />{" "}
              <label htmlFor="onlie">Billboard</label>
              <input type="checkbox" name="Referral" id="" />{" "}
              <label htmlFor="onlie">Referral</label>
            </div>

            <div className={classes.uploadOptions}>
              <div>
                <p>Utility Bill:</p>
                <label className="custom">
                  <input type="file" />
                  Choose File
                </label>
              </div>
              <div>
                <p>Passport Photograph:</p>
                <label className="custom">
                  <input type="file" />
                  Choose File
                </label>
              </div>
              <div>
                <p>Means of Identification</p>
                <label className="custom">
                  <input type="file" />
                  Choose File
                </label>
              </div>
              <div>
                <p>Bank Account Statement:</p>
                <label className="custom">
                  <input type="file" />
                  Choose File
                </label>
              </div>
              <div>
                <p>Employment Letter:</p>
                <label className="custom">
                  <input type="file" />
                  Choose File
                </label>
              </div>
              <div>
                <p>Business Environment:</p>
                <label className="custom">
                  <input type="file" />
                  Choose File
                </label>
              </div>
            </div>
            <div className={classes.applyButton}>
            <p>
              Upload documents here or send all documents to 
              <span> varification@spityloans.com</span>
            </p>
            <FormButton title={'Apply'} type={'submit'}  />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManualForm;
