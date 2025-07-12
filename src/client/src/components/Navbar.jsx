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
import Logo from '../assets/Techzik.png'; 
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
                      src={Logo}
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