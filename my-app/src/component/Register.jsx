import React, { useState } from 'react';
import '../style/register.css'
import { useNavigate } from 'react-router-dom';
import loginimg from '../assest/login.jpg'
import { notification } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setSignName, setSignPassword, setEmail } from '../Redux/slices/jobSlice';



function Register() {

  const [api, contextHolder] = notification.useNotification();
  
  const openNotification = (placement) => {
    api.success({
      message: (
        <div style={{ color: 'black' }}>
          Register successful
        </div>
      ),
      description: (
        <div style={{ color: 'black' }}>
          Congratulations, your account has been successfully registered
        </div>
      ),
      placement,
      duration: 1.5,
      onClose: () => {
        page('/');
        dispatch(setEmail(''))
      },
      style: {
        background: "white",
        borderRadius: '10px',
      },
    });
  };

  const email = useSelector(state => state.jobs.email);


  const dispatch = useDispatch();

  const handleSetSignName = (e) => {
    const newSignName = e.target.value;
    localStorage.setItem('userName',newSignName );
    localStorage.setItem("userDetails", JSON.stringify(newSignName));
    dispatch(setSignName(newSignName));
  }

  const handleSignPassword = (e) => {
    const newSignPassword = e.target.value;
    localStorage.setItem('userPassword',newSignPassword );
    dispatch(setSignPassword(newSignPassword));
  }

  const handleSetEmail = (e) => {
    const newemail = e.target.value;
    localStorage.setItem('userMail', newemail);
    dispatch(setEmail(newemail));
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [cpasswordError, setCPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    switch (name) {
      case 'username':
        setUsername(value);
        handleSetSignName(e);
        break;
      case 'email':
        setEmail(value);
        handleSetEmail(e);
        break;
      case 'password':
        setPassword(value);
        handleSignPassword(e);
        break;
      case 'cpassword':
        setCPassword(value);
        handleSignPassword(e);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      openNotification('bottomLeft')
      console.log('Form submitted successfully');
    }
  };

  const validateInputs = () => {
    let success = true;

    if (username.trim() === '') {
      success = false;
      setUsernameError('Username is required');
    } else {
      setUsernameError('');
    }

    if (email.trim() === '') {
      success = false;
      setEmailError('Email is required');
    } else if (!validateEmail(email)) {
      success = false;
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }

    if (password === '') {
      success = false;
      setPasswordError('Password is required');
    } else if (password.length < 8) {
      success = false;
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }

    if (cpassword === '') {
      success = false;
      setCPasswordError('Confirm password is required');
    } else if (cpassword !== password) {
      success = false;
      setCPasswordError('Password does not match');
    } else {
      setCPasswordError('');
    }

    return success;
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const page = useNavigate()


  return (
    <div className="login">
      <div>
        <img className="registerimg" src={loginimg} alt={loginimg} />
      </div>
      <div className="registerncontainer">
        <div style={{ backgroundColor: "limegreen" }} >
          {contextHolder}
        </div>
        <form onSubmit={handleSubmit} className='form' >
          <div className='logjob'>
            <span className='job'>Job</span ><span className='search'>Search</span>
          </div>
          <div >
            {/* <span style={{ fontFamily: 'cursive', fontSize: "11px", fontWeight: "555", color: 'gray' }} >Welcome  &#x1F44B; </span> */}
            <p style={{ fontFamily: 'cursive', fontSize: "11px", fontWeight: "555", color: 'gray' }} > Enter your details below to create your account and get started. </p>
          </div>
          <div className={`input-group ${usernameError && 'error'}`}>
            <input
              placeholder='Enter Username'
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <div className="error">{usernameError}</div>
          </div>
          <div className={`input-group ${emailError && 'error'}`}>
            <input
              placeholder='Enter Email '
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <div className="error">{emailError}</div>
          </div>
          <div className={`input-group ${passwordError && 'error'}`}>
            <input
              placeholder='Enter Password'
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <div className="error">{passwordError}</div>
          </div>
          <div className={`input-group ${cpasswordError && 'error'}`}>
            <input
              placeholder='Enter Confirm Password'
              type="password"
              id="cpassword"
              name="cpassword"
              value={cpassword}
              onChange={handleChange}
            />
            <div className="error">{cpasswordError}</div>
          </div>
          <button type="submit" onClick={(e) => { handleSubmit(e); }} >SIGN UP</button>
          <p style={{ textAlign: "center", fontFamily: 'cursive' }} >Already have an account ? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => { page('/') }} >sign in</span> </p>
        </form>
      </div>
      {/* <div>
          <img className="registerimg" src={loginimg} alt={loginimg} />
        </div> */}
    </div>
  );
}

export default Register;
