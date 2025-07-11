import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  Snackbar,
  Alert,
  useTheme,
  Paper
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

const ContactUs = () => {
  const theme = useTheme();
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact number is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.contactNumber)) {
      errors.contactNumber = "Should contain only digits";
      isValid = false;
    } else if (formData.contactNumber.length < 10) {
      errors.contactNumber = "Must be at least 10 digits";
      isValid = false;
    }

    if (!formData.requirements.trim()) {
      errors.requirements = "Please provide your requirements";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccess(true);
    } catch (error) {
      setShowError(true);
    } finally {
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        requirements: "",
      });
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f8f9fa',
        py: 10,
        textAlign: "center",
      }}
      id="contactus"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontFamily: "Merriweather, serif",
            fontWeight: 700,
            mb: 6,
            color: theme.palette.text.primary,
          }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 2,
                backgroundColor: 'transparent',
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'left',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Merriweather, serif",
                  fontWeight: 600,
                  mb: 4,
                  color: theme.palette.text.primary,
                }}
              >
                Get in touch
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <EmailIcon sx={{ mr: 2, color: theme.palette.primary.main, fontSize: 24 }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500, color: theme.palette.text.secondary }}>
                      Email
                    </Typography>
                    <Typography 
                      component="a" 
                      href="mailto:Customerservices@techzick.com" 
                      sx={{ 
                        color: theme.palette.primary.main,
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      Customerservices@techzick.com
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PhoneIcon sx={{ mr: 2, color: theme.palette.primary.main, fontSize: 24 }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500, color: theme.palette.text.secondary }}>
                      Phone
                    </Typography>
                    <Typography 
                      component="a" 
                      href="tel:91-7678161134" 
                      sx={{ 
                        color: theme.palette.primary.main,
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      +91-7678161134
                    </Typography>
                  </Box>
                </Box>
              </Box>
              
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 500, color: theme.palette.text.secondary }}>
                  Connect with us
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    href="https://www.linkedin.com/in/shubhansu/"
                    target="_blank"
                    aria-label="LinkedIn"
                    sx={{ 
                      color: theme.palette.primary.main,
                      backgroundColor: 'rgba(25, 118, 210, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.2)',
                      },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 2,
                backgroundColor: 'white',
                p: 4,
                boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      variant="outlined"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      fullWidth
                      error={!!formErrors.firstName}
                      helperText={formErrors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      error={!!formErrors.lastName}
                      helperText={formErrors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      error={!!formErrors.email}
                      helperText={formErrors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Contact Number"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      error={!!formErrors.contactNumber}
                      helperText={formErrors.contactNumber}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="How can we help you?"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      error={!!formErrors.requirements}
                      helperText={formErrors.requirements}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      endIcon={<SendIcon />}
                      sx={{
                        py: 1.5,
                        px: 4,
                        fontWeight: 600,
                        fontSize: '1rem',
                        width: '100%',
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success">
          Thank you for your message! We'll get back to you soon.
        </Alert>
      </Snackbar>
      
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setShowError(false)} severity="error">
          There was an error sending your message. Please try again.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;