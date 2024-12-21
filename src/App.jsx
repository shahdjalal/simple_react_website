import React from 'react';
import Navbar from './assets/components/navbar/Navbar.jsx';
import Home from './assets/components/home/Home.jsx';
import Port from './assets/components/portfolio/Port.jsx';
import About from './assets/components/about/About.jsx';
import Contact from './assets/components/contact/Contact.jsx';
import Footer from './assets/components/footer/Footer.jsx';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    
  
    <Navbar />
    <Home />
    <Routes>

     
      <Route path='/' element={<Port />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    

    </Routes>
   
  
  
  
   <Footer />
    
    </>
   
  )
}
