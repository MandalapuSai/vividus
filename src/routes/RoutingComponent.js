import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactUs from '../pages/ContactUs';
import About from '../pages/About';
import Career from '../pages/Career';
import Product from '../pages/Products';
import Home from '../pages/Home';


const RoutingComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  )
}

export default RoutingComponent;
