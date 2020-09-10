import React from "react";
import classes from './Guarantor.module.css'
import Header from '../Header/Header'
import FormButton from '../Buttons/FormButton'

const Guaranator = () => {
  return (
    <div className={classes.wrapper}>
      <Header page={"Guaranator"} />
      <div className={classes.mainArea}>
      <div className={classes.form}>
          <form onSubmit={(e) => e.preventDefault}>
              <div>
                  <select>
                      <option value="">Title</option>
                      <option value="">Mr</option>
                      <option value="">Mrs</option>
                      <option value="">Dr</option>
                      <option value="">Cheef</option>
                      <option value="">Rev</option>
                      
                  </select>
              </div>
            <div>
              <input
                required
                type="text"
                name="Name"
                placeholder="Name( Spoty Loans )"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="relationship"
                placeholder="Relationship (Brother, Father, Child, Mother-in-law etc)"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="Employer"
                placeholder="Employer"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="HomeAddress"
                placeholder="Home Address"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="Landmark"
                placeholder="Landmark"
              />
            </div>
            <div>
              <input
                required
                type="number"
                name="number"
                placeholder="Mobile Number"
              />
            </div>
            <div>
              <input
                required
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </div>
            
           <div style={{float:"right"}} className={classes.updatebtn}> <FormButton title={'Update'} type={'submit'} /></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Guaranator;
