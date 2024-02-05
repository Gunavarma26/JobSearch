// JobsContiner page

import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setJobDetails } from '../Redux/slices/jobSlice'




const JobsContiner = () => {

    const page = useNavigate()
    const dispatch = useDispatch()
    const searchResult = useSelector(state => state.jobs.searchResult);


    return (
        <>
            {searchResult.length ? (
                searchResult.map((i) => (
                    <div className='icontiner' onClick={() => { dispatch(setJobDetails(i)); page('/job/details'); }} key={i.id}>

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
                            <Button type='primary'>Apply</Button>
                        </div>

                    </div>
                ))
            ) : (
                <p style={{ marginTop: '2rem' }} className='noposticontiner' >  <p>No posts to display.</p> <h4>OR</h4>  Please choose the correct keyword search box</p>
            )}

        </>
    )
}

export default JobsContiner