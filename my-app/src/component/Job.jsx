// Job page

import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { Button, message, Modal, } from 'antd';
import '../style/home.css'
import Resume from './Resume';
import NavBar from './NavBar';
import Footer from './Footer';
import Dragger from 'antd/es/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'



const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);

    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

};

const Job = () => {

  const jobDetails = useSelector(state => state.jobs.jobDetails);


  const i = jobDetails
  const [isModalOpen, setIsModalOpen] = useState(false);

  const apply = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <NavBar />
      {i &&
        <>
          <div className='two' >
            <div className='jobcontinertwo' >
              <div className='icontiner jobicontiner'>
                <div className='head_img' >
                  <div>
                    <h3> {i.title} </h3>
                    <h5 style={{ fontSize: "18px", color: "rgb(60, 59, 59)" }} > {i.subheading} </h5>
                  </div>
                  <img src={i.image} alt={i.image} />
                </div>
                <div className='rating_company' >
                  <div className='rating_count' >
                    <FaStar className='rating' />
                    <span style={{ fontSize: "15px" }}>{i.rating}+</span>
                  </div>
                  <span className='company_typ1' > {i.company_type1} </span>
                  <span className='company_typ2' > {i.company_type2} </span>
                </div>
                <div className='bag_location' >
                  <IoBagRemoveOutline className='bag' />
                  <span className='experinces'> {i.experiences}  </span>
                  <div className="bagline"></div>
                  <IoLocationOutline className='locationico' />
                  <span className='location' >  {i.location} </span>
                </div>
                <div>
                  <ul className='homeskill' >
                    <li > {i.skill[0]} </li>
                    <li> {i.skill[1]} </li>
                    <li> {i.skill[2]} </li>
                    <li> {i.skill[3]} </li>
                    <li> {i.skill[4]} </li>
                    <li> {i.skill[5]} </li>
                    <li> {i.skill[6]} </li>
                    <li> {i.skill[7]} </li>
                  </ul>
                </div>
                <div className="homebtmline"></div>
                <div className='home_last'>
                  <div className='time_opening' >
                    <p>Posted: {i.time} | </p>
                    <p>Openings: {i.openings} </p>
                  </div>
                  <Button type='primary' onClick={() => { apply() }} >Apply</Button>
                </div>
              </div>

              <div className='jobdetails'>
                <div className='job_highlights' >
                  <h4>Job highlights</h4>
                  <ul>
                    <li> {i.job_highlights[0]} </li>
                    <li> {i.job_highlights[1]} </li>
                    <li> {i.job_highlights[2]} </li>
                    <li> {i.job_highlights[3]} </li>
                  </ul>
                </div>
                <div className='job_description' >
                  <h4>Job description</h4>
                  <p> {i.job_description} </p>
                  <h4>Responsibilities</h4>
                  <ul>
                    <li> {i.responsibilities[0]} </li>
                    <li> {i.responsibilities[1]} </li>
                    <li> {i.responsibilities[2]} </li>
                    <li> {i.responsibilities[3]} </li>
                    <li> {i.responsibilities[4]} </li>
                  </ul>
                  <h4>Requirements</h4>
                  <ul>
                    <li> {i.requirements[0]} </li>
                    <li> {i.requirements[1]} </li>
                    <li> {i.requirements[2]} </li>
                    <li> {i.requirements[3]} </li>
                    <li> {i.requirements[4]} </li>
                  </ul>
                  <h4>Role: <span> {i.role}</span> </h4>
                  <h4>Industry Type: <span> {i.industryType}</span> </h4>
                  <h4>Department:<span> {i.department}</span> </h4>
                  <h4>Employment Type: <span> {i.employmentType[0]}, </span> <span> {i.employmentType[1]}, </span> <span> {i.employmentType[2]}. </span> </h4>
                  <h4>Role Category: <span> {i.roleCategory}</span> </h4>
                  <h4>Education: <span> {i.education}</span> </h4>
                  <h4>Salary: <span> {i.salary}</span> </h4>

                  <div className='keyskildiv' >
                    <h4>Key Skills</h4>
                    <ul className='keyskills1' >
                      <li > {i.skill[0]} </li>
                      <li> {i.skill[1]} </li>
                      <li> {i.skill[2]} </li>
                      <li> {i.skill[3]} </li>
                    </ul>
                    <ul className='keyskills2' >
                      <li> {i.skill[4]} </li>
                      <li> {i.skill[5]} </li>
                      <li> {i.skill[6]} </li>
                    </ul>
                  </div>
                </div>
                <div className='job_company_about' >
                  <h4>About company</h4>
                  <p> {i.about_company} </p>
                  <h4 className='job_company_info' >Company Info</h4>
                  <h4>Website: <span> {i.company_info[0]} </span> </h4>
                  <h4>Address: <span> {i.company_info[1]} </span> </h4>
                </div>
              </div>
            </div>

            <div className='homed3 job2' >
              <Resume />
            </div>

          </div>
        </>
      }
      {!i &&
        <>
          <h1>no data found</h1>

        </>
      }

      <Modal title="Upload Resume" width={900} open={isModalOpen} onOk={() => { setIsModalOpen(false); }} onCancel={() => { setIsModalOpen(false); }}>
        <div id='resume-upload' className="resumediv">
          <p>Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.</p>
          <div className="resume">
            {/* <input type="file" name="" id="" /> */}
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload your resume </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
              </p>
            </Dragger>
          </div>
        </div>
      </Modal>



      <Footer />
    </div>
  )
}

export default Job