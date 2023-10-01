import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Homepage from './Homepage';
import Aboutus from './Aboutus';
import Event from './Event';
import Sponsers from './Sponsers';
import Navbar from './Navbar';
import Tempcss from './Tempcss.css';

const Temp = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Sponsers" element={<Sponsers />} />
      </Routes>
    </div>
  );
};

export default Temp;
