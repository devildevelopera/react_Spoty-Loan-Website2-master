import React from 'react'
import classes from './BankDetails.module.css'
import Header from '../Header/Header'
import {bankList} from './BankList'
import FormButton from '../Buttons/FormButton'
const BankDetails = () => {
    return (
        <div className={classes.wrapper}>
            <Header page={'Bank Details'}/>
            <div className={classes.mainArea}>
                <form  onSubmit={(e)=>e.preventDefault} className={classes.inputArea}>
                    <div className={classes.options}>
                        <select>
                            <option value="">Select Duration</option>
                            {bankList.map((e)=> <option key={e.id} >{e.name}</option>)}                    
                        </select>
                    </div>
                    <div>
                        <input type="number" name="" id="" placeholder="Account Number"/>
                    </div>
                    <div>
                        <input type="text" name="" id="" placeholder="BVB"/>
                    </div>
                    <div style={{float:"right"}}>
                        <FormButton title={'Update'} type={'submit'}/>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default BankDetails
