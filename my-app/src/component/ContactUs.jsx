import React, { useState } from 'react';
import '../style/contactus.css'
import { FaAddressBook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Button, message } from 'antd';
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const ContactUs = ({ setOpen }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [messageText, setMessageText] = useState('');

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const openMessage = (e) => {
    e.preventDefault(); 
    if (fullName.trim() === '' || email.trim() === '' || messageText.trim() === '') {
      messageApi.error('Please fill out all fields');
      return;
    }

    messageApi.open({
        key,
        type: 'loading',
        content: 'Loading...',
    });
    setTimeout(() => {
        messageApi.open({
            key,
            type: 'success',
            content: 'Sent successfully',
            duration: 1,
          });
      }, 1000);
      setFullName('')
      setEmail('')
      setMessageText('')
  };

  return (
    <>
      <NavBar setOpen={setOpen} />
      <section className="contact">
        <div className="content">
          <h2 className="contact_head">Need Help ? Support Is Here !</h2>
          <br />
        </div>

        <div id="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <FaAddressBook />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>4671 Sugar Camp Road, Delhi</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <FaPhone />
              </div>
              <div className="text">
                <h3 className="h3_head">Phone</h3>
                <p>+91 8122551263</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <IoIosMail />
              </div>
              <div className="text">
                <h3 className="h3_head">Email</h3>
                <p>www.blogerblog.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <p className="h2_form">24/7 Customer Support</p>

              <div className="inputBox">
                <input
                  className="input_box"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  required
                />
              </div>
              <br />
              <div className="inputBox">
                <input
                  className="input_box"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </div>
              <br />
              <div className="inputBox">
                <textarea
                  className="input_box"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Type your Message..."
                  required
                ></textarea>
              </div>
              <div className="inputBox">
                <Button type='primary' id="send_btn" onClick={openMessage}>Send</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {contextHolder}
      <Footer />
    </>
  );
};

export default ContactUs;
