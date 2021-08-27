import React, { useState } from 'react';
import './Form.css';
import FormSuccess from './FormSuccess';
import SignUp from './signUp';
import img from '../../../assets/images/img-2.svg';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
 
  return (
    <>
     
    <div className='form-container'>
      {/* <span className='close-btn'>×</span> */}
      <div className='form-content-left'>
        <img className='form-img' src={img} alt='baby' />
      </div>
      {!isSubmitted ? (
        <SignUp submitForm={submitForm} />
      ) : (
        <FormSuccess />
      )}
    </div>
  </>
  );
};

export default Form;