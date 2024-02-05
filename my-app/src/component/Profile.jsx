// Pofile page

import React, { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoBagRemoveOutline, IoCallOutline } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';
import { FaGenderless } from 'react-icons/fa';
import { Input, Modal, Radio } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import '../style/profile.css'
import NavBar from './NavBar';
import Footer from './Footer';
import { useSelector } from 'react-redux';

const { Option } = Radio;
const { Dragger } = Upload;
const { TextArea } = Input;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};


const Profile = () => {

    const userName = localStorage.getItem('userName');
    const email = localStorage.getItem('userMail');

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const [isModalOpen6, setIsModalOpen6] = useState(false);
    const [isModalOpen7, setIsModalOpen7] = useState(false);
    const [isModalOpen8, setIsModalOpen8] = useState(false);
    const [isModalOpen9, setIsModalOpen9] = useState(false);

    const [userPersonal, setUserPersonal] = useState([
        {
            id: 11,
            name: userName || 'Enter Name' ,
            gender: "male/femal",
            maritalStatus: "Single/Unmarried",
            dob: "dd/mm/yyyy",
            differently: 'yes/No',
            careerBreak: 'yes/NO',
            address: ['D/no', 'Dirtrict', 'post', 'other'],
            hometown: 'hometown',
            pincode: '000000',
            language: ['Tamil', 'English']
        }
    ])

    
    const [userDetails, setUserDetails] = useState(() => {
        const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
        if (storedUserDetails && Array.isArray(storedUserDetails)) {
            return storedUserDetails;
        } else {
            return [
                {
                    id: 1,
                    image: "https://st3.depositphotos.com/13159112/17145/v/450/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg",
                    userName: userName || 'Enter Name',
                    location: "location",
                    experience: "Fresher/Experience",
                    phone: "phone number",
                    email: email || 'abc@gmail.com',
                    gender: "male/female",
                }
            ];
        }
    });
    
    useEffect(() => {
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }, [userDetails]);
    

    const [resumeHeadline, setResumeHeadline] = useState('It is the first thing recruiters notice in your profile. Write concisely what makes you unique and right person for the job you are looking for.')
    const [keySkills, setKeySkills] = useState('Tell recruiters what you know or what you are known for e.g. Direct Marketing, Oracle, Java etc. We will send you job recommendations based on these skills.');
    const [employment, setEmployment] = useState('Mention your employment details including your current and previous company work experience.')
    const [itSkills, setItSkills] = useState('Specify details about programming languages (such as Java, Python, C/C++, Oracle, SQL etc), softwares (Microsoft Word, Excel, Tally etc) or any other software related knowledge.')
    const [profileSummary, setProfileSummary] = useState('Your Profile Summary should mention the highlights of your career and education, what your professional interests are, and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.')
    const [projects, setProjects] = useState('Add details about projects you have done in college, internship or at work.')

    const [educationDetails, setEducationDetails] = useState([
        {
            level: "Bachelor's Degree",
            fieldOfStudy: "[Your Field of Study]",
            university: "[University Name]",
            graduationYear: "[Year of Graduation]",
        },
        {
            level: "High School",
            schoolName: "[High School Name]",
            graduationYear: "[Year of Graduation]",
        },
        {
            level: "Secondary School Leaving Certificate (SSLC)",
            schoolName: "[School Name]",
            graduationYear: "[Year of Graduation]",
        },
        {
            level: "Higher Secondary Leaving Certificate (HSLC)",
            schoolName: "[School Name]",
            graduationYear: "[Year of Graduation]",
        },
        {
            level: "Other Qualifications",
            description: "[Diploma,...]",
        },
    ]);

    useEffect(() => {

       
        const storedResumeHeadline = localStorage.getItem("resumeHeadline") || resumeHeadline;
        if (storedResumeHeadline) {
            setResumeHeadline(storedResumeHeadline);
        }

        const storedKeySkills = localStorage.getItem("keySkills") || keySkills;
        if (storedKeySkills) {
            setKeySkills(storedKeySkills);
        }

        const storedEmployment = localStorage.getItem("employment");
        const storedItSkills = localStorage.getItem("itSkills");
        const storedProfileSummary = localStorage.getItem("profileSummary");
        const storedProjects = localStorage.getItem("projects");

        if (storedEmployment) setEmployment(storedEmployment);
        if (storedItSkills) setItSkills(storedItSkills);
        if (storedProfileSummary) setProfileSummary(storedProfileSummary);
        if (storedProjects) setProjects(storedProjects);

    }, [keySkills ,resumeHeadline]);

    useEffect(() => {
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }, [userDetails]);
    
    useEffect(() => {
        // Additional code if needed when keySkills or resumeHeadline change
    }, [keySkills, resumeHeadline]);
    
    const handleChange = (field, value) => {
        setUserDetails(prevUserDetails => [
            {
                ...prevUserDetails[0],
                [field]: value,
            },
        ]);
    };
    

    const handleResumeHeadlineChange = (e) => {
        const newResumeHeadline = e.target.value;
        setResumeHeadline(newResumeHeadline);
        localStorage.setItem("resumeHeadline", newResumeHeadline);
    };

    const handleKeySkillsChange = (e) => {
        const newKeySkills = e.target.value;
        setKeySkills(newKeySkills);
        localStorage.setItem("keySkills", newKeySkills);
    };

    const handleValueChange = (field, value, setIsModalOpen) => {
        switch (field) {
            case "employment":
                setEmployment(value);
                break;
            case "itSkills":
                setItSkills(value);
                break;
            case "profileSummary":
                setProfileSummary(value);
                break;
            case "projects":
                setProjects(value);
                break;
            default:
                break;
        }

        localStorage.setItem(field, value);

        if (setIsModalOpen) setIsModalOpen(false);
    };


    useEffect(() => {
        const storedUserPersonal = localStorage.getItem("userPersonal");
        if (storedUserPersonal) {
            try {
                const parsedUserPersonal = JSON.parse(storedUserPersonal);
                setUserPersonal(parsedUserPersonal);
            } catch (error) {
                console.error("Error parsing storedUserPersonal:", error);
            }
        }
    }, []);

    const handleChangePersonal = (field, value, index = 0) => {
        setUserPersonal((prevUserPersonal) => {
            const updatedDetails = [...prevUserPersonal];
            updatedDetails[index][field] = value;

            localStorage.setItem("userPersonal", JSON.stringify(updatedDetails));

            return updatedDetails;
        });
    };

    useEffect(() => {
        const storedEducationDetails = localStorage.getItem("educationDetails");
        if (storedEducationDetails) {
            try {
                const parsedEducationDetails = JSON.parse(storedEducationDetails);
                setEducationDetails(parsedEducationDetails);
            } catch (error) {
                console.error("Error parsing storedEducationDetails:", error);
            }
        }
    }, []);

    const handleChangeEdu = (index, field, value) => {
        setEducationDetails((prevEducationDetails) => {
            const updatedDetails = [...prevEducationDetails];
            updatedDetails[index][field] = value;

            localStorage.setItem("educationDetails", JSON.stringify(updatedDetails));

            return updatedDetails;
        });
    };

    return (
        <>
            <NavBar />
            <div className="usercomponent">
                <div className='usermap' onClick={() => { setIsModalOpen1(true); }} >
                    {userDetails && userDetails.map((i) => {
                        return (
                            <>
                                <div className='userDetailsOne'>
                                    <div>
                                        <img className='userimg' src={i.image} alt="" />
                                    </div>
                                    <div>
                                        <h4>{i.userName.toUpperCase()}</h4>
                                        <div className="userline1"></div>
                                        <br />
                                        <div className='userinfo1'>
                                            <div className='usermail'>
                                                <span><FaGenderless />
                                                    {i.gender}
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

                <div className='usertwocontiner'>
                    <div className="userquick">
                        <h4>Quick links</h4>

                        <ul className='userquicklinks' >
                            <li><a href="#resume-upload">Resume Upload</a></li>
                            <li><a href="#resume-headline">Resume Headline</a></li>
                            <li><a href="#key-skills">Key Skills</a></li>
                            <li><a href="#education">Education </a></li>
                            <li><a href="#it-skills">IT Skills </a></li>
                            <li><a href="#projects">Projects </a></li>
                            <li><a href="#profile-summary">Profile Summary</a></li>
                            <li><a href="#personal-details">Personal Details</a></li>
                        </ul>


                    </div>

                    <div className='userfulldtl'>

                        <div id='resume-upload' className="resumediv">
                            <h4>Resume</h4>
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

                        <div id='resume-headline' className="resumeheadline" onClick={() => { setIsModalOpen2(true); }} >
                            <h4>Resume headline</h4>
                            <p>{resumeHeadline}</p>
                        </div>

                        <div id='key-skills' className="resumeheadline" onClick={() => { setIsModalOpen3(true); }} >
                            <h4>Key skills</h4>
                            <p>{keySkills}</p>
                        </div>

                        <div className="resumeheadline" onClick={() => { setIsModalOpen4(true); }} >
                            <h4>Employment</h4>
                            <p> {employment} </p>
                        </div>

                        <div id='education' className="resumeheadline" onClick={() => { setIsModalOpen5(true); }} >
                            <h4>Education</h4>
                            <ul>
                                <li>{educationDetails[0].level} - {educationDetails[0].fieldOfStudy} - {educationDetails[0].university}, {educationDetails[0].graduationYear}</li>
                                <li>{educationDetails[1].level} - {educationDetails[1].schoolName}, {educationDetails[1].graduationYear}</li>
                                <li>{educationDetails[2].level} - {educationDetails[2].schoolName}, {educationDetails[2].graduationYear}</li>
                                <li>{educationDetails[3].level} - {educationDetails[3].schoolName}, {educationDetails[3].graduationYear}</li>
                                <li>{educationDetails[4].level} - {educationDetails[4].description}</li>
                            </ul>

                        </div>

                        <div id='it-skills' className="resumeheadline" onClick={() => { setIsModalOpen6(true); }} >
                            <h4>IT skills</h4>
                            <p> {itSkills} </p>
                        </div>

                        <div id='profile-summary' className="resumeheadline" onClick={() => { setIsModalOpen7(true); }} >
                            <h4>Profile summary</h4>
                            <p> {profileSummary} </p>
                        </div>

                        <div id='projects' className="resumeheadline" onClick={() => { setIsModalOpen8(true); }} >
                            <h4>Projects</h4>
                            <p> {projects} </p>
                        </div>


                        <div className='resumeheadline' onClick={() => { setIsModalOpen9(true); }} >
                            <h4 id='personal-details' >Personal Details</h4>
                            {userPersonal && userPersonal.map((i) => {
                                return (
                                    <div id='userpersonallast'  >
                                        <div>

                                            <div>
                                                <h4>Name</h4>
                                                <p> {i.name} </p>
                                            </div>
                                            <div>
                                                <h4>Gender</h4>
                                                <p> {i.gender} </p>
                                            </div>
                                            <div>
                                                <h4>MaritalStatus</h4>
                                                <p> {i.maritalStatus} </p>
                                            </div>
                                            <div>
                                                <h4>Date Of Birth</h4>
                                                <p> {i.dob} </p>
                                            </div>
                                            <div>
                                                <h4>Differently Abled</h4>
                                                <p> {i.differently} </p>
                                            </div>
                                        </div>

                                        <div>

                                            <div>
                                                <h4>CareerBreak</h4>
                                                <p> {i.careerBreak} </p>
                                            </div>
                                            <div>
                                                <h4>Address</h4>
                                                <h6> {i.address[0]} </h6>
                                                <h6> {i.address[1]} </h6>
                                                <h6> {i.address[2]} </h6>
                                            </div>
                                            <div>
                                                <h4>Hometown</h4>
                                                <p> {i.hometown} </p>
                                            </div>
                                            <div>
                                                <h4>Pincode</h4>
                                                <p> {i.pincode} </p>
                                            </div>
                                            <div>
                                                <h4>Language</h4>
                                                <h6> {i.language[0]} </h6>
                                                <h6> {i.language[1]} </h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>


                </div>
            </div>

            <>

                <Modal title="Profile" open={isModalOpen1} onOk={() => { setIsModalOpen1(false); }} onCancel={() => { setIsModalOpen1(false); }}>

                    <div className='usermodalprofile' >
                        <div>
                            <h6>User Name:</h6>
                            <Input
                                value={userDetails[0].userName}
                                onChange={(e) => handleChange('userName', e.target.value)}
                            />
                        </div>
                        <div>
                            <h6>Location:</h6>
                            <Input
                                value={userDetails[0].location}
                                onChange={(e) => handleChange('location', e.target.value)}
                            />
                        </div>
                        <div>
                            <h6>Experience:</h6>
                            <Input
                                value={userDetails[0].experience}
                                onChange={(e) => handleChange('experience', e.target.value)}
                            />
                        </div>
                        <div>
                            <h6>Phone:</h6>
                            <Input
                                type="tel"
                                value={userDetails[0].phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                            />
                        </div>
                        <div>
                            <h6>Email:</h6>
                            <Input
                                type="email"
                                value={userDetails[0].email}
                                onChange={(e) => handleChange('email', e.target.value)}
                            />
                        </div>

                        <div>
                            <h6>Gender:</h6><br />
                            <Input
                                value={userDetails[0].gender}
                                onChange={(e) => handleChange('gender', e.target.value)}
                            />
                        </div>

                    </div>

                </Modal>


                <Modal title="Resume headline" open={isModalOpen2} onOk={() => { setIsModalOpen2(false); }} onCancel={() => { setIsModalOpen2(false); }}>
                    <TextArea rows={4}
                        value={resumeHeadline}
                        onChange={(e) => { handleResumeHeadlineChange(e) }}
                    />
                </Modal>

                <Modal
                    title="Key skills"
                    open={isModalOpen3}
                    onOk={() => { setIsModalOpen3(false); }}
                    onCancel={() => { setIsModalOpen3(false); }}
                >
                    <Input.TextArea
                        rows={4}
                        value={keySkills}
                        onChange={handleKeySkillsChange}
                    />
                </Modal>


                <Modal title="Employment" open={isModalOpen4} onOk={() => { handleValueChange("employment", employment, setIsModalOpen4) }} onCancel={() => { setIsModalOpen4(false); }}>
                    <Input.TextArea rows={4}
                        value={employment}
                        onChange={(e) => { setEmployment(e.target.value) }}
                    />
                </Modal>

                <Modal title="It Skills" open={isModalOpen6} onOk={() => { handleValueChange("itSkills", itSkills, setIsModalOpen6) }} onCancel={() => { setIsModalOpen6(false); }}>
                    <Input.TextArea rows={4}
                        value={itSkills}
                        onChange={(e) => { setItSkills(e.target.value) }}
                    />
                </Modal>

                <Modal title="Profile Summary" open={isModalOpen7} onOk={() => { handleValueChange("profileSummary", profileSummary, setIsModalOpen7) }} onCancel={() => { setIsModalOpen7(false); }}>
                    <Input.TextArea rows={4}
                        value={profileSummary}
                        onChange={(e) => { setProfileSummary(e.target.value) }}
                    />
                </Modal>

                <Modal title="Projects" open={isModalOpen8} onOk={() => { handleValueChange("projects", projects, setIsModalOpen8) }} onCancel={() => { setIsModalOpen8(false); }}>
                    <Input.TextArea rows={4}
                        value={projects}
                        onChange={(e) => { setProjects(e.target.value) }}
                    />
                </Modal>
                <Modal
                    title="Education Details"
                    open={isModalOpen5}
                    onOk={() => { setIsModalOpen5(false); }}
                    onCancel={() => { setIsModalOpen5(false); }}
                    width={650}
                >
                    <div className='usermodaleducation'>
                        {/* Map through the educationDetails array and render the inputs */}
                        {educationDetails.map((detail, index) => (
                            <div key={index}>
                                <h5>{detail.level}</h5>
                                <Input
                                    value={detail.fieldOfStudy || detail.schoolName || detail.description || ''}
                                    onChange={(e) => handleChangeEdu(index, 'fieldOfStudy', e.target.value)}
                                />
                                <Input
                                    value={detail.university || ''}
                                    onChange={(e) => handleChangeEdu(index, 'university', e.target.value)}
                                />
                                <Input
                                    value={detail.graduationYear || ''}
                                    onChange={(e) => handleChangeEdu(index, 'graduationYear', e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                </Modal>

                <Modal
                    title=""
                    open={isModalOpen9}
                    onOk={() => { setIsModalOpen9(false); }}
                    onCancel={() => { setIsModalOpen9(false); }}
                    width={900}
                >
                    <div className='resumeheadline'>
                        <h4 id='personal-details'>Personal Details</h4>
                        {userPersonal && userPersonal.map((i, index) => (
                            <div id='userpersonallast' className='userlastmodal' key={i.id}>
                                <div>
                                    <div>
                                        <h4>Name</h4>
                                        <Input
                                            value={i.name}
                                            onChange={(e) => handleChangePersonal('name', e.target.value, index)}
                                        />
                                    </div>
                                    <div>
                                        <h4>Gender</h4>
                                        <Input
                                            value={i.gender}
                                            onChange={(e) => handleChangePersonal('gender', e.target.value, index)}
                                        />
                                    </div>
                                    <div>
                                        <h4>MaritalStatus</h4>
                                        <Input
                                            value={i.maritalStatus}
                                            onChange={(e) => handleChangePersonal('maritalStatus', e.target.value, index)}
                                        />
                                    </div>
                                    <div>
                                        <h4>Date Of Birth</h4>
                                        <Input
                                            value={i.dob}
                                            onChange={(e) => handleChangePersonal('dob', e.target.value, index)}
                                        />
                                    </div>
                                    <div>
                                        <h4>Differently Abled</h4>
                                        <Input
                                            value={i.differently}
                                            onChange={(e) => handleChangePersonal('differently', e.target.value, index)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <h4>CareerBreak</h4>
                                        <Input
                                            value={i.careerBreak}
                                            onChange={(e) => handleChangePersonal('careerBreak', e.target.value, index)}
                                        />
                                    </div>
                                    <div className='usermodaladdres'>
                                        <h4>Address</h4>
                                    </div>
                                    <div>
                                        <h4>Hometown</h4>
                                        <Input
                                            value={i.hometown}
                                            onChange={(e) => handleChangePersonal('hometown', e.target.value, index)}
                                        />
                                    </div>
                                    <div>
                                        <h4>Pincode</h4>
                                        <Input
                                            value={i.pincode}
                                            onChange={(e) => handleChangePersonal('pincode', e.target.value, index)}
                                        />
                                    </div>
                                    <div className='usermoallanguage'>
                                        <h4>Languages</h4>
                                        {i.language.map((language, langIndex) => (
                                            <Input
                                                key={langIndex}
                                                value={language}
                                                onChange={(e) => handleChangePersonal('language', e.target.value, index, langIndex)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </Modal>

            </>
            <Footer />

        </>
    )
}

export default Profile