import React from 'react'
import Header from '../Header/Header'
import classes from './ContactInfo.module.css'
import FormButton from '../Buttons/FormButton'

const ContactInfo = () => {
    return (
        <div className={classes.wrapper}>
        <Header page={"Contact Info"} />
        <div className={classes.mainArea}>
        <div className={classes.form}>
          <form onSubmit={(e) => e.preventDefault}>
            <div>
              <input
                required
                type="text"
                name="Address"
                placeholder="Address"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="State-of-Residence"
                placeholder="State of Residence"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="Local-Government"
                placeholder="Local Government"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="Building Description"
                placeholder="Building Description"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="Land-Mark"
                placeholder="Land Mark"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="Residential-Status"
                placeholder="Residential Status"
              />
            </div>
            <div>
              <input
                required
                type="number"
                name="Annual-Rent"
                placeholder="Annual Rent"
              />
            </div>
           
            
           <div style={{float:"right"}} className={classes.updatebtn}> <FormButton title={'Update'} type={'submit'} /></div>
          </form>
        </div>
        </div>
      </div>
    )
}

export default ContactInfo
