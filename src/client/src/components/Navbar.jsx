// import React, { useState, useEffect } from 'react';
// import { 
//   AppBar, 
//   Toolbar, 
//   Button, 
//   Typography, 
//   Box, 
//   IconButton, 
//   Drawer, 
//   List, 
//   ListItem, 
//   ListItemText,
//   Container,
//   useScrollTrigger,
//   Slide,
//   CssBaseline
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import { Link } from 'react-scroll';
// import { motion } from 'framer-motion';
// import TechZik from '../assets/TechZik.png';

// function HideOnScroll(props) {
//   const { children } = props;
//   const trigger = useScrollTrigger();

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };

//   const navItems = [
//     { name: 'Why Choose Us', offset: -80 },
//     { name: 'Our Offerings', offset: -80 },
//     { name: 'Testimonials', offset: -80 },
//     { name: 'Contact Us', offset: -80 }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <CssBaseline />
//       <HideOnScroll>
//         <AppBar
//           position="fixed"
//           sx={{
//             background: scrolled 
//               ? 'rgba(26, 26, 40, 0.95)' 
//               : 'linear-gradient(90deg, #4776E6, #8E54E9)',
//             backdropFilter: scrolled ? 'blur(10px)' : 'none',
//             boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
//             transition: 'all 0.4s ease',
//             padding: { xs: '0', md: '0 24px' },
//             borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
//           }}
//         >
//           <Container maxWidth="xl">
//             <Toolbar sx={{ 
//               display: 'flex', 
//               justifyContent: 'space-between', 
//               alignItems: 'center',
//               padding: { xs: '0', md: '0' }
//             }}>
//               <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Link
//                     to="home"
//                     smooth={true}
//                     duration={1000}
//                     spy={true}
//                   >
//                     <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
//                       <img 
//                         src={TechZik} 
//                         alt="Techzick Logo" 
//                         style={{ 
//                           height: '48px', 
//                           marginRight: '12px',
//                           filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
//                         }} 
//                       />
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           fontWeight: 700,
//                           color: '#ffffff',
//                           fontFamily: "'Raleway', sans-serif",
//                           letterSpacing: '0.05em',
//                           textShadow: '0 2px 4px rgba(0,0,0,0.2)',
//                           fontSize: { xs: '1.25rem', md: '1.5rem' }
//                         }}
//                       >
//                         Techzick
//                       </Typography>
//                     </Box>
//                   </Link>
//                 </motion.div>
//               </Box>

//               <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.name}
//                     whileHover={{ y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Link
//                       to={item.name.toLowerCase().replace(/ /g, '')}
//                       smooth={true}
//                       duration={1000}
//                       spy={true}
//                       offset={item.offset}
//                     >
//                       <Button
//                         color="inherit"
//                         sx={{
//                           fontSize: '1rem',
//                           color: '#ffffff',
//                           fontWeight: 600,
//                           fontFamily: "'Poppins', sans-serif",
//                           marginLeft: '12px',
//                           padding: '8px 20px',
//                           position: 'relative',
//                           overflow: 'hidden',
//                           borderRadius: '30px',
//                           '&:hover': {
//                             backgroundColor: 'rgba(255, 255, 255, 0.15)',
//                           },
//                           '&::after': {
//                             content: '""',
//                             position: 'absolute',
//                             bottom: 0,
//                             left: 0,
//                             width: '0%',
//                             height: '2px',
//                             background: 'white',
//                             transition: 'width 0.3s ease',
//                           },
//                           '&:hover::after': {
//                             width: '100%',
//                           }
//                         }}
//                       >
//                         {item.name}
//                       </Button>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </Box>

//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 edge="end"
//                 onClick={handleDrawerToggle}
//                 sx={{ 
//                   display: { xs: 'block', md: 'none' }, 
//                   color: '#ffffff',
//                   zIndex: 1300
//                 }}
//               >
//                 <MenuIcon sx={{ fontSize: '2rem' }} />
//               </IconButton>
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </HideOnScroll>

//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={handleDrawerClose}
//         sx={{ 
//           display: { xs: 'block', md: 'none' },
//           '& .MuiDrawer-paper': {
//             width: '280px',
//             background: 'linear-gradient(135deg, #1F1C2C, #3A2E58)',
//             backdropFilter: 'blur(10px)',
//             boxShadow: '0 0 30px rgba(0,0,0,0.5)',
//           }
//         }}
//         transitionDuration={300}
//       >
//         <Box
//           sx={{ 
//             width: '100%',
//             height: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//           }}
//           role="presentation"
//         >
//           <Box sx={{ 
//             display: 'flex', 
//             justifyContent: 'flex-end',
//             padding: '16px'
//           }}>
//             <IconButton
//               onClick={handleDrawerClose}
//               sx={{ color: 'white' }}
//             >
//               <CloseIcon sx={{ fontSize: '1.8rem' }} />
//             </IconButton>
//           </Box>
          
//           <List sx={{ flexGrow: 1, padding: '20px' }}>
//             {navItems.map((item) => (
//               <ListItem 
//                 key={item.name} 
//                 sx={{ 
//                   padding: '12px 0',
//                   justifyContent: 'center',
//                   '&:hover': {
//                     backgroundColor: 'rgba(255,255,255,0.1)',
//                     borderRadius: '8px'
//                   }
//                 }}
//               >
//                 <Link
//                   to={item.name.toLowerCase().replace(/ /g, '')}
//                   smooth={true}
//                   duration={1000}
//                   spy={true}
//                   offset={item.offset}
//                   onClick={handleDrawerClose}
//                   style={{ width: '100%', textAlign: 'center' }}
//                 >
//                   <ListItemText
//                     primary={item.name}
//                     primaryTypographyProps={{
//                       sx: {
//                         color: '#ffffff',
//                         fontFamily: "'Poppins', sans-serif",
//                         fontWeight: 500,
//                         fontSize: '1.2rem',
//                         letterSpacing: '0.5px',
//                         textAlign: 'center',
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                           color: '#FFD700',
//                         }
//                       }
//                     }}
//                   />
//                 </Link>
//               </ListItem>
//             ))}
//           </List>
          
//           <Box sx={{ 
//             padding: '20px', 
//             textAlign: 'center',
//             borderTop: '1px solid rgba(255,255,255,0.1)'
//           }}>
//             <Typography 
//               variant="body2" 
//               sx={{ 
//                 color: 'rgba(255,255,255,0.7)', 
//                 fontFamily: "'Poppins', sans-serif",
//                 marginBottom: '10px'
//               }}
//             >
//               Connect with us
//             </Typography>
//             <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
//               {['linkedin', 'instagram', 'whatsapp'].map((platform) => (
//                 <IconButton
//                   key={platform}
//                   sx={{ 
//                     color: 'white',
//                     backgroundColor: 'rgba(255,255,255,0.1)',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255,255,255,0.2)',
//                     }
//                   }}
//                 >
//                   <Box 
//                     component="span" 
//                     className={`fab fa-${platform}`} 
//                     sx={{ fontSize: '1.2rem' }}
//                   />
//                 </IconButton>
//               ))}
//             </Box>
//           </Box>
//         </Box>
//       </Drawer>
      
//       {/* Spacer to prevent content from being hidden behind the fixed navbar */}
//       <Toolbar id="back-to-top-anchor" />
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Typography, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Container,
  useScrollTrigger,
  Slide,
  CssBaseline
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';
import TechZik from '../../src/assets/TechZik.png';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleDrawerClose = () => setDrawerOpen(false);

  const navItems = [
    { name: 'Why Choose Us', offset: -80 },
    { name: 'Our Offerings', offset: -80 },
    { name: 'Testimonials', offset: -80 },
    { name: 'Contact Us', offset: -80 }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
            transition: 'all 0.3s ease',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: { xs: '0', md: '0' }
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link to="home" smooth={true} duration={1000} spy={true}>
                  <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <img 
                      src={TechZik} 
                      alt="Techzick Logo" 
                      style={{ height: '42px', marginRight: '10px' }} 
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: { xs: '1.2rem', md: '1.4rem' }
                      }}
                    >
                      Techzick
                    </Typography>
                  </Box>
                </Link>
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.name.toLowerCase().replace(/ /g, '')}
                    smooth={true}
                    duration={1000}
                    spy={true}
                    offset={item.offset}
                  >
                    <Button
                      color="inherit"
                      sx={{
                        fontSize: '0.95rem',
                        color: 'text.primary',
                        fontWeight: 500,
                        marginLeft: '20px',
                        padding: '6px 16px',
                        borderRadius: 0,
                        position: 'relative',
                        '&:hover': {
                          backgroundColor: 'transparent',
                        },
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '0%',
                          height: '2px',
                          backgroundColor: 'primary.main',
                          transition: 'width 0.3s ease',
                        },
                        '&:hover:after': {
                          width: '100%',
                        }
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </Box>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ 
                  display: { xs: 'block', md: 'none' }, 
                  color: 'text.primary'
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box
          sx={{ width: 280, height: '100%', display: 'flex', flexDirection: 'column' }}
          role="presentation"
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          <List sx={{ flexGrow: 1, px: 3 }}>
            {navItems.map((item) => (
              <ListItem 
                key={item.name} 
                sx={{ 
                  py: 1.5,
                  justifyContent: 'center',
                  borderBottom: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                <Link
                  to={item.name.toLowerCase().replace(/ /g, '')}
                  smooth={true}
                  duration={1000}
                  spy={true}
                  offset={item.offset}
                  onClick={handleDrawerClose}
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      sx: {
                        color: 'text.primary',
                        fontWeight: 500,
                        fontSize: '1.1rem',
                        '&:hover': {
                          color: 'primary.main',
                        }
                      }
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      
      <Toolbar />
    </>
  );
};

export default Navbar;