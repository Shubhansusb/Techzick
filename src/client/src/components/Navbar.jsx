// import React from 'react';
// import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-scroll';
// import Final from '../assets/final.jpg';

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };

//   const navItems = ['Why Choose Us', 'Our Offerings', 'Testimonials', 'Contact Us'];

//   return (
//     <>
//       <AppBar
//         position="static"
//         sx={{
//           background: '#1A1D23',
//           boxShadow: 'none',
//           padding: { xs: '8px 16px', md: '12px 24px' },
//           borderRadius: '0px',
//         }}
//       >
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <img src={Final} alt="Techzick Logo" style={{ height: '40px', marginRight: '8px' }} />
//             <Typography
//               variant="h4"
//               sx={{
//                 fontWeight: 'bold',
//                 color: '#ffffff',
//                 fontFamily: 'Merriweather, serif',
//                 letterSpacing: '0.04em',
//               }}
//             >
//               Techzick
//             </Typography>
//           </Box>

//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 to={item.toLowerCase().replace(/ /g, '')}
//                 smooth={true}
//                 duration={1000}
//                 spy={true}
//               >
//                 <Button
//                   color="inherit"
//                   sx={{
//                     fontSize: { xs: '0.7rem', md: '0.8rem' },
//                     color: '#ffffff',
//                     fontWeight: '540',
//                     fontFamily: 'sans-serif',
//                     marginRight: 0.1,
//                     padding: '8px 16px',
//                     '&:hover': {
//                       backgroundColor: '#50577A',
//                       borderRadius: '10px',
//                     },
//                   }}
//                 >
//                   {item}
//                 </Button>
//               </Link>
//             ))}
//           </Box>

//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="end"
//             onClick={handleDrawerToggle}
//             sx={{ display: { xs: 'block', md: 'none' }, color: '#ffffff' }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={handleDrawerClose}
//         sx={{ display: { xs: 'block', md: 'none' } }}
//       >
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={handleDrawerClose}
//           onKeyDown={handleDrawerClose}
//         >
//           <List>
//             {navItems.map((item) => (
//               <ListItem button key={item} onClick={handleDrawerClose}>
//                 <Link
//                   to={item.toLowerCase().replace(/ /g, '')}
//                   smooth={true}
//                   duration={1000}
//                   spy={true}
//                   onClick={handleDrawerClose}  // Ensure the drawer closes after clicking the link
//                 >
//                   <ListItemText
//                     primary={item}
//                     sx={{
//                       color: '#1A2A6C',
//                       textAlign: 'center',
//                       fontSize: '1rem',
//                     }}
//                   />
//                 </Link>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;
















// import React from 'react';
// import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-scroll';
// import Final from '../assets/final.jpg';

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };

//   const navItems = ['Why Choose Us', 'Our Offerings', 'Testimonials', 'Contact Us'];

//   return (
//     <>
//       <AppBar
//         position="static"
//         sx={{
//           background: 'linear-gradient(45deg, #2196F3 30%, #FF4081 90%)', // Gradient background
//           boxShadow: 'none',
//           padding: { xs: '8px 16px', md: '12px 24px' },
//           borderRadius: '0px',
//         }}
//       >
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <img src={Final} alt="Techzick Logo" style={{ height: '40px', marginRight: '8px' }} />
//             <Typography
//               variant="h4"
//               sx={{
//                 fontWeight: 'bold',
//                 color: '#ffffff',
//                 fontFamily: 'Merriweather, serif',
//                 letterSpacing: '0.04em',
//               }}
//             >
//               Techzick
//             </Typography>
//           </Box>

//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 to={item.toLowerCase().replace(/ /g, '')}
//                 smooth={true}
//                 duration={1000}
//                 spy={true}
//               >
//                 <Button
//                   color="inherit"
//                   sx={{
//                     fontSize: { xs: '0.7rem', md: '0.8rem' },
//                     color: '#ffffff',
//                     fontWeight: '540',
//                     fontFamily: 'sans-serif',
//                     marginRight: 0.1,
//                     padding: '8px 16px',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white on hover
//                       borderRadius: '10px',
//                     },
//                   }}
//                 >
//                   {item}
//                 </Button>
//               </Link>
//             ))}
//           </Box>

//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="end"
//             onClick={handleDrawerToggle}
//             sx={{ display: { xs: 'block', md: 'none' }, color: '#ffffff' }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={handleDrawerClose}
//         sx={{ display: { xs: 'block', md: 'none' } }}
//       >
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={handleDrawerClose}
//           onKeyDown={handleDrawerClose}
//         >
//           <List>
//             {navItems.map((item) => (
//               <ListItem button key={item} onClick={handleDrawerClose}>
//                 <Link
//                   to={item.toLowerCase().replace(/ /g, '')}
//                   smooth={true}
//                   duration={1000}
//                   spy={true}
//                   onClick={handleDrawerClose}
//                 >
//                   <ListItemText
//                     primary={item}
//                     sx={{
//                       color: '#1A2A6C',
//                       textAlign: 'center',
//                       fontSize: '1rem',
//                     }}
//                   />
//                 </Link>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;



















// import React from 'react';
// import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-scroll';
// import Final from '../assets/final.jpg';

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };

//   const navItems = ['Why Choose Us', 'Our Offerings', 'Testimonials', 'Contact Us'];

//   return (
//     <>
//       <AppBar
//         position="static"
//         sx={{
//           background: '#FF6F61', // Vibrant coral color
//           boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Slight shadow for depth
//           padding: { xs: '8px 16px', md: '12px 24px' },
//         }}
//       >
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <img src={Final} alt="Techzick Logo" style={{ height: '40px', marginRight: '8px' }} />
//             <Typography
//               variant="h4"
//               sx={{
//                 fontWeight: 'bold',
//                 color: '#ffffff',
//                 fontFamily: 'Arial, sans-serif', // Modern font
//                 letterSpacing: '0.05em',
//               }}
//             >
//               Techzick
//             </Typography>
//           </Box>

//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 to={item.toLowerCase().replace(/ /g, '')}
//                 smooth={true}
//                 duration={1000}
//                 spy={true}
//               >
//                 <Button
//                   color="inherit"
//                   sx={{
//                     fontSize: { xs: '0.8rem', md: '1rem' },
//                     color: '#ffffff',
//                     fontWeight: '540',
//                     fontFamily: 'Arial, sans-serif',
//                     marginRight: 0.1,
//                     padding: '8px 16px',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.3)', // Softer hover effect
//                       borderRadius: '20px',
//                     },
//                   }}
//                 >
//                   {item}
//                 </Button>
//               </Link>
//             ))}
//           </Box>

//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="end"
//             onClick={handleDrawerToggle}
//             sx={{ display: { xs: 'block', md: 'none' }, color: '#ffffff' }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={handleDrawerClose}
//         sx={{ display: { xs: 'block', md: 'none' } }}
//       >
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={handleDrawerClose}
//           onKeyDown={handleDrawerClose}
//         >
//           <List>
//             {navItems.map((item) => (
//               <ListItem button key={item} onClick={handleDrawerClose}>
//                 <Link
//                   to={item.toLowerCase().replace(/ /g, '')}
//                   smooth={true}
//                   duration={1000}
//                   spy={true}
//                   onClick={handleDrawerClose}
//                 >
//                   <ListItemText
//                     primary={item}
//                     sx={{
//                       color: '#FF6F61',
//                       textAlign: 'center',
//                       fontSize: '1rem',
//                     }}
//                   />
//                 </Link>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;




// import React from 'react';
// import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-scroll';
// import Final from '../assets/final.jpg';

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };

//   const navItems = ['Why Choose Us', 'Our Offerings', 'Testimonials', 'Contact Us'];

//   return (
//     <>
//       <AppBar
//         position="static"
//         sx={{
//           background: '#4A90E2', // Vibrant blue color
//           boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow
//           padding: { xs: '8px 16px', md: '12px 24px' },
//         }}
//       >
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <img src={Final} alt="Techzick Logo" style={{ height: '50px', marginRight: '8px' }} />
//             <Typography
//               variant="h3" // Increased font size
//               sx={{
//                 fontWeight: 'bold',
//                 color: '#ffffff',
//                 fontFamily: 'Poppins, sans-serif', // Stylish font
//                 letterSpacing: '0.1em',
//               }}
//             >
//               Techzick
//             </Typography>
//           </Box>

//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 to={item.toLowerCase().replace(/ /g, '')}
//                 smooth={true}
//                 duration={1000}
//                 spy={true}
//               >
//                 <Button
//                   color="inherit"
//                   sx={{
//                     fontSize: { xs: '0.9rem', md: '1rem' },
//                     color: '#ffffff',
//                     fontWeight: '540',
//                     fontFamily: 'Poppins, sans-serif',
//                     marginRight: 0.1,
//                     padding: '8px 16px',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.3)', // Softer hover effect
//                       borderRadius: '20px',
//                     },
//                   }}
//                 >
//                   {item}
//                 </Button>
//               </Link>
//             ))}
//           </Box>

//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="end"
//             onClick={handleDrawerToggle}
//             sx={{ display: { xs: 'block', md: 'none' }, color: '#ffffff' }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={handleDrawerClose}
//         sx={{ display: { xs: 'block', md: 'none' } }}
//       >
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={handleDrawerClose}
//           onKeyDown={handleDrawerClose}
//         >
//           <List>
//             {navItems.map((item) => (
//               <ListItem button key={item} onClick={handleDrawerClose}>
//                 <Link
//                   to={item.toLowerCase().replace(/ /g, '')}
//                   smooth={true}
//                   duration={1000}
//                   spy={true}
//                   onClick={handleDrawerClose}
//                 >
//                   <ListItemText
//                     primary={item}
//                     sx={{
//                       color: '#4A90E2',
//                       textAlign: 'center',
//                       fontSize: '1rem',
//                     }}
//                   />
//                 </Link>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;






// import React from 'react';
// import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-scroll';
// import Final from '../assets/final.jpg';

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };

//   const navItems = ['Why Choose Us', 'Our Offerings', 'Testimonials', 'Contact Us'];

//   return (
//     <>
//       <AppBar
//         position="static"
//         sx={{
//           background: 'linear-gradient(90deg, #FF7E5F, #FEB47B)', // New vibrant gradient
//           boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow
//           padding: { xs: '8px 16px', md: '12px 24px' },
//         }}
//       >
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <img src={Final} alt="Techzick Logo" style={{ height: '50px', marginRight: '8px' }} />
//             <Typography
//               variant="h3" // Increased font size
//               sx={{
//                 fontWeight: 'bold',
//                 color: '#ffffff',
//                 fontFamily: 'Montserrat, sans-serif', // Modern font
//                 letterSpacing: '0.1em',
//               }}
//             >
//               Techzick
//             </Typography>
//           </Box>

//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 to={item.toLowerCase().replace(/ /g, '')}
//                 smooth={true}
//                 duration={1000}
//                 spy={true}
//               >
//                 <Button
//                   color="inherit"
//                   sx={{
//                     fontSize: { xs: '0.9rem', md: '1rem' },
//                     color: '#ffffff',
//                     fontWeight: '540',
//                     fontFamily: 'Montserrat, sans-serif',
//                     marginRight: 0.1,
//                     padding: '8px 16px',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.3)', // Softer hover effect
//                       borderRadius: '20px',
//                     },
//                   }}
//                 >
//                   {item}
//                 </Button>
//               </Link>
//             ))}
//           </Box>

//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="end"
//             onClick={handleDrawerToggle}
//             sx={{ display: { xs: 'block', md: 'none' }, color: '#ffffff' }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={handleDrawerClose}
//         sx={{ display: { xs: 'block', md: 'none' } }}
//       >
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={handleDrawerClose}
//           onKeyDown={handleDrawerClose}
//         >
//           <List>
//             {navItems.map((item) => (
//               <ListItem button key={item} onClick={handleDrawerClose}>
//                 <Link
//                   to={item.toLowerCase().replace(/ /g, '')}
//                   smooth={true}
//                   duration={1000}
//                   spy={true}
//                   onClick={handleDrawerClose}
//                 >
//                   <ListItemText
//                     primary={item}
//                     sx={{
//                       color: '#FF7E5F',
//                       textAlign: 'center',
//                       fontSize: '1rem',
//                     }}
//                   />
//                 </Link>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;



// import React from 'react';
// import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-scroll';
// import TechZik from '../assets/TechZik.png';

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };

//   const navItems = ['Why Choose Us', 'Our Offerings', 'Testimonials', 'Contact Us'];

//   return (
//     <>
//       <AppBar
//         position="static"
//         sx={{
//           background: 'linear-gradient(90deg, #FFDA44, #CDAA45)', // Mustard yellow gradient
//           boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Slightly stronger shadow
//           padding: { xs: '8px 16px', md: '12px 24px' },
//         }}
//       >
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <img src={TechZik} alt="Techzick Logo" style={{ height: '50px', marginRight: '8px' }} />
//             <Typography
//               variant="h3" // Increased font size
//               sx={{
//                 fontWeight: 'bold',
//                 color: '#ffffff',
//                 fontFamily: 'Playfair Display, serif', // Using Playfair Display
//                 letterSpacing: '0.1em',
//               }}
//             >
//               Techzick
//             </Typography>
//           </Box>

//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 to={item.toLowerCase().replace(/ /g, '')}
//                 smooth={true}
//                 duration={1000}
//                 spy={true}
//               >
//                 <Button
//                   color="inherit"
//                   sx={{
//                     fontSize: { xs: '0.9rem', md: '1rem' },
//                     color: '#ffffff',
//                     fontWeight: '540',
//                     fontFamily: 'Arial, sans-serif', // Simple font for buttons
//                     marginRight: 0.1,
//                     padding: '8px 16px',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.3)', // Softer hover effect
//                       borderRadius: '20px',
//                     },
//                   }}
//                 >
//                   {item}
//                 </Button>
//               </Link>
//             ))}
//           </Box>

//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="end"
//             onClick={handleDrawerToggle}
//             sx={{ display: { xs: 'block', md: 'none' }, color: '#ffffff' }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={handleDrawerClose}
//         sx={{ display: { xs: 'block', md: 'none' } }}
//       >
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={handleDrawerClose}
//           onKeyDown={handleDrawerClose}
//         >
//           <List>
//             {navItems.map((item) => (
//               <ListItem button key={item} onClick={handleDrawerClose}>
//                 <Link
//                   to={item.toLowerCase().replace(/ /g, '')}
//                   smooth={true}
//                   duration={1000}
//                   spy={true}
//                   onClick={handleDrawerClose}
//                 >
//                   <ListItemText
//                     primary={item}
//                     sx={{
//                       color: '#FFDA44', // Mustard yellow for drawer items
//                       textAlign: 'center',
//                       fontSize: '1rem',
//                     }}
//                   />
//                 </Link>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;





import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import TechZik from '../assets/TechZik.png';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const navItems = ['Why Choose Us', 'Our Offerings', 'Testimonials', 'Contact Us'];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(90deg, #6A82FB, #FC5C7D)', // Modern gradient (blue to pink)
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Enhanced shadow
          padding: { xs: '8px 16px', md: '12px 24px' },
          // Removed rounded corners
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={TechZik} alt="Techzick Logo" style={{ height: '50px', marginRight: '8px' }} />
            <Typography
              variant="h3" // Increased font size
              sx={{
                fontWeight: 'bold',
                color: '#ffffff',
                fontFamily: 'Playfair Display, serif', // Using Playfair Display
                letterSpacing: '0.05em',
              }}
            >
              Techzick
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(/ /g, '')}
                smooth={true}
                duration={1000}
                spy={true}
              >
                <Button
                  color="inherit"
                  sx={{
                    fontSize: { xs: '0.9rem', md: '0.8rem' },
                    color: '#ffffff',
                    fontWeight: '540',
                    fontFamily: 'Arial, sans-serif', // Simple font for buttons
                    marginRight: { xs: '0', md: '10px' },
                    padding: '8px 16px',
                    transition: 'background-color 0.3s ease', // Smooth transition
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Softer hover effect
                      borderRadius: '20px',
                    },
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' }, color: '#ffffff' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <List>
            {navItems.map((item) => (
              <ListItem button key={item} onClick={handleDrawerClose}>
                <Link
                  to={item.toLowerCase().replace(/ /g, '')}
                  smooth={true}
                  duration={1000}
                  spy={true}
                  onClick={handleDrawerClose}
                >
                  <ListItemText
                    primary={item}
                    sx={{
                      color: '#FC5C7D', // Drawer item color matching gradient
                      textAlign: 'center',
                      fontSize: '0.8rem',
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;



