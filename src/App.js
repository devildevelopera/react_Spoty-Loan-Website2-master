import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import MenuBar from './components/MainComponents/MenuBar';
import LoginScreen from './components/MainComponents/LoginScreen';

import ApplyForLoan from './components/ApplyForLoan/ApplyForLoan';
import ManualForm from './components/ApplyForLoan/ManualForm';
import PersonalInfo from './components/Personalinfo/PersonalInfo';
import EmploymentInfo from './components/EmploymentInfo/EmploymentInfo';
import MyLoan from './components/MyLoan/MyLoan';
import BankDetails from './components/Bank Details/BankDetails';
import Referrals from './components/Referrals/Referrals';
import Guaranator from './components/Guarantor/Guaranator';
import ContactInfo from './components/ContactInfo/ContactInfo';
import TopUp from './components/TopUp/TopUp';




function App() {
  return (
   <div className='container'>
     
      <Router>
        <MenuBar/>
        <Routes>
          <Route path='/' element={<LoginScreen/>}/>
          <Route path='/top-up' element={<TopUp/>}/>
          {/* <Route exact  path='setting/*' element={<Setting/>}>
            <Route path='/' element={<ChangePassword/>}/>
            <Route path='change-username' element={<ChangeUsername/>}/>
            <Route path='/system-setting' element={<SystemSetting/>}/>
            <Route path='/email-template' element={<EmailTemplate/>}/>
            <Route path='/manage-faq' element={<ManageFaq/>}/>
          </Route> */}
          {/* <Route path='manage-user' element={<ManageUsers/>}/>  
          <Route path='manage-testimonials' element={<ManageTestimonials/>}>
               <Route path='/' element={<ViewTestimonials/>}/> 
               <Route path='add-testimonial' element={<AddTestimonials/>}/> 
          </Route>   */}
          <Route path='apply-for-loan' element={<ApplyForLoan/>}/>
          <Route path='apply-for-loan/manual-method' element={<ManualForm/>}/>
          <Route path='/personal-information' element={<PersonalInfo/>}/>
          <Route path='/employment-information' element={<EmploymentInfo/>}/>
          <Route path='/my-loan' element={<MyLoan/>}/>
          <Route path='/bank-details' element={<BankDetails/>}/>
          <Route path='/referral' element={<Referrals/>}/>
          <Route path='/guarantor' element={<Guaranator/>}/>
          <Route path='/contact-information' element={<ContactInfo/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
