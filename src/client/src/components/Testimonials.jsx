
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
//     text: "Our <strong>front-end development</strong> has never been smoother. Thanks to the responsive and intuitive designs crafted by the team at DesignMasters, our user engagement has skyrocketed.<br /><br /><strong>Vikram Patel</strong><br />Product Manager, WebCore Inc."
//   },
//   {
//     id: 3,
//     text: "The <strong>IT infrastructure</strong> set up by Techzick Innovators has been a cornerstone of our digital transformation. Their robust solutions have significantly improved our operational efficiency and security.<br /><br /><strong>Rajesh Sharma</strong><br />IT Director, MetroSys Technologies"
//   },
//   {
//     id: 4,
//     text: "Collaborating with <strong>CodeCrafters</strong> on our full-stack development project has been a game-changer. Their attention to detail and innovative approach have brought our ideas to life with precision.<br /><br /><strong>Priya Malhotra</strong><br />CEO, TechWave Solutions"
//   },
//   {
//     id: 5,
//     text: "DataWorks Solutions has provided us with cutting-edge <strong>analytics tools</strong> that have streamlined our decision-making process. Their focus on security and performance is evident in every solution they deliver.<br /><br /><strong>Amit Rao</strong><br />Head of Analytics, InsightPro"
//   },
//   {
//     id: 6,
//     text: "We entrusted our <strong>front-end development</strong> to the team at DevMasters Inc., and they exceeded our expectations. Their modern designs and seamless integration have enhanced our user experience remarkably.<br /><br /><strong>Ankita Desai</strong><br />CTO, Innoventures Pvt Ltd"
//   },
// ];

// const Testimonials = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 7000); // Change testimonial every 4 seconds

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, []);

//   const handleNext = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
//         <AnimatePresence mode="wait"> {/* Replace exitBeforeEnter with mode='wait' */}
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
    text: "Our <strong>front-end development</strong> has never been smoother. Thanks to the responsive and intuitive designs crafted by the team at Techzick , our user engagement has skyrocketed.<br /><br /><strong>Vikram Patel</strong><br />Product Manager, WebCore Inc." 
  },
  { 
    id: 3, 
    text: "The <strong>IT infrastructure</strong> set up by Techzick  has been a cornerstone of our digital transformation. Their robust solutions have significantly improved our operational efficiency and security.<br /><br /><strong>Rajesh Sharma</strong><br />IT Director, MetroSys Technologies" 
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
    }, 7000); // Change testimonial every 7 seconds

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
        height: '80vh', // Adjust height as needed
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f0f0f0', // Background color for contrast
      }}
    >
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: '5vw', // Bring closer to the testimonial
          zIndex: 1,
          color: '#000', // Customize icon color
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
            transition={{ duration: 0.8, ease: 'easeInOut' }} // Smooth animation
            style={{
              width: '80%',
              maxWidth: '50rem',
              textAlign: 'center',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Typography
              variant="h5" // Increase the text size
              sx={{
                fontFamily: "Merriweather, serif", // More stylish font
                color: '#333', // Text color
                padding: '0 2rem', // Add some padding for better readability
                lineHeight: 1.6,
                '& strong': {
                  fontWeight: 'bold',
                  color: '#000', // Bold text color
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
          right: '5vw', // Bring closer to the testimonial
          zIndex: 1,
          color: '#000', // Customize icon color
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Testimonials;
