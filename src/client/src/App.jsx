import React from 'react';
import Navbar from './components/Navbar';
// import WelcomeSection from './components/WelcomeSection';
import OurOfferings from './components/OurOfferings';
import ContactUs from './components/ContactUs';
import backgroundImage from './assets/79compressed.jpg';
import Testimonials from './components/Testimonials';
import CompanyIntroCard from './components/CompanyIntroCard';

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden">
        <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        <CompanyIntroCard />
      </div>
      <div id="ourofferings">
        <OurOfferings />
      </div>
      <div id='testimonials'>
        <Testimonials />
      </div>
      <div id="contactus">
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
