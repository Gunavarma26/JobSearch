// Jobs page

import React from 'react'
import Search from './Search'
import '../style/home.css'
import Filter from './Filter';
import JobsContiner from './JobsContiner';
import Resume from './Resume';
import NavBar from './NavBar';
import Footer from './Footer';


const Jobs = ({ inputRef }) => {

    return (
        <>
            <NavBar />
            <div style={{ backgroundColor: "whitesmoke" }} >
                <div >
                    <Search inputRef={inputRef} />
                </div>
                <div className='fulljobscontiner' >
                    <div className="jobthreedivs">
                        <Filter />
                        <div className='jobcontiner' >
                            <JobsContiner />
                        </div>

                        <div className='homed3' >
                            <Resume />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Jobs