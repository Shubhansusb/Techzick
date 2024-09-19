// import React from 'react';
// import { AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const navItems = ['Why Choose Us', 'Our Offerings', 'Testimonials', 'Contact Us'];

//   return (
//     <>
//       <AppBar
//         position="static"
//         sx={{
//           backgroundColor: '#f0f0f0',
//           boxShadow: 'none',
//           padding: { xs: '8px 16px', md: '12px 24px' },
//           borderRadius: '0px',
//         }}
//       >
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: 'bold',
//               color: '#1A2A6C',
//               fontFamily: ' Merriweather, serif',
//               letterSpacing: '0.04em',
//             }}
//           >
//            Techzick
//           </Typography>
          
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
//                     color: '#1A2A6C',
//                     fontWeight: '540',
//                     fontFamily: ' sans-serif',
//                     marginRight: 0.1,
//                     padding: '8px 16px',
//                     '&:hover': {
//                       backgroundColor: '#F3F3F3',
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
//             sx={{ display: { xs: 'block', md: 'none' }, color: '#1A2A6C' }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={handleDrawerToggle}
//         sx={{ display: { xs: 'block', md: 'none' } }}
//       >
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={handleDrawerToggle}
//           onKeyDown={handleDrawerToggle}
//         >
//           <List>
//             {navItems.map((item) => (
//               <ListItem
//                 button
//                 key={item}
//                 component={Link}
//                 to={item.toLowerCase().replace(/ /g, '')}
//                 smooth={true}
//                 duration={1000}
//                 spy={true}
//                 sx={{
//                   padding: '12px 16px',
//                   '&:hover': {
//                     backgroundColor: '#F3F3F3',
//                     borderRadius: '10px',
//                   },
//                 }}
//               >
//                 <ListItemText
//                   primary={item}
//                   sx={{
//                     color: '#1A2A6C',
//                     textAlign: 'center',
//                     fontSize: '1rem',
//                   }}
//                 />
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
          background: '#1A1D23',
          boxShadow: 'none',
          padding: { xs: '8px 16px', md: '12px 24px' },
          borderRadius: '0px',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: '#ffffff',
              fontFamily: 'Merriweather, serif',
              letterSpacing: '0.04em',
            }}
          >
            Techzick
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
                    fontSize: { xs: '0.7rem', md: '0.8rem' },
                    color: '#ffffff',
                    fontWeight: '540',
                    fontFamily: 'sans-serif',
                    marginRight: 0.1,
                    padding: '8px 16px',
                    '&:hover': {
                      backgroundColor: '#50577A',
                      borderRadius: '10px',
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
              <ListItem
                button
                key={item}
                onClick={handleDrawerClose}
              >
                <Link
                  to={item.toLowerCase().replace(/ /g, '')}
                  smooth={true}
                  duration={1000}
                  spy={true}
                  onClick={handleDrawerClose}  // Ensure the drawer closes after clicking the link
                >
                  <ListItemText
                    primary={item}
                    sx={{
                      color: '#1A2A6C',
                      textAlign: 'center',
                      fontSize: '1rem',
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
