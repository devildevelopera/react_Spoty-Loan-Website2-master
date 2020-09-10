import React from 'react'
import classes from "../ManageUser/ManageUser.module.css";
const ViewTestimonial = () => {
    return (
        <div className={classes.box}>
      <div className={classes.actions}>
        <div style={{ backgroundColor: "red" }} className={classes.btn}>
          Delete
        </div>
        <div style={{ backgroundColor: "green" }} className={classes.btn}>
          Edit
        </div>
      </div>
      <div className={classes.displayRecords}>
        Display <span>10</span> records
      </div>
      <div className={classes.data}>
        <div className="divTable" style={{ border: ".5px solid #000" }}>
          <div className="divTableBody">
            <div
              style={{ fontWeight: "600", fontSize: 18 }}
              className="divTableRow"
            >
              <div className="divTableCell">
                <input className="css-checkbox" type="checkbox" name="" id="" />
              </div>
              <div className="divTableCell">Title</div>
              <div className="divTableCell">Details</div>
              <div className="divTableCell">Action</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">
                <input className="css-checkbox" type="checkbox" name="" id="" />
              </div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
              <div className="divTableCell">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ViewTestimonial
