// import React from 'react';
// import Navbar from './components/Navbar';
// import OurOfferings from './components/OurOfferings';
// import ContactUs from './components/ContactUs';
// import backgroundImage from './assets/robo.png';
// import Testimonials from './components/Testimonials';
// import CompanyIntroCard from './components/CompanyIntroCard';
// import './App.css';

// const App = () => {
//   return (
//     <div className="">
//       <Navbar />
//       <div className="relative w-full h-screen overflow-hidden bg-gray-200">
//         {/* <link rel="preload" href={backgroundImage} as="image" /> */}

//         <div className="absolute inset-0 w-full h-full bg-gray-300"></div>

//         {/* <img
//           src={backgroundImage}
//           alt="Background"
//           className="absolute inset-0 w-full h-full object-cover"
//           loading="eager"
//           style={{ opacity: 0, transition: 'opacity 1s ease-in-out' }}
//           onLoad={(e) => e.target.style.opacity = 1}
//         /> */}

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

















import React from 'react';
import Navbar from './components/Navbar';
import OurOfferings from './components/OurOfferings';
import ContactUs from './components/ContactUs';
import backgroundImage from './assets/robo.png';
import Testimonials from './components/Testimonials';
import CompanyIntroCard from './components/CompanyIntroCard';
import './App.css';

const App = () => {
	return (
    <div className='app-container'>
      
			<Navbar />
      <CompanyIntroCard/>
			<div className='background-container'>
				
			</div>

			<div id='ourofferings'>
				<OurOfferings />
			</div>
			<div id='testimonials'>
				<Testimonials />
			</div>
			<div id='contactus'>
				<ContactUs />
			</div>
		</div>
	);
};

export default App;














