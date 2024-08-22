import React from 'react';
import { Button, Typography } from '@mui/material';

const WelcomeSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white flex items-center justify-center h-full">
        <div className="text-center p-8 bg-white bg-opacity-70 rounded-lg">
          <Typography variant="h3" className="font-bold text-black">Local Business Solutions</Typography>
          <Typography variant="body1" className="mt-4 text-black">
            My site provides comprehensive solutions tailored to meet the unique needs of your local business. Our team is dedicated to helping you achieve your business goals by leveraging the power of technology. Let us be your partner in success.
          </Typography>
          <Button variant="contained" color="primary" className="mt-6">Explore Our Services</Button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
