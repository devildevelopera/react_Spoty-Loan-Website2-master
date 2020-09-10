import React from 'react'
import classes from './ManageUser.module.css'
import Header from '../Header/Header'

const ManageUsers = () => {
    return (
        <div>
          <Header page={'Manage Users'}/>  
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
            <div  style={{fontWeight:'600',fontSize:18}} className="divTableRow">
              <div className="divTableCell"><input className={classes.cssCheckbox} type="checkbox" name="" id=""/></div>
              <div className="divTableCell">Question</div>
              <div className="divTableCell">E-mail</div>
              <div className="divTableCell">Mobile No</div>
              <div className="divTableCell">BVN</div>
              <div className="divTableCell">Date of Birth</div>
              <div className="divTableCell">Referrer</div>
              <div className="divTableCell">Status</div>
              <div className="divTableCell">Action</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell"><input className={classes.cssCheckbox} type="checkbox" name="" id=""/></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
              <div className="divTableCell"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default ManageUsers
