// App page

import React, { useRef,} from 'react'
import Job from './Job'
import Home from './Home'
import Jobs from './Jobs'
import { Route, Routes,} from 'react-router-dom'
import Profile from './Profile'
import ContactUs from './ContactUs'
import DrawerPage from './Drawer'
import LoginPage from './Login'
import Register from './Register'


const App = () => {

  const inputRef = useRef()

  return (
    <div>

      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home inputRef={inputRef} />} />
        <Route path='/job/details' element={<Job />} />
        <Route path='/jobs' element={<Jobs inputRef={inputRef}  />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>

    </div>
  )
}

export default App