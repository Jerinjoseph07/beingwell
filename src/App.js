import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';


import ResponsiveNavbar from './Components/Admin/ResponsiveNavbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Contact from './Components/Pages/Contact';
import Collegedetails from './Components/College/Collegedetails';

import Professionaldetails from './Components/Professionals/Professionaldetails';
import College from './Components/College/College';
import Professional from './Components/Professionals/Professional';
import User from './Components/User/User';
import Userdetails from './Components/User/Userdetails';


const App = () => {
  return (
     <Router>
    
         <ResponsiveNavbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/home"  element={<Home/>} />
           <Route path="/about"  element={<About/>} />
       <Route path="/services"  element={<Services/>} />
          <Route path="/contact"  element={<Contact/>} />
           <Route path="/addcollege"  element={<College/>} />
          <Route path="/college"  element={<Collegedetails/>} />
          <Route path="/addprofessional"  element={<Professional/>} />
          <Route path="/professional"  element={<Professionaldetails/>} />
          <Route path='/adduser' element={<User/>}/>
          <Route path='/user' element={<Userdetails/>}/>
           </Routes>
    
     </Router>

  );
};

export default App;
