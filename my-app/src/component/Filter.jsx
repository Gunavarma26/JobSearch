// Filter page

import React, { useEffect, useState } from 'react'
import { Button, Select } from 'antd';
import '../style/filter.css'
import { useDispatch, useSelector } from 'react-redux';
import { handleCount, setJob } from '../Redux/slices/jobSlice'



function Filter() {

  const dispatch = useDispatch();

  const count = useSelector(state => state.jobs.count);
  const job = useSelector((state) => state.jobs.overallData)


  const [experienceRange, setExperienceRange] = useState('');
  const { Option } = Select;
  const handleExperienceChange = (value) => {
    setExperienceRange(value);
  };

  const [workOptions, setWorkOptions] = useState({
    workFromHome: false,
    workFromOffice: false,
    Remote: false,
    partTime: false,
    fullTime: false,
  });

  const handleWorkOptionChange = (option) => {
    setWorkOptions({
      ...workOptions,
      [option]: !workOptions[option],
    });
  };


  const [selectedLocations, setSelectedLocations] = useState([]);
  const handleLocationChange = (location) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter((loc) => loc !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const [selectedSalaryRanges, setSelectedSalaryRanges] = useState([]);


  const handleSalaryRangeChange = (range) => {
    const formattedRange = range.replace('Lakhs', 'LPA');

    if (selectedSalaryRanges.includes(formattedRange)) {
      setSelectedSalaryRanges(selectedSalaryRanges.filter((selectedRange) => selectedRange !== formattedRange));
    } else {
      setSelectedSalaryRanges([...selectedSalaryRanges, formattedRange]);
    }
  };

  const [selectedRoleCategories, setSelectedRoleCategories] = useState([]);

  const handleRoleCategoryChange = (category) => {
    if (selectedRoleCategories.includes(category)) {
      setSelectedRoleCategories(selectedRoleCategories.filter((selectedCategory) => selectedCategory !== category));
    } else {
      setSelectedRoleCategories([...selectedRoleCategories, category]);
    }
  };

  const handleApplyFilters = () => {
    let filteredJobs = job;

    if (selectedLocations.length > 0) {
      filteredJobs = filteredJobs.filter((job) => selectedLocations.includes(job.location));
    }

    const selectedWorkOptions = Object.keys(workOptions).filter((option) => workOptions[option]);

    if (selectedWorkOptions.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        job.employmentType.some((option) =>
          selectedWorkOptions.includes(option)
        )
      );
    }

    if (selectedSalaryRanges.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        selectedSalaryRanges.includes(job.salary)
      );
    }

    if (selectedRoleCategories.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        selectedRoleCategories.includes(job.roleCategory)
      );
    }

    if (experienceRange) {
      filteredJobs = filteredJobs.filter(
        (job) => job.experiences && job.experiences.includes(experienceRange)
      );
    }

    console.log('Filtered Jobs:', filteredJobs);

    dispatch(setJob(filteredJobs));
    dispatch(handleCount(true));
  };


  const [filterCount, setFilterCount] = useState(0);
  const updateFilterCount = () => {
    const locationCount = selectedLocations.length;
    const workOptionsCount = Object.values(workOptions).filter(option => option).length;
    const salaryRangesCount = selectedSalaryRanges.length;
    const roleCategoriesCount = selectedRoleCategories.length;
    const experienceRangeCount = experienceRange ? 1 : 0;

    const totalCount = locationCount + workOptionsCount + salaryRangesCount + roleCategoriesCount + experienceRangeCount;

    setFilterCount(totalCount);
  };

  useEffect(() => {
    updateFilterCount();
  }, [selectedLocations, workOptions, selectedSalaryRanges, selectedRoleCategories, experienceRange, updateFilterCount]);
  


  return (
    <>
      <div className='morefilters' >
        <div className="filter-count" >
          <h4>All Filters</h4>
          <div>Applied({filterCount})</div>
        </div>
        <div className="filterline"></div>
        <Button className='applybtn' type='primary' onClick={handleApplyFilters} >Apply Filters</Button>

        <div>
          <h5>Work Mode</h5>
          <ul className='workmodeul' >
            <li>
              <input
                type="checkbox"
                id="workFromHome"
                checked={workOptions.workFromHome}
                onChange={() => handleWorkOptionChange('workFromHome')}
              />
              <label htmlFor="workFromHome">Work from Home</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="workFromOffice"
                checked={workOptions.workFromOffice}
                onChange={() => handleWorkOptionChange('workFromOffice')}
              />
              <label htmlFor="workFromOffice">Work from Office</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="R"
                checked={workOptions.Remote}
                onChange={() => handleWorkOptionChange('Remote')}
              />
              <label htmlFor="R">Remote</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="partTime"
                checked={workOptions.partTime}
                onChange={() => handleWorkOptionChange('partTime')}
              />
              <label htmlFor="partTime">Part-time</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="fullTime"
                checked={workOptions.fullTime}
                onChange={() => handleWorkOptionChange('fullTime')}
              />
              <label htmlFor="fullTime">Full-time</label>
            </li>
          </ul>
        </div>

        <div>
          <div className="filterline"></div>
          <h5>Experience Range</h5>
          <Select
            style={{ width: '100%' }}
            placeholder="Select experience range"
            onChange={handleExperienceChange}
            value={experienceRange}
          >
            <Option value="0-5 yrs">0-5 years</Option>
            <Option value="6-10 yrs">6-10 years</Option>
            <Option value="11-15 yrs">11-15 years</Option>
            <Option value="16-20 yrs">16-20 years</Option>
            <Option value="21-25 yrs">21-25 years</Option>
            <Option value="26-30 yrs">26-30 years</Option>
          </Select>
        </div>

        <div>
          <div className="filterline"></div>
          <h5>Locations</h5>
          <ul className='locationul' >
            <li>
              <input
                type="checkbox"
                id="delhi"
                checked={selectedLocations.includes('Delhi')}
                onChange={() => handleLocationChange('Delhi')}
              />
              <label htmlFor="delhi">Delhi</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="chennai"
                checked={selectedLocations.includes('Chennai')}
                onChange={() => handleLocationChange('Chennai')}
              />
              <label htmlFor="chennai">Chennai</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="coimbatore"
                checked={selectedLocations.includes('Coimbatore')}
                onChange={() => handleLocationChange('Coimbatore')}
              />
              <label htmlFor="coimbatore">Coimbatore</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="bangalore"
                checked={selectedLocations.includes('Bangalore')}
                onChange={() => handleLocationChange('Bangalore')}
              />
              <label htmlFor="bangalore">Bangalore</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="hyderabad"
                checked={selectedLocations.includes('Hyderabad')}
                onChange={() => handleLocationChange('Hyderabad')}
              />
              <label htmlFor="hyderabad">Hyderabad</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="mumbai"
                checked={selectedLocations.includes('Mumbai')}
                onChange={() => handleLocationChange('Mumbai')}
              />
              <label htmlFor="mumbai">Mumbai</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="pune"
                checked={selectedLocations.includes('Pune')}
                onChange={() => handleLocationChange('Pune')}
              />
              <label htmlFor="pune">Pune</label>
            </li>
          </ul>
        </div>

        <div>
          <div className="filterline"></div>
          <h5>Role Categories</h5>
          <ul className='roleul' >
            <li>
              <input
                type="checkbox"
                id="softwareDevelopment"
                checked={selectedRoleCategories.includes('Software Development')}
                onChange={() => handleRoleCategoryChange('Software Development')}
              />
              <label htmlFor="softwareDevelopment">Software Development</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="engineering"
                checked={selectedRoleCategories.includes('Engineering')}
                onChange={() => handleRoleCategoryChange('Engineering')}
              />
              <label htmlFor="engineering">Engineering</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="dataScience"
                checked={selectedRoleCategories.includes('Data Science')}
                onChange={() => handleRoleCategoryChange('Data Science')}
              />
              <label htmlFor="dataScience">Data Science</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="machineLearning"
                checked={selectedRoleCategories.includes('Machine Learning')}
                onChange={() => handleRoleCategoryChange('Machine Learning')}
              />
              <label htmlFor="machineLearning">Machine Learning</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="analyst"
                checked={selectedRoleCategories.includes('Analyst')}
                onChange={() => handleRoleCategoryChange('Analyst')}
              />
              <label htmlFor="analyst">Analyst</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="designer"
                checked={selectedRoleCategories.includes('Designer')}
                onChange={() => handleRoleCategoryChange('Designer')}
              />
              <label htmlFor="designer">Designer</label>
            </li>
          </ul>
        </div>

        <div>
          <div className="filterline"></div>
          <h5>Salary Ranges</h5>
          <ul className='salaryul' >
            <li>
              <input
                type="checkbox"
                id="0-3Lakhs"
                checked={selectedSalaryRanges.includes('0-3LPA')}
                onChange={() => handleSalaryRangeChange('0-3Lakhs')}
              />
              <label htmlFor="0-3Lakhs">0-3 Lakhs</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="3-6Lakhs"
                checked={selectedSalaryRanges.includes('3-6LPA')}
                onChange={() => handleSalaryRangeChange('3-6Lakhs')}
              />
              <label htmlFor="3-6Lakhs">3-6 Lakhs</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="6-10Lakhs"
                checked={selectedSalaryRanges.includes('6-10LPA')}
                onChange={() => handleSalaryRangeChange('6-10Lakhs')}
              />
              <label htmlFor="6-10Lakhs">6-10 Lakhs</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="10-15Lakhs"
                checked={selectedSalaryRanges.includes('10-15LPA')}
                onChange={() => handleSalaryRangeChange('10-15Lakhs')}
              />
              <label htmlFor="10-15Lakhs">10-15 Lakhs</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="15-25Lakhs"
                checked={selectedSalaryRanges.includes('15-25LPA')}
                onChange={() => handleSalaryRangeChange('15-25Lakhs')}
              />
              <label htmlFor="15-25Lakhs">15-25 Lakhs</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="25-50Lakhs"
                checked={selectedSalaryRanges.includes('25-50LPA')}
                onChange={() => handleSalaryRangeChange('25-50Lakhs')}
              />
              <label htmlFor="25-50Lakhs">25-50 Lakhs</label>
            </li>
          </ul>
        </div>
        <div className="filterline"></div>
        <button className='applybtn' onClick={handleApplyFilters} >Apply Filters</button>
      </div>
    </>
  )
}

export default Filter