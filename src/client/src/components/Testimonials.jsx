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
//         background: '#F7F7F7',
//         color: '#333333',
//         padding: '3.75rem 0',
//         textAlign: 'center',
//         '@media (max-width: 600px)': {
//           padding: '2rem 1rem',
//         },
//       }}
//     >
//       <Box sx={{ position: 'absolute', top: '4rem', width: '100%' }}>
//         <Typography
//           variant="h3"
//           sx={{
//             fontFamily: 'Merriweather, serif',
//             fontWeight: 'bold',
//             color: '#333333',
//             '@media (max-width: 600px)': {
//               fontSize: '1.5rem',
//             },
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
//           color: '#333333',
//           '@media (max-width: 600px)': {
//             left: '2vw',
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
//             }}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Typography
//               variant="h5"
//               sx={{
//                 fontFamily: 'Merriweather, serif',
//                 color: '#333333',
//                 padding: '0 2rem',
//                 lineHeight: 1.6,
//                 '@media (max-width: 900px)': {
//                   padding: '0 1.5rem',
//                 },
//                 '@media (max-width: 600px)': {
//                   fontSize: '1rem',
//                   padding: '0 1rem',
//                 },
//                 '& strong': {
//                   fontWeight: 'bold',
//                   color: '#333333',
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
//           color: '#333333',
//           '@media (max-width: 600px)': {
//             right: '2vw',
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
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const testimonials = [
  { 
    id: 1, 
    text: "Tech Innovators' <strong>Data Engineering solutions</strong> have transformed our data pipeline, enabling us to deliver insights in real-time. Their team's expertise and commitment to excellence are unmatched.",
    attribution: "Neha Singh<br />Chief Data Officer, Quantify Solutions"
  },
  { 
    id: 2, 
    text: "Our <strong>front-end development</strong> has never been smoother. Thanks to the responsive and intuitive designs crafted by the team at Techzick, our user engagement has skyrocketed.",
    attribution: "Vikram Patel<br />Product Manager, WebCore Inc."
  },
  { 
    id: 3, 
    text: "The <strong>IT infrastructure</strong> set up by Techzick has been a cornerstone of our digital transformation. Their robust solutions have significantly improved our operational efficiency and security.",
    attribution: "Rajesh Sharma<br />IT Director, MetroSys Technologies"
  },
  { 
    id: 4, 
    text: "Collaborating with <strong>CodeCrafters</strong> on our full-stack development project has been a game-changer. Their attention to detail and innovative approach have brought our ideas to life with precision.",
    attribution: "Priya Malhotra<br />CEO, TechWave Solutions"
  },
  { 
    id: 5, 
    text: "Techzick has provided us with cutting-edge <strong>analytics tools</strong> that have streamlined our decision-making process. Their focus on security and performance is evident in every solution they deliver.",
    attribution: "Amit Rao<br />Head of Analytics, InsightPro"
  },
  { 
    id: 6, 
    text: "We entrusted our <strong>front-end development</strong> to the team at Techzick, and they exceeded our expectations. Their modern designs and seamless integration have enhanced our user experience remarkably.",
    attribution: "Ankita Desai<br />CTO, Innoventures Pvt Ltd"
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(45deg, #0f2027, #203a43, #2c5364)' 
          : 'linear-gradient(45deg, #f8f9fa, #e9ecef, #dee2e6)',
        color: theme.palette.text.primary,
        py: 10,
        px: 2,
        overflow: 'hidden',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Merriweather, serif',
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          Client Testimonials
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: 'Open Sans, sans-serif',
            color: theme.palette.text.secondary,
            maxWidth: 600,
            mx: 'auto',
            fontSize: { xs: '0.9rem', md: '1.1rem' },
          }}
        >
          Hear what our clients say about our services and solutions
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1200px',
          position: 'relative',
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            left: { xs: 0, md: '2%' },
            zIndex: 1,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[4],
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
            mx: { xs: 1, md: 0 },
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <Box
          sx={{
            width: { xs: '90%', md: '80%' },
            maxWidth: '900px',
            position: 'relative',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ width: '100%' }}
            >
              <Box
                sx={{
                  background: theme.palette.background.paper,
                  borderRadius: 4,
                  boxShadow: theme.shadows[6],
                  p: { xs: 3, md: 6 },
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }}
                />
                
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Merriweather, serif',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    lineHeight: 1.8,
                    mb: 3,
                    fontSize: { xs: '1.1rem', md: '1.4rem' },
                    color: theme.palette.text.primary,
                    '& strong': {
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: testimonials[current].text }}
                />
                
                <Box
                  sx={{
                    width: 80,
                    height: 4,
                    background: theme.palette.divider,
                    mx: 'auto',
                    mb: 3,
                  }}
                />
                
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: 600,
                    color: theme.palette.text.secondary,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    '& strong': {
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                    },
                  }}
                  dangerouslySetInnerHTML={{ __html: testimonials[current].attribution }}
                />
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            right: { xs: 0, md: '2%' },
            zIndex: 1,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[4],
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
            mx: { xs: 1, md: 0 },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        {testimonials.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => goToTestimonial(index)}
            sx={{
              p: 0.5,
              color: index === current ? theme.palette.primary.main : theme.palette.action.disabled,
              '&:hover': {
                color: theme.palette.primary.main,
              },
            }}
          >
            <FiberManualRecordIcon
              sx={{
                fontSize: index === current ? '1.2rem' : '0.8rem',
                transition: 'font-size 0.3s',
              }}
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;