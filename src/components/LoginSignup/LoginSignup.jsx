import React, { useState } from 'react';
import './LoginSignup.css';
import { assets } from '../../assets/assets';

function LoginSignup() {
  const [isNumber, setIsNumber] = useState(false);
  const [isOtp, setIsOtp] = useState(false);
  const [closeForm, setCloseForm] = useState(false);

  function handleFormView(value) {
    setIsNumber(!value);
    setIsOtp(value);
  }

  return (
    <div className={`login_signup_container ${closeForm ? "close_form" : "close_form"}`}>
      <div className="login_form">
        <div className="close_btn"> 
          <i onClick={() => setCloseForm(!closeForm)} className='bx bx-x'></i>
        </div>
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className={`${isNumber ? "isNumber" : "noForm"}`}
        >
          <h1>Welcome to Jalgaon.Com</h1>
          <p>Login / Signup to personalize your experience</p>
          <div className="hr_line"></div>

          <label htmlFor="mobile-number">Mobile Number</label>
          <div className="number_input">
            <img src={assets.flag} alt="Flag" />
            <input type="text" name='number' id='mobile-number' />
          </div>

          <span>By Login or Signup I accept terms and conditions</span>
          <div className="submit_button">
            <button 
              type="button" 
              onClick={() => setIsNumber(!isNumber)}
            >
              <span>Continue</span>
              <i className='bx bx-right-arrow-alt'></i>
            </button>
          </div>
        </form>
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className={`${!isNumber ? "" : "noForm"}`}
        >
          <h1>Welcome to Jalgaon.Com</h1>
          <p>Login / Signup to personalize your experience</p>
          <div className="hr_line"></div>

          <label htmlFor="otp">6 Digit OTP</label>
          <div className="number_input">
            <img src={assets.flag} alt="Flag" />
            <input type="text" name='otp' id='otp' />
          </div>

          <span>Enter 6 digit OTP you received via SMS on your mobile number.</span>
          <div className="submit_button">
            <button>
              <span>Verify</span>
              <i className='bx bx-right-arrow-alt'></i>
            </button>
          </div>

          <p 
            onClick={() => setIsNumber(!isNumber)} 
            className='back_btn_login'
          >
            <i className='bx bx-left-arrow-alt'></i>
            <span>Back</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
