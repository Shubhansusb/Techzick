// import React from "react";
// import {
//   Container,
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   IconButton,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// import "./styles.css";

// const apiUrl = import.meta.env.VITE_HOST;
// const ContactUs = () => {
//   const [formData, setFormData] = React.useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contactNumber: "",
//     requirements: "",
//   });
//   const [isSubmitting, setIsSubmitting] = React.useState(false);
//   const [showSuccess, setShowSuccess] = React.useState(false);
//   const [showError, setShowError] = React.useState(false);

//   // Validation state
//   const [formErrors, setFormErrors] = React.useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contactNumber: "",
//     requirements: "",
//   });

//   // Handle form field changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     setFormErrors({
//       ...formErrors,
//       [e.target.name]: "", // Reset error on field change
//     });
//   };

//   // Validate the form fields
//   const validate = () => {
//     let errors = {};
//     let isValid = true;

//     if (!formData.firstName.trim()) {
//       errors.firstName = "First name is required";
//       isValid = false;
//     }

//     if (!formData.lastName.trim()) {
//       errors.lastName = "Last name is required";
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       errors.email = "Email is required";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Email address is invalid";
//       isValid = false;
//     }

//     if (!formData.contactNumber.trim()) {
//       errors.contactNumber = "Contact number is required";
//       isValid = false;
//     } else if (!/^\d+$/.test(formData.contactNumber)) {
//       errors.contactNumber = "Contact number should contain only digits";
//       isValid = false;
//     }

//     if (!formData.requirements.trim()) {
//       errors.requirements = "Please provide your requirements";
//       isValid = false;
//     }

//     setFormErrors(errors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validate()) return; // Stop submission if validation fails

//     setIsSubmitting(true);

//     try {
//       const res = await fetch(`${apiUrl}/api/submit`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (res.ok) {
//         setShowSuccess(true);
//       } else {
//         setShowError(true);
//       }
//     } catch (error) {
//       console.log(error);
//       setShowError(true);
//     } finally {
//       setIsSubmitting(false);
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         contactNumber: "",
//         requirements: "",
//       });
//     }
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#1C1C1C", // Matte black background color
//         color: "white",
//         py: 8,
//         textAlign: "center",
//         overflow: "hidden",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Typography
//           variant="h3"
//           gutterBottom
//           sx={{
//             fontFamily: "Merriweather, serif",
//             marginBottom: 8,
//             animation: "fadeIn 2s",
//           }}
//         >
//           Contact Us
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={4}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="First Name"
//                 variant="outlined"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 fullWidth
//                 error={!!formErrors.firstName}
//                 helperText={formErrors.firstName}
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "#B0B0B0",
//                     },
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Last Name"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 variant="outlined"
//                 fullWidth
//                 error={!!formErrors.lastName}
//                 helperText={formErrors.lastName}
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 label="Email"
//                 variant="outlined"
//                 fullWidth
//                 error={!!formErrors.email}
//                 helperText={formErrors.email}
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Contact Number"
//                 name="contactNumber"
//                 value={formData.contactNumber}
//                 onChange={handleChange}
//                 variant="outlined"
//                 fullWidth
//                 error={!!formErrors.contactNumber}
//                 helperText={formErrors.contactNumber}
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Requirements"
//                 name="requirements"
//                 value={formData.requirements}
//                 onChange={handleChange}
//                 variant="outlined"
//                 fullWidth
//                 multiline
//                 rows={4}
//                 error={!!formErrors.requirements}
//                 helperText={formErrors.requirements}
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white" },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 disabled={isSubmitting}
//                 sx={{
//                   backgroundColor: "#E0E0E0", // Accent color to match theme
//                   color: "#1F1C2C", // Darker text color for contrast
//                   "&:hover": {
//                     backgroundColor: "#45e0b0", // Slightly lighter on hover
//                   },
//                   px: 4,
//                 }}
//               >
//                 {isSubmitting ? "Submitting..." : "Submit"}
//               </Button>
//             </Grid>
//           </Grid>
//         </form>

//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             mt: 4,
//             gap: 2,
//           }}
//         >
//           <IconButton
//             href="https://www.linkedin.com/in/shubhansu/"
//             target="_blank"
//             aria-label="LinkedIn"
//             sx={{ color: "#E0E0E0" }} // Light color to contrast with background
//           >
//             <LinkedInIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//           <IconButton
//             href="https://www.instagram.com"
//             target="_blank"
//             aria-label="Instagram"
//             sx={{ color: "#E0E0E0" }} // Light color to contrast with background
//           >
//             <InstagramIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//           <IconButton
//             href="https://wa.me/7678161134"
//             target="_blank"
//             aria-label="WhatsApp"
//             sx={{ color: "#E0E0E0" }} // Light color to contrast with background
//           >
//             <WhatsAppIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//         </Box>

//         <Box mt={4}>
//           <Typography variant="body1">
//             Email us at:{" "}
//             <a href="mailto:Customerservices@techzick.com" style={{ color: "#B0B0B0" }}>
//               Customerservices@techzick.com
//             </a>
//           </Typography>
//           <Typography variant="body1" mt={1}>
//             Contact Number:{" "}
//             <a href="tel:91-1234567890" style={{ color: "#B0B0B0" }}>
//               91-7678161134
//             </a>
//           </Typography>
//         </Box>
//       </Container>

//       {/* Success & Error Alerts */}
//       <Snackbar
//         open={showSuccess}
//         autoHideDuration={6000}
//         onClose={() => setShowSuccess(false)}
//       >
//         <Alert
//           onClose={() => setShowSuccess(false)}
//           severity="success"
//           sx={{ width: "100%" }}
//         >
//           Thank you for submitting the form, we'll get back to you!
//         </Alert>
//       </Snackbar>
//       <Snackbar
//         open={showError}
//         autoHideDuration={6000}
//         onClose={() => setShowError(false)}
//       >
//         <Alert
//           onClose={() => setShowError(false)}
//           severity="error"
//           sx={{ width: "100%" }}
//         >
//           There was an error submitting the form. Please try again.
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default ContactUs;

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
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { keyframes } from "@emotion/react";
import "./styles.css";

const apiUrl = import.meta.env.VITE_HOST;

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ContactUs = () => {
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
      errors.contactNumber = "Contact number should contain only digits";
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
      const res = await fetch(`${apiUrl}/api/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setShowSuccess(true);
      } else {
        setShowError(true);
      }
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
        background: "linear-gradient(135deg, #0f0f0f 0%, #1c1c1c 100%)",
        color: "white",
        py: 10,
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #00dbde, #fc00ff)",
        }
      }}
    >
      {/* Animated floating elements */}
      <Box sx={{
        position: "absolute",
        top: "20%",
        left: "5%",
        width: 100,
        height: 100,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(252,0,255,0.1) 0%, rgba(0,0,0,0) 70%)",
        animation: `${pulse} 8s infinite ease-in-out`,
      }} />
      
      <Box sx={{
        position: "absolute",
        bottom: "30%",
        right: "10%",
        width: 150,
        height: 150,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,219,222,0.1) 0%, rgba(0,0,0,0) 70%)",
        animation: `${pulse} 10s infinite ease-in-out`,
      }} />
      
      <Container maxWidth="md">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            mb: 6,
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -10,
              left: "25%",
              width: "50%",
              height: "4px",
              background: "linear-gradient(90deg, #00dbde, #fc00ff)",
              borderRadius: 2,
            },
            animation: `${fadeIn} 0.8s ease-out`,
          }}
        >
          Contact Us
        </Typography>
        
        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "rgba(30, 30, 30, 0.7)",
            backdropFilter: "blur(10px)",
            borderRadius: 4,
            p: { xs: 3, md: 5 },
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            animation: `${fadeIn} 0.8s ease-out 0.2s`,
            animationFillMode: "both",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} sx={{ animation: `${fadeIn} 0.5s ease-out 0.3s` }}>
              <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                error={!!formErrors.firstName}
                helperText={formErrors.firstName}
                InputLabelProps={{
                  style: { color: "#aaa" },
                }}
                InputProps={{
                  style: { 
                    color: "white",
                    borderRadius: "12px",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#444",
                    },
                    "&:hover fieldset": {
                      borderColor: "#777",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00dbde",
                      boxShadow: "0 0 0 2px rgba(0,219,222,0.2)",
                    },
                  },
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6} sx={{ animation: `${fadeIn} 0.5s ease-out 0.4s` }}>
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                error={!!formErrors.lastName}
                helperText={formErrors.lastName}
                InputLabelProps={{
                  style: { color: "#aaa" },
                }}
                InputProps={{
                  style: { 
                    color: "white",
                    borderRadius: "12px",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#444",
                    },
                    "&:hover fieldset": {
                      borderColor: "#777",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00dbde",
                      boxShadow: "0 0 0 2px rgba(0,219,222,0.2)",
                    },
                  },
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6} sx={{ animation: `${fadeIn} 0.5s ease-out 0.5s` }}>
              <TextField
                name="email"
                value={formData.email}
                onChange={handleChange}
                label="Email"
                variant="outlined"
                fullWidth
                error={!!formErrors.email}
                helperText={formErrors.email}
                InputLabelProps={{
                  style: { color: "#aaa" },
                }}
                InputProps={{
                  style: { 
                    color: "white",
                    borderRadius: "12px",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#444",
                    },
                    "&:hover fieldset": {
                      borderColor: "#777",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00dbde",
                      boxShadow: "0 0 0 2px rgba(0,219,222,0.2)",
                    },
                  },
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6} sx={{ animation: `${fadeIn} 0.5s ease-out 0.6s` }}>
              <TextField
                label="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                error={!!formErrors.contactNumber}
                helperText={formErrors.contactNumber}
                InputLabelProps={{
                  style: { color: "#aaa" },
                }}
                InputProps={{
                  style: { 
                    color: "white",
                    borderRadius: "12px",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#444",
                    },
                    "&:hover fieldset": {
                      borderColor: "#777",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00dbde",
                      boxShadow: "0 0 0 2px rgba(0,219,222,0.2)",
                    },
                  },
                }}
              />
            </Grid>
            
            <Grid item xs={12} sx={{ animation: `${fadeIn} 0.5s ease-out 0.7s` }}>
              <TextField
                label="Your Requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                error={!!formErrors.requirements}
                helperText={formErrors.requirements}
                InputLabelProps={{
                  style: { color: "#aaa" },
                }}
                InputProps={{
                  style: { 
                    color: "white",
                    borderRadius: "12px",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#444",
                    },
                    "&:hover fieldset": {
                      borderColor: "#777",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00dbde",
                      boxShadow: "0 0 0 2px rgba(0,219,222,0.2)",
                    },
                  },
                }}
              />
            </Grid>
            
            <Grid item xs={12} sx={{ animation: `${fadeIn} 0.5s ease-out 0.8s` }}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  background: "linear-gradient(90deg, #00dbde 0%, #fc00ff 100%)",
                  color: "white",
                  borderRadius: "50px",
                  px: 6,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  letterSpacing: "0.5px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 7px 20px rgba(0,0,0,0.4)",
                    background: "linear-gradient(90deg, #00c4c7 0%, #e000e8 100%)",
                  },
                  "&:disabled": {
                    background: "linear-gradient(90deg, #008688 0%, #8a008f 100%)",
                  },
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Contact Info & Social Links */}
        <Box
          sx={{
            mt: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            animation: `${fadeIn} 0.8s ease-out 0.9s`,
            animationFillMode: "both",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 500, color: "#ddd" }}>
            Connect With Us
          </Typography>
          
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mt: 1,
            }}
          >
            <IconButton
              href="https://www.linkedin.com/in/shubhansu/"
              target="_blank"
              aria-label="LinkedIn"
              sx={{
                color: "#aaa",
                backgroundColor: "rgba(255,255,255,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#00dbde",
                  backgroundColor: "rgba(0,219,222,0.1)",
                  transform: "translateY(-5px)",
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
              sx={{
                color: "#aaa",
                backgroundColor: "rgba(255,255,255,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#fc00ff",
                  backgroundColor: "rgba(252,0,255,0.1)",
                  transform: "translateY(-5px)",
                },
              }}
            >
              <InstagramIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              href="https://wa.me/7678161134"
              target="_blank"
              aria-label="WhatsApp"
              sx={{
                color: "#aaa",
                backgroundColor: "rgba(255,255,255,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#25D366",
                  backgroundColor: "rgba(37,211,102,0.1)",
                  transform: "translateY(-5px)",
                },
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
          
          <Box mt={3} sx={{ color: "#bbb", lineHeight: 1.8 }}>
            <Typography variant="body1">
              Email us at:{" "}
              <a 
                href="mailto:Megha3284@gmail.com" 
                style={{ 
                  color: "#00dbde",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#fc00ff",
                    textDecoration: "underline",
                  }
                }}
              >
                Customerservices@techzick.com
              </a>
            </Typography>
            <Typography variant="body1">
              Contact Number:{" "}
              <a 
                href="tel:91-7678161134" 
                style={{ 
                  color: "#00dbde",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#fc00ff",
                    textDecoration: "underline",
                  }
                }}
              >
                +91-7678161134
              </a>
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Success & Error Alerts */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ 
            width: "100%",
            backgroundColor: "#00c853",
            color: "white",
            fontWeight: 500,
          }}
        >
          Thank you for your message! We'll get back to you soon.
        </Alert>
      </Snackbar>
      
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowError(false)}
          severity="error"
          sx={{ 
            width: "100%",
            backgroundColor: "#ff3d00",
            color: "white",
            fontWeight: 500,
          }}
        >
          There was an error sending your message. Please try again.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;