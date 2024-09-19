
// import React, { useState, useEffect } from 'react';
// import { Box, Typography, IconButton } from '@mui/material';
// import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
// import { motion, AnimatePresence } from 'framer-motion';

// const testimonials = [
//   {
//     id: 1,
//     text: "Tech Innovators' <strong>Data Engineering solutions</strong> have transformed our data pipeline, enabling us to deliver insights in real-time. Their team's expertise and commitment to excellence are unmatched.<br /><br /><strong>Neha Singh</strong><br />Chief Data Officer, Quantify Solutions"
//   },
//   {
//     id: 2,
//     text: "Our <strong>front-end development</strong> has never been smoother. Thanks to the responsive and intuitive designs crafted by the team at Techzick , our user engagement has skyrocketed.<br /><br /><strong>Vikram Patel</strong><br />Product Manager, WebCore Inc."
//   },
//   {
//     id: 3,
//     text: "The <strong>IT infrastructure</strong> set up by Techzick  has been a cornerstone of our digital transformation. Their robust solutions have significantly improved our operational efficiency and security.<br /><br /><strong>Rajesh Sharma</strong><br />IT Director, MetroSys Technologies"
//   },
//   {
//     id: 4,
//     text: "Collaborating with <strong>CodeCrafters</strong> on our full-stack development project has been a game-changer. Their attention to detail and innovative approach have brought our ideas to life with precision.<br /><br /><strong>Priya Malhotra</strong><br />CEO, TechWave Solutions"
//   },
//   {
//     id: 5,
//     text: "Techzick has provided us with cutting-edge <strong>analytics tools</strong> that have streamlined our decision-making process. Their focus on security and performance is evident in every solution they deliver.<br /><br /><strong>Amit Rao</strong><br />Head of Analytics, InsightPro"
//   },
//   {
//     id: 6,
//     text: "We entrusted our <strong>front-end development</strong> to the team at Techzick, and they exceeded our expectations. Their modern designs and seamless integration have enhanced our user experience remarkably.<br /><br /><strong>Ankita Desai</strong><br />CTO, Innoventures Pvt Ltd"
//   },
// ];

// const Testimonials = () => {
//   const [current, setCurrent] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isPaused) {
//         handleNext();
//       }
//     }, 7000); // Change testimonial every 7 seconds

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, [isPaused]);

//   const handleNext = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const handleMouseEnter = () => {
//     setIsPaused(true);
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//   };

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         width: '100%',
//         height: '80vh', // Adjust height as needed
//         overflow: 'hidden',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: '#f0f0f0', // Background color for contrast
//       }}
//     >
//       <IconButton
//         onClick={handlePrev}
//         sx={{
//           position: 'absolute',
//           left: '5vw', // Bring closer to the testimonial
//           zIndex: 1,
//           color: '#000', // Customize icon color
//         }}
//       >
//         <ArrowBackIos />
//       </IconButton>

//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           width: '100%',
//         }}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0, x: '5vw' }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: '-5vw' }}
//             transition={{ duration: 0.8, ease: 'easeInOut' }} // Smooth animation
//             style={{
//               width: '80%',
//               maxWidth: '50rem',
//               textAlign: 'center',
//             }}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Typography
//               variant="h5" // Increase the text size
//               sx={{
//                 fontFamily: "Merriweather, serif", // More stylish font
//                 color: '#333', // Text color
//                 padding: '0 2rem', // Add some padding for better readability
//                 lineHeight: 1.6,
//                 '& strong': {
//                   fontWeight: 'bold',
//                   color: '#000', // Bold text color
//                 },
//               }}
//               dangerouslySetInnerHTML={{ __html: testimonials[current].text }}
//             />
//           </motion.div>
//         </AnimatePresence>
//       </Box>

//       <IconButton
//         onClick={handleNext}
//         sx={{
//           position: 'absolute',
//           right: '5vw', // Bring closer to the testimonial
//           zIndex: 1,
//           color: '#000', // Customize icon color
//         }}
//       >
//         <ArrowForwardIos />
//       </IconButton>
//     </Box>
//   );
// };

// export default Testimonials;





// import React, { useState, useEffect } from 'react';
// import { Box, Typography, IconButton } from '@mui/material';
// import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
// import { motion, AnimatePresence } from 'framer-motion';

// const testimonials = [
//   {
//     id: 1,
//     text: "Tech Innovators' <strong>Data Engineering solutions</strong> have transformed our data pipeline, enabling us to deliver insights in real-time. Their team's expertise and commitment to excellence are unmatched.<br /><br /><strong>Neha Singh</strong><br />Chief Data Officer, Quantify Solutions"
//   },
//   {
//     id: 2,
//     text: "Our <strong>front-end development</strong> has never been smoother. Thanks to the responsive and intuitive designs crafted by the team at Techzick, our user engagement has skyrocketed.<br /><br /><strong>Vikram Patel</strong><br />Product Manager, WebCore Inc."
//   },
//   {
//     id: 3,
//     text: "The <strong>IT infrastructure</strong> set up by Techzick has been a cornerstone of our digital transformation. Their robust solutions have significantly improved our operational efficiency and security.<br /><br /><strong>Rajesh Sharma</strong><br />IT Director, MetroSys Technologies"
//   },
//   {
//     id: 4,
//     text: "Collaborating with <strong>CodeCrafters</strong> on our full-stack development project has been a game-changer. Their attention to detail and innovative approach have brought our ideas to life with precision.<br /><br /><strong>Priya Malhotra</strong><br />CEO, TechWave Solutions"
//   },
//   {
//     id: 5,
//     text: "Techzick has provided us with cutting-edge <strong>analytics tools</strong> that have streamlined our decision-making process. Their focus on security and performance is evident in every solution they deliver.<br /><br /><strong>Amit Rao</strong><br />Head of Analytics, InsightPro"
//   },
//   {
//     id: 6,
//     text: "We entrusted our <strong>front-end development</strong> to the team at Techzick, and they exceeded our expectations. Their modern designs and seamless integration have enhanced our user experience remarkably.<br /><br /><strong>Ankita Desai</strong><br />CTO, Innoventures Pvt Ltd"
//   },
// ];

// const Testimonials = () => {
//   const [current, setCurrent] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isPaused) {
//         handleNext();
//       }
//     }, 5000); // Change testimonial every 5 seconds

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, [isPaused]);

//   const handleNext = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const handleMouseEnter = () => {
//     setIsPaused(true);
//   };

//   const handleMouseLeave = () => {
//     setIsPaused(false);
//   };

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         width: '100%',
//         minHeight: '85vh',
//         overflow: 'hidden',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         background: 'linear-gradient(135deg, #1F1C2C 0%, #928DAB 100%)',
//         color: '#fff',
//         padding: '3.75rem 0',
//         textAlign: 'center',
//         '@media (max-width: 600px)': {
//           padding: '2rem 0', // Adjust padding for mobile view
//         },
//       }}
//     >
//       <Box sx={{ position: 'absolute', top: '4rem', width: '100%' }}>
//         <Typography
//           variant="h3"
//           sx={{
//             fontFamily: 'Merriweather, serif',
//             fontWeight: 'bold',
//             color: '#E0E0E0',
//           }}
//         >
//           Testimonials
//         </Typography>
//       </Box>

//       <IconButton
//         onClick={handlePrev}
//         sx={{
//           position: 'absolute',
//           left: '5vw',
//           zIndex: 1,
//           color: '#fff',
//           '@media (max-width: 600px)': {
//             left: '2vw', // Adjust for mobile view
//           },
//         }}
//       >
//         <ArrowBackIos />
//       </IconButton>

//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           width: '100%',
//         }}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0, x: '5vw' }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: '-5vw' }}
//             transition={{ duration: 0.8, ease: 'easeInOut' }}
//             style={{
//               width: '80%',
//               maxWidth: '50rem',
//               textAlign: 'center',
//               '@media (max-width: 600px)': {
//                 width: '90%', // Adjust for mobile view
//                 maxWidth: 'none',
//               },
//             }}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Typography
//               variant="h5"
//               sx={{
//                 fontFamily: 'Merriweather, serif',
//                 color: '#F0F0F0',
//                 padding: '0 2rem',
//                 lineHeight: 1.6,
//                 '& strong': {
//                   fontWeight: 'bold',
//                   color: '#fff',
//                 },
//               }}
//               dangerouslySetInnerHTML={{ __html: testimonials[current].text }}
//             />
//           </motion.div>
//         </AnimatePresence>
//       </Box>

//       <IconButton
//         onClick={handleNext}
//         sx={{
//           position: 'absolute',
//           right: '5vw',
//           zIndex: 1,
//           color: '#fff',
//           '@media (max-width: 600px)': {
//             right: '2vw', // Adjust for mobile view
//           },
//         }}
//       >
//         <ArrowForwardIos />
//       </IconButton>
//     </Box>
//   );
// };

// export default Testimonials;


import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { 
    id: 1, 
    text: "Tech Innovators' <strong>Data Engineering solutions</strong> have transformed our data pipeline, enabling us to deliver insights in real-time. Their team's expertise and commitment to excellence are unmatched.<br /><br /><strong>Neha Singh</strong><br />Chief Data Officer, Quantify Solutions" 
  },
  { 
    id: 2, 
    text: "Our <strong>front-end development</strong> has never been smoother. Thanks to the responsive and intuitive designs crafted by the team at Techzick, our user engagement has skyrocketed.<br /><br /><strong>Vikram Patel</strong><br />Product Manager, WebCore Inc." 
  },
  { 
    id: 3, 
    text: "The <strong>IT infrastructure</strong> set up by Techzick has been a cornerstone of our digital transformation. Their robust solutions have significantly improved our operational efficiency and security.<br /><br /><strong>Rajesh Sharma</strong><br />IT Director, MetroSys Technologies" 
  },
  { 
    id: 4, 
    text: "Collaborating with <strong>CodeCrafters</strong> on our full-stack development project has been a game-changer. Their attention to detail and innovative approach have brought our ideas to life with precision.<br /><br /><strong>Priya Malhotra</strong><br />CEO, TechWave Solutions" 
  },
  { 
    id: 5, 
    text: "Techzick has provided us with cutting-edge <strong>analytics tools</strong> that have streamlined our decision-making process. Their focus on security and performance is evident in every solution they deliver.<br /><br /><strong>Amit Rao</strong><br />Head of Analytics, InsightPro" 
  },
  { 
    id: 6, 
    text: "We entrusted our <strong>front-end development</strong> to the team at Techzick, and they exceeded our expectations. Their modern designs and seamless integration have enhanced our user experience remarkably.<br /><br /><strong>Ankita Desai</strong><br />CTO, Innoventures Pvt Ltd" 
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [isPaused]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '85vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F7F7F7',
        color: '#333333',
        padding: '3.75rem 0',
        textAlign: 'center',
        '@media (max-width: 600px)': {
          padding: '2rem 1rem',
        },
      }}
    >
      <Box sx={{ position: 'absolute', top: '4rem', width: '100%' }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Merriweather, serif',
            fontWeight: 'bold',
            color: '#333333',
            '@media (max-width: 600px)': {
              fontSize: '1.5rem',
            },
          }}
        >
          Testimonials
        </Typography>
      </Box>

      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: '5vw',
          zIndex: 1,
          color: '#333333',
          '@media (max-width: 600px)': {
            left: '2vw',
          },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: '5vw' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-5vw' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{
              width: '80%',
              maxWidth: '50rem',
              textAlign: 'center',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Merriweather, serif',
                color: '#333333',
                padding: '0 2rem',
                lineHeight: 1.6,
                '@media (max-width: 900px)': {
                  padding: '0 1.5rem',
                },
                '@media (max-width: 600px)': {
                  fontSize: '1rem',
                  padding: '0 1rem',
                },
                '& strong': {
                  fontWeight: 'bold',
                  color: '#333333',
                },
              }}
              dangerouslySetInnerHTML={{ __html: testimonials[current].text }}
            />
          </motion.div>
        </AnimatePresence>
      </Box>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: '5vw',
          zIndex: 1,
          color: '#333333',
          '@media (max-width: 600px)': {
            right: '2vw',
          },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Testimonials;
