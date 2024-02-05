// home page 

import React from 'react'
import JobsContiner from './JobsContiner';
import Value from './Value';
import Search from './Search'
import Filter from './Filter';
import Resume from './Resume';
import Company from './Company';
import '../style/home.css'
import '../style/filter.css'
import NavBar from './NavBar';
import Footer from './Footer';

const Home = ({ inputRef }) => {

  return (
    <div>
      <NavBar />
      <Search inputRef={inputRef} />
      <div className="threedivs">
        <Filter />
        <div className='homecontiner'>
          <JobsContiner />
        </div>
        <div className='homed3' >
          <Resume />
          <Company />
        </div>
      </div>
      <Value inputRef={inputRef} />
      <Footer />
    </div>
  )
}

export default Home