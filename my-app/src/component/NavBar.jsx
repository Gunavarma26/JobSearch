// NavBar page
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/navBar.css'
import { NavLink } from 'react-router-dom';
import { Button, message } from 'antd';



function NavBar() {

  const page = useNavigate()
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Logout successfull',
        duration: 1,
      });
      setTimeout(() => {
        page('/');
      }, 1000);
    }, 1000);
  };


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand onClick={() => { page('/home') }} >
          <span className='job'>Job</span ><span className='search'>Search</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav className="me-auto my-2 my-lg-0 mx-auto text-center" style={{ maxHeight: '100px', }} navbarScroll>
            <NavLink
              to="/home"
              className="navlist"
              activeClassName="active"
              onClick={() => {
                page('/home');
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs"
              className="navlist"
              activeClassName="active"
              onClick={() => {
                page('/jobs');
              }}
            >
              Jobs
            </NavLink>
            <NavLink
              to="/contactus"
              className="navlist"
              activeClassName="active"
              onClick={() => {
                page('/contactus');
              }}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/profile"
              className="navlist"
              activeClassName="active"
              onClick={() => {
                page('/profile');
              }}
            >
              Profile
            </NavLink>
          </Nav>
          <div className="line"></div>
          {contextHolder}
          <Button type='primary' onClick={() => { openMessage(); }} >Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
