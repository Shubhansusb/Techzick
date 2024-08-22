// import React from 'react';
// import Navbar from './components/Navbar';
// // import WelcomeSection from './components/WelcomeSection';
// import OurOfferings from './components/OurOfferings';
// import ContactUs from './components/ContactUs';
// import backgroundImage from './assets/79compressed.jpg';
// import Testimonials from './components/Testimonials';
// import CompanyIntroCard from './components/CompanyIntroCard';

// const App = () => {
//   return (
//     <div className="min-h-screen overflow-x-hidden">
//       <Navbar />
//       <div className="relative w-full h-screen overflow-hidden">
//         <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
//         <CompanyIntroCard />
//       </div>
//       <div id="ourofferings">
//         <OurOfferings />
//       </div>
//       <div id='testimonials'>
//         <Testimonials />
//       </div>
//       <div id="contactus">
//         <ContactUs />
//       </div>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import Navbar from './components/Navbar';
// import OurOfferings from './components/OurOfferings';
// import ContactUs from './components/ContactUs';
// import backgroundImage from './assets/79compressed.jpg';
// import Testimonials from './components/Testimonials';
// import CompanyIntroCard from './components/CompanyIntroCard';

// const App = () => {
//   return (
//     <div className="min-h-screen overflow-x-hidden">
//       <Navbar />
//       <div className="relative w-full h-screen overflow-hidden bg-gray-200">
//         {/* Preload the background image */}
//         <link rel="preload" href={backgroundImage} as="image" />

//         {/* Placeholder for the background image */}
//         <div className="absolute inset-0 w-full h-full bg-gray-300"></div>

//         <img
//           src={backgroundImage}
//           alt="Background"
//           className="absolute inset-0 w-full h-full object-cover"
//           loading="eager"
//           style={{ opacity: 0, transition: 'opacity 1s ease-in-out' }}
//           onLoad={(e) => e.target.style.opacity = 1}
//         />
        
//         <div id='companyintro'>
//           <CompanyIntroCard />
//         </div>
//       </div>
//       <div id="ourofferings">
//         <OurOfferings />
//       </div>
//       <div id='testimonials'>
//         <Testimonials />
//       </div>
//       <div id="contactus">
//         <ContactUs />
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import Navbar from './components/Navbar';
// // import WelcomeSection from './components/WelcomeSection';
// import OurOfferings from './components/OurOfferings';
// import ContactUs from './components/ContactUs';
// import backgroundImage from './assets/79compressed.jpg';
// import Testimonials from './components/Testimonials';
// import CompanyIntroCard from './components/CompanyIntroCard';

// const App = () => {
//   return (
//     <div className="min-h-screen overflow-x-hidden">
//       <Navbar />
//       <div className="relative w-full h-screen overflow-hidden">
//         <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
//         <CompanyIntroCard />
//       </div>
//       <div id="ourofferings">
//         <OurOfferings />
//       </div>
//       <div id='testimonials'>
//         <Testimonials />
//       </div>
//       <div id="contactus">
//         <ContactUs />
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Navbar from './components/Navbar';
import OurOfferings from './components/OurOfferings';
import ContactUs from './components/ContactUs';
import backgroundImage from './assets/mediumCompressed.jpg';
import Testimonials from './components/Testimonials';
import CompanyIntroCard from './components/CompanyIntroCard';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden bg-gray-200">
        {/* Preload the background image */}
        <link rel="preload" href={backgroundImage} as="image" />

        {/* Placeholder for the background image */}
        <div className="absolute inset-0 w-full h-full bg-gray-300"></div>

        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          style={{ opacity: 0, transition: 'opacity 1s ease-in-out' }}
          onLoad={(e) => e.target.style.opacity = 1}
        />
        
        <div id='companyintro'>
          <CompanyIntroCard />
        </div>
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
