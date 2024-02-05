// Login page

import React, { useState } from "react";
import { Input, Button, Modal, Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { IoWarning } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setUserPassword } from '../Redux/slices/jobSlice';
import { useNavigate } from "react-router-dom";
import loginimg from '../assest/login.jpg';
import '../style/login.css'

function LoginPage() {
  const dispatch = useDispatch();
  const page = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userName = useSelector(state => state.jobs.userName);
  const userPassword = useSelector(state => state.jobs.userPassword);
  const signName = useSelector(state => state.jobs.signName);
  const signPassword = useSelector(state => state.jobs.signPassword);

  const handleSetUserName = (e) => {
    const newUserName = e.target.value;
    dispatch(setUserName(newUserName));
  }

  const handleSetUserPassword = (e) => {
    const newUserPassword = e.target.value;
    dispatch(setUserPassword(newUserPassword));
  }

  const onSubmit = (e) => {
    const currentUserName = userName;
    const localUserName = localStorage.getItem('userName');
    const localUserPassword = localStorage.getItem('userPassword');

    
    if (currentUserName === signName && userPassword === signPassword) {
      page('/home');
    }
    else if (currentUserName === 'Guna' && userPassword === 'guna26') {
      page('/home');
    }
    else if (currentUserName === localUserName && userPassword === localUserPassword) {
      page('/home');
    }
    else {
      setIsModalOpen(true);
      dispatch(setUserName(null));
      dispatch(setUserPassword(null));
    }
    e.preventDefault()
  }

  
  
  return (
    <>
      <div className="login">
        <div>
          <img className="loginimg" src={loginimg} alt={loginimg} />
        </div>
        <div className="logincontainer">
          <div className='logjob'>
            <span className='job'>Job</span ><span className='search'>Search</span>
          </div>
          <div >
            <span style={{ fontFamily: 'cursive', fontSize: "11px", fontWeight: "555", color: 'gray' }} >Welcome back &#x1F44B; </span>
            <p style={{ fontFamily: 'cursive', fontSize: "11px", fontWeight: "555", color: 'gray' }} >Login to your account below</p>
          </div>
          <Form onFinish={onSubmit}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please enter your username!' }]}
            >
              <Input
                className="inputname"
                value={userName}
                onChange={(event) => { handleSetUserName(event) }}
                placeholder="Enter username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password
                className="inputpass"
                value={userPassword}
                onChange={(e) => { handleSetUserPassword(e) }}
                placeholder="Enter password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Form.Item>
            <div className="loginbtns">
              <Button htmlType="submit" className="loginbtn" type="primary">
                Login
              </Button> <br /> <br />
              <p>Don't have an account ? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => { page('/register') }} >Sign Up</span> </p>
            </div>
          </Form>
        </div>
      </div>
      <Modal title="" open={isModalOpen} footer={null} onCancel={() => { setIsModalOpen(false); }}>
        <div className='modal_content' >
          <IoWarning style={{ width: "70px", color: "red", height: "60px" }} />
          <h4> Incorrect Password </h4>
          <p> The Password you entered is incorrect. Please try again.</p>
        </div>
      </Modal>
    </>
  );
}

export default LoginPage;
