// Search page

import React, { useEffect,  useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import '../style/search.css'
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchResult } from '../Redux/slices/jobSlice'



const Search = ({inputRef  }) => {

  const dispatch = useDispatch()
  const job = useSelector((state) => state.jobs.overallData)
  

  const searchResult = useSelector(state => state.jobs.searchResult);
  const count = useSelector(state => state.jobs.count);

  const [searchJob, setSearchJob] = useState('');
  const [searchCompany, setSearchCompany] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  useEffect(() => {

    const jobfilteredResults = job.filter((job) => job.title.toLowerCase().includes(searchJob.toLowerCase()));
    const combinedResults = Array.from(new Set([...jobfilteredResults]));
    dispatch(setSearchResult(combinedResults));

  }, [job, searchJob,dispatch ]);

  useEffect(() => {

    const companyfilteredResults = job.filter((job) => job.company_type1.toLowerCase().includes(searchCompany.toLowerCase()));
    const combinedResults = Array.from(new Set([...companyfilteredResults]));
    dispatch(setSearchResult(combinedResults));

  }, [job, searchCompany, dispatch])


  useEffect(() => {

    const locationfilteredResults = job.filter((job) => job.location.toLowerCase().includes(searchLocation.toLowerCase()));
    const combinedResults = Array.from(new Set([...locationfilteredResults]));
    dispatch(setSearchResult(combinedResults));

  }, [job, searchLocation, dispatch])


  return (
    <div className="search_continer">
      <form>
        <div className="input_continer">
          <div className="inputdiv">
            <IoMdSearch className='icon' />
            <input
              className='input'
              type="text"
              ref={inputRef}
              autoFocus
              placeholder='Search jobs here...'
              value={searchJob}
              onChange={(e) => {
                setSearchJob(e.target.value);
              }}
            />
            <MdOutlineCancel
              className='icon cancle'
              role='button'
              onClick={() => { setSearchJob(''); }}
            />
          </div>
          <div className="inputdiv">
            <IoHomeOutline className='icon' />
            <input
              className='input'
              type="text"
              placeholder='Search by company'
              value={searchCompany}
              onChange={(e) => {
                setSearchCompany(e.target.value);
              }}
            />
            <MdOutlineCancel
              className='icon cancle'
              role='button'
              onClick={() => { setSearchCompany(''); }}
            />
          </div>
          <div className="inputdiv">
            <MdOutlineLocationOn className='icon' />
            <input
              className='input'
              type="text"
              placeholder='Search by location'
              value={searchLocation}
              onChange={(e) => {
                setSearchLocation(e.target.value);
              }}
            />
            <MdOutlineCancel
              className='icon cancle'
              role='button'
              onClick={() => { setSearchLocation(''); }}
            />
          </div>
          <Button type='primary' style={{ height: "40px" }} >Search</Button>
        </div>
      </form>
      <div className='searchCount' >
        {count === true ?

          <h3> Recent Search Results Counts : {searchResult ? searchResult.length : null}</h3>
          : null
        }
      </div>
    </div>
  )
}

export default Search