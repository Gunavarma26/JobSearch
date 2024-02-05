//Company page

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { setJobDetails } from '../Redux/slices/jobSlice'
import { useDispatch, useSelector } from 'react-redux';


const Company = () => {
  
  const dispatch = useDispatch()
  const page = useNavigate()  
  const job = useSelector((state) => state.jobs.overallData)

  return (
    <>
        <div className="homed3button">
            <div className="homed3buttomcontent">
              <h4>See jobs in Featured Companies</h4>
              <div className="columns-container">
                <div className="column">
                  {job && job.slice(8, 15).map((i) => (
                    <div className="head_img h3img" key={i.id}>
                      <img src={i.image} alt={i.image} onClick={() => {dispatch(setJobDetails(i)); page('/job/details') }} />
                    </div>
                  ))}
                </div>
                <div className="column">
                  {job && job.slice(15).map((i) => (
                    <div className="head_img h3img" key={i.id}>
                      <img src={i.image} alt={i.image} onClick={() => { dispatch(setJobDetails(i)); page('/job/details') }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p style={{ fontSize: "20px", fontFamily: 'fantasy', textAlign: "center", padding: "10px", color: 'darkviolet' }} >choose your company</p>
          </div>
    </>
  )
}

export default Company