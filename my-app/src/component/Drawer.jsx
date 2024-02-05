// Drawer page

import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoBagRemoveOutline, IoCallOutline } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';
import { FaGenderless } from 'react-icons/fa';
import '../style/profile.css'
import { Button, Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';





const DrawerPage = ({ setOpen, open,userName,email }) => {

    const page = useNavigate()
  
    const [userDetails, setUserDetails] = useState([
        {
            id: 1,
            image: "https://st3.depositphotos.com/13159112/17145/v/450/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg",
            userName:userName,
            location: "location",
            experience: "Fresher/Experince",
            phone: "phone number",
            email:email,
            firstGender: "male/female",
        },
    ]);

    return (
        <>

            <Drawer title="Profile" onClose={() => { setOpen(false) }} open={open} width={480}>
                <Button type='primary' style={{marginLeft:"83%",marginBottom:"20px"}}>Logout</Button>

                <div onClick={() => { page('/profile'); setOpen(false) }} >
                    {userDetails && userDetails.map((i) => {
                        return (
                            <>
                                <div id='userDetailsOne'>
                                    <div>
                                        <img id='userimg' src={i.image} alt="" />
                                    </div>
                                    <div>
                                        <h6>{i.userName}</h6>
                                        <div id="userline1"></div>
                                        <br />
                                        <div id='userinfo1'>
                                            <div className='usermail'>
                                                <span><FaGenderless />
                                                    {i.firstGender}
                                                </span>
                                                <span><IoCallOutline />
                                                    {i.phone}
                                                </span>
                                                <span><MdOutlineMail />
                                                    {i.email}
                                                </span>
                                            </div>
                                            <div className="userline2"></div>
                                            <div className='usermail'>
                                                <span><CiLocationOn />
                                                    {i.location}
                                                </span>
                                                <span><IoBagRemoveOutline />
                                                    {i.experience}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent:"center" }}>
                    <Nav  style={{ maxHeight: '100px' }} >
                        <Nav.Link className="navlist" onClick={() => { page('/') }}>
                            Home
                        </Nav.Link>
                        <Nav.Link className="navlist" onClick={() => { page('/jobs') }}>
                            Jobs
                        </Nav.Link>
                        <Nav.Link className="navlist" onClick={() => { page('/contactus') }}>
                            Contact Us
                        </Nav.Link>
                    </Nav>

                <Button type='primary' style={{ marginTop: "10px" }}>Logout</Button>
                </div> */}

            </Drawer>
        </>
    );
};
export default DrawerPage;