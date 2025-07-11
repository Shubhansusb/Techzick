
import Navbar from './components/Navbar';
import OurOfferings from './components/OurOfferings';
import ContactUs from './components/ContactUs';
import Testimonials from './components/Testimonials';
import CompanyIntroCard from './components/CompanyIntroCard';
import './App.css';

const App = () => {
	return (
		<div className='app-container'>
			<Navbar />
			<CompanyIntroCard />
			

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



