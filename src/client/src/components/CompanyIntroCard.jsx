// import React from 'react';
// import { Card, CardContent, Typography } from '@mui/material';

// const CompanyIntroCard = () => {
//   return (
//     <Card
//       sx={{
//         maxWidth: '100vw',
//         height: 280,
//         backgroundColor: '#f0f0f0',
//         border: '3px solid #ccc',
//         borderRadius: '15px',
//         boxShadow: '0px 4px 120px rgba(0, 0, 0, 0.1)',
//         padding: '5px',
//         position: 'absolute',
//         top: '45%',
//         left: '70%',
//         transform: 'translate(-50%, -50%)',
//         '&:before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           border: '1px solid #ccc',
//           borderRadius: '10px',
//           transform: 'translateZ(10px)',
//           boxShadow: '0px 4px 120px rgba(0, 0, 0, 0.1)',
//         },
//         '&:after': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           border: '1px solid #ccc',
//           borderRadius: '10px',
//           transform: 'translateZ(-10px)',
//           boxShadow: '0px 4px 120px rgba(0, 0, 0, 0.1)',
//         },
//         '&:hover': {
//           boxShadow: '0px 10px 120px rgba(0, 0, 0, 0.2)',
//           transition: 'box-shadow 1.2s ease-in-out',
//         },
//       }}
//     >
//       <CardContent>
//         <Typography
//           variant="h5"
//           component="div"
//           sx={{
//             fontWeight: 'Bold',
//             fontFamily: 'Merriweather, serif',
//             textAlign: 'center',
//             color: '#1A2A6C',
//             marginBottom: '20px',
//           }}
//         >
//           Company Name / Something
//         </Typography>
//         <Typography
//           variant="h6"
//           sx={{
//             fontSize: '18px',
//             fontFamily: 'Merriweather, serif',
//             textAlign: 'justify',
//             color: '#666',
//           }}
//         >
//           At Tech Innovators, we specialize in harnessing the power of data to
//           unlock meaningful insights, drive innovation, and deliver robust
//           software solutions. Our expertise spans data engineering, analytics,
//           IT consulting, and cybersecurity.
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyIntroCard;
//above is no animation

// import React from 'react';
// import { Card, CardContent, Typography } from '@mui/material';

// const CompanyIntroCard = () => {
//   return (
//     <Card
//       sx={{
//         maxWidth: '100vw',
//         height: 280,
//         backgroundColor: '#f0f0f0',
//         border: '3px solid #ccc',
//         borderRadius: '15px',
//         boxShadow: '0px 4px 120px rgba(0, 0, 0, 0.1)',
//         padding: '5px',
//         position: 'absolute',
//         top: '45%',
//         left: '70%',
//         transform: 'translate(-50%, -50%)',
//         animation: 'fadeInScale 1.5s ease-in-out',
//         '&:hover': {
//           boxShadow: '0px 10px 120px rgba(0, 0, 0, 0.2)',
//           transition: 'box-shadow 1.2s ease-in-out',
//         },
//         '@keyframes fadeInScale': {
//           '0%': {
//             opacity: 0,
//             transform: 'translate(-50%, -50%) scale(0.8)',
//           },
//           '100%': {
//             opacity: 1,
//             transform: 'translate(-50%, -50%) scale(1)',
//           },
//         },
//       }}
//     >
//       <CardContent>
//         <Typography
//           variant="h5"
//           component="div"
//           sx={{
//             fontWeight: 'Bold',
//             fontFamily: 'Merriweather, serif',
//             textAlign: 'center',
//             color: '#1A2A6C',
//             marginBottom: '20px',
//           }}
//         >
//           Company Name / Something
//         </Typography>
//         <Typography
//           variant="h6"
//           sx={{
//             fontSize: '18px',
//             fontFamily: 'Merriweather, serif',
//             textAlign: 'justify',
//             color: '#666',
//           }}
//         >
//           At Tech Innovators, we specialize in harnessing the power of data to
//           unlock meaningful insights, drive innovation, and deliver robust
//           software solutions. Our expertise spans data engineering, analytics,
//           IT consulting, and cybersecurity.
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyIntroCard;


// import React from 'react';
// import { Card, CardContent, Typography } from '@mui/material';

// const CompanyIntroCard = () => {
//   return (
//     <Card
//       sx={{
//         maxWidth: '100vw',
//         height: 280,
//         backgroundColor: '#f0f0f0',
//         border: '3px solid #ccc',
//         borderRadius: '15px',
//         boxShadow: '0px 4px 120px rgba(0, 0, 0, 0.1)',
//         padding: '5px',
//         position: 'absolute',
//         top: '45%',
//         left: '70%',
//         transform: 'translate(-50%, -50%)',
//         animation: 'flipIn 1.5s ease-in-out',
//         '&:hover': {
//           boxShadow: '0px 10px 120px rgba(0, 0, 0, 0.2)',
//           transition: 'box-shadow 1.2s ease-in-out',
//         },
//         '@keyframes flipIn': {
//           '0%': {
//             opacity: 0,
//             transform: 'translate(-50%, -50%) rotateY(-90deg)',
//           },
//           '100%': {
//             opacity: 1,
//             transform: 'translate(-50%, -50%) rotateY(0deg)',
//           },
//         },
//       }}
//     >
//       <CardContent>
//         <Typography
//           variant="h5"
//           component="div"
//           sx={{
//             fontWeight: 'Bold',
//             fontFamily: 'Merriweather, serif',
//             textAlign: 'center',
//             color: '#1A2A6C',
//             marginBottom: '20px',
//           }}
//         >
//           Company Name / Something
//         </Typography>
//         <Typography
//           variant="h6"
//           sx={{
//             fontSize: '18px',
//             fontFamily: 'Merriweather, serif',
//             textAlign: 'justify',
//             color: '#666',
//           }}
//         >
//           At Tech Innovators, we specialize in harnessing the power of data to
//           unlock meaningful insights, drive innovation, and deliver robust
//           software solutions. Our expertise spans data engineering, analytics,
//           IT consulting, and cybersecurity.
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyIntroCard;


// import React from 'react';
// import { Card, CardContent, Typography } from '@mui/material';

// const CompanyIntroCard = () => {
//   return (
//     <Card
//       sx={{
//         width: '40rem', // Adjust the width of the card
//         height: '18rem', // Adjust the height of the card
//         backgroundColor: '#f0f0f0',
//         border: '0.2rem solid #ccc', // Adjusted using rem
//         borderRadius: '1rem', // Adjusted using rem
//         boxShadow: '0px 0.25rem 7.5rem rgba(0, 0, 0, 0.1)', // Adjusted using rem
//         padding: '1em', // Adjusted using em
//         position: 'absolute',
//         top: '45%',
//         left: '70%',
//         transform: 'translate(-50%, -50%)',
//         animation: 'flipIn 1.5s ease-in-out',
//         '&:hover': {
//           boxShadow: '0px 0.625rem 7.5rem rgba(0, 0, 0, 0.2)', // Adjusted using rem
//           transition: 'box-shadow 1.2s ease-in-out',
//         },
//         '@keyframes flipIn': {
//           '0%': {
//             opacity: 0,
//             transform: 'translate(-50%, -50%) rotateY(-90deg)',
//           },
//           '100%': {
//             opacity: 1,
//             transform: 'translate(-50%, -50%) rotateY(0deg)',
//           },
//         },
//       }}
//     >
//       <CardContent>
//         <Typography
//           variant="h5"
//           component="div"
//           sx={{
//             fontWeight: 'Bold',
//             fontFamily: 'Merriweather, serif',
//             textAlign: 'center',
//             color: '#1A2A6C',
//             marginBottom: '1.25em', // Adjusted using em
//           }}
//         >
//           Company Name / Something
//         </Typography>
//         <Typography
//           variant="h6"
//           sx={{
//             fontSize: '1.125rem', // Adjusted using rem
//             fontFamily: 'Merriweather, serif',
//             textAlign: 'justify',
//             color: '#666',
//           }}
//         >
//           At Tech Innovators, we specialize in harnessing the power of data to
//           unlock meaningful insights, drive innovation, and deliver robust
//           software solutions. Our expertise spans data engineering, analytics,
//           IT consulting, and cybersecurity.
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyIntroCard;


// import React from 'react';
// import { Card, CardContent, Typography } from '@mui/material';

// const CompanyIntroCard = () => {
//   return (
//     <Card
//       sx={{
//         width: '40rem', // Adjust the width of the card
//         height: '18rem', // Adjust the height of the card
//         backgroundColor: '#f0f0f0',
//         border: '0.2rem solid #ccc', // Adjusted using rem
//         borderRadius: '1rem', // Adjusted using rem
//         boxShadow: '0px 0.25rem 7.5rem rgba(0, 0, 0, 0.1)', // Adjusted using rem
//         padding: '1em', // Adjusted using em
//         position: 'absolute',
//         top: '45%',
//         left: '70%',
//         transform: 'translate(-50%, -50%) scale(0.9)', // Start slightly smaller
//         animation: 'fadeInAndScale 1.5s ease-in-out forwards', // Animation with scale
//         '&:hover': {
//           boxShadow: '0px 0.625rem 7.5rem rgba(0, 0, 0, 0.2)', // Adjusted using rem
//           transition: 'box-shadow 1.2s ease-in-out',
//         },
//         '@keyframes fadeInAndScale': {
//           '0%': {
//             opacity: 0,
//             transform: 'translate(-50%, -50%) scale(0.9)', // Start small and transparent
//           },
//           '100%': {
//             opacity: 1,
//             transform: 'translate(-50%, -50%) scale(1)', // End at normal size
//           },
//         },
//       }}
//     >
//       <CardContent>
//         <Typography
//           variant="h5"
//           component="div"
//           sx={{
//             fontWeight: 'Bold',
//             fontFamily: 'Merriweather, serif',
//             textAlign: 'center',
//             color: '#1A2A6C',
//             marginBottom: '1.25em', // Adjusted using em
//           }}
//         >
//           Company Name / Something
//         </Typography>
//         <Typography
//           variant="h6"
//           sx={{
//             fontSize: '1.125rem', // Adjusted using rem
//             fontFamily: 'Merriweather, serif',
//             textAlign: 'justify',
//             color: '#666',
//           }}
//         >
//           At Tech Innovators, we specialize in harnessing the power of data to
//           unlock meaningful insights, drive innovation, and deliver robust
//           software solutions. Our expertise spans data engineering, analytics,
//           IT consulting, and cybersecurity.
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default CompanyIntroCard;


import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CompanyIntroCard = () => {
  return (
    <Card
      sx={{
        width: '40rem', // Adjust the width of the card
        height: '18rem', // Adjust the height of the card
        backgroundColor: '#f0f0f0',
        border: '0.1rem solid #ccc', // Adjusted using rem
        borderRadius: '0rem', // Adjusted using rem
        boxShadow: '0px 0.25rem 7.5rem rgba(0, 0, 0, 0.1)', // Adjusted using rem
        padding: '1em', // Adjusted using em
        position: 'absolute',
        top: '45%',
        left: '70%',
        transform: 'translate(-50%, -50%) translateX(20rem)', // Start slightly off-screen
        opacity: 0, // Start transparent
        animation: 'slideIn 1.5s ease-out forwards', // Slide and fade-in animation
        '&:hover': {
          boxShadow: '0px 0.625rem 7.5rem rgba(0, 0, 0, 0.2)', // Adjusted using rem
          transition: 'box-shadow 0.5s ease-in-out',
        },
        '@keyframes slideIn': {
          '0%': {
            opacity: 0,
            transform: 'translate(-50%, -50%) translateX(20rem)', // Start from the right
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%, -50%) translateX(0)', // End at the specified location
          },
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 'Bold',
            fontFamily: 'Merriweather, serif',
            textAlign: '',
            color: '#1A2A6C',
            marginBottom: '1em', // Adjusted using em
          }}
        >
          Why Choose Techzick ?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.125rem', // Adjusted using rem
            fontFamily: 'Merriweather, serif',
            textAlign: 'justify',
            color: 'black',
          }}
        >
         Our expertise drives innovation across key areas like Data Engineering, Full Stack Development, Front-End Development, and IT Infrastructure Services. We deliver tailored solutions that empower businesses to thrive in a digital world, from strategy to execution. Our approach combines deep industry knowledge with cutting-edge technology, ensuring that every project meets the highest standards of excellence and client satisfaction. 
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CompanyIntroCard;
