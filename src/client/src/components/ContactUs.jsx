// import React from "react";
// import {
//   Container,
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   IconButton,
// } from "@mui/material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// import "./styles.css";

// const apiUrl = "https://techzickweb-gyhcgrddg7aebpan.eastus-01.azurewebsites.net";


// const ContactUs = () => {
//   const [formData, setFormData] = React.useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contactNumber: "",
//     requirements: "",
//   });
//   const [isSubmitting, setIsSubmitting] = React.useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const res = await fetch(`${apiUrl}/api/submit`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (res.ok)
//         console.log('response from the server :', res);
      
//     } catch (error) {
//       console.log(error);
//     }
//     setIsSubmitting(false);
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       contactNumber: "",
//       requirements: "",
//     })
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#1A2A6C",
//         color: "white",
//         py: 8,
//         textAlign: "center",
//         overflow: "hidden",
//       }}
//     >
//       <Container maxWidth="lg" >
//         <Typography
//           variant="h3"
//           gutterBottom
//           sx={{
//             fontFamily: "Merriweather, serif",
//             marginBottom: 8,
//             animation: "fadeIn 2s",
//             "@keyframes fadeIn": {
//               "0%": { opacity: 0 },
//               "100%": { opacity: 1 },
//             },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "white",
//                     },
//                   },
//                   animation: "slideInLeft 1.5s",
//                   "@keyframes slideInLeft": {
//                     "0%": { transform: "translateX(-100%)" },
//                     "100%": { transform: "translateX(0)" },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "white",
//                     },
//                   },
//                   animation: "slideInRight 1.5s",
//                   "@keyframes slideInRight": {
//                     "0%": { transform: "translateX(100%)" },
//                     "100%": { transform: "translateX(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "white",
//                     },
//                   },
//                   animation: "fadeInUp 1.5s",
//                   "@keyframes fadeInUp": {
//                     "0%": { opacity: 0, transform: "translateY(20px)" },
//                     "100%": { opacity: 1, transform: "translateY(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                   className: "no-arrows",
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "white",
//                     },
//                   },
//                   animation: "fadeInUp 1.5s",
//                   "@keyframes fadeInUp": {
//                     "0%": { opacity: 0, transform: "translateY(20px)" },
//                     "100%": { opacity: 1, transform: "translateY(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "white",
//                     },
//                   },
//                   animation: "fadeInUp 2s",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 disabled={isSubmitting}
//                 sx={{
//                   backgroundColor: "white",
//                   color: "#1A2A6C",
//                   "&:hover": {
//                     backgroundColor: "#e0e0e0",
//                   },
//                   px: 4,
//                   animation: "bounceIn 2s",
//                   "@keyframes bounceIn": {
//                     "0%, 20%, 40%, 60%, 80%, 100%": {
//                       transform: "translateY(0)",
//                     },
//                     "50%": {
//                       transform: "translateY(-10px)",
//                     },
//                   },
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
//             animation: "fadeIn 5s",
//           }}
//         >
//           <IconButton
//             href="https://www.linkedin.com/in/shubhansu/"
//             target="_blank"
//             aria-label="LinkedIn"
//             sx={{ color: "white" }}
//           >
//             <LinkedInIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//           <IconButton
//             href="https://www.instagram.com"
//             target="_blank"
//             aria-label="Instagram"
//             sx={{ color: "white" }}
//           >
//             <InstagramIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//           <IconButton
//             href="https://www.whatsapp.com"
//             target="_blank"
//             aria-label="WhatsApp"
//             sx={{ color: "white" }}
//           >
//             <WhatsAppIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//         </Box>
//         <Typography variant="body2" sx={{ mt: 4 }}>
//           Address: 500032, Janakpuri, New Delhi, India
//         </Typography>
//         <Typography variant="body2">Email: support@company.com</Typography>
//       </Container>
//     </Box>
//   );
// };

// export default ContactUs;









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

// const apiUrl = "https://techzickweb-gyhcgrddg7aebpan.eastus-01.azurewebsites.net";

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

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
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
//         background: "linear-gradient(135deg, #1A2A6C, #fcb045)",
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
//             "@keyframes fadeIn": {
//               "0%": { opacity: 0 },
//               "100%": { opacity: 1 },
//             },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#fcb045",
//                     },
//                   },
//                   animation: "slideInLeft 1.5s",
//                   "@keyframes slideInLeft": {
//                     "0%": { transform: "translateX(-100%)" },
//                     "100%": { transform: "translateX(0)" },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#fcb045",
//                     },
//                   },
//                   animation: "slideInRight 1.5s",
//                   "@keyframes slideInRight": {
//                     "0%": { transform: "translateX(100%)" },
//                     "100%": { transform: "translateX(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#fcb045",
//                     },
//                   },
//                   animation: "fadeInUp 1.5s",
//                   "@keyframes fadeInUp": {
//                     "0%": { opacity: 0, transform: "translateY(20px)" },
//                     "100%": { opacity: 1, transform: "translateY(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                   className: "no-arrows",
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#fcb045",
//                     },
//                   },
//                   animation: "fadeInUp 1.5s",
//                   "@keyframes fadeInUp": {
//                     "0%": { opacity: 0, transform: "translateY(20px)" },
//                     "100%": { opacity: 1, transform: "translateY(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#fcb045",
//                     },
//                   },
//                   animation: "fadeInUp 2s",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 disabled={isSubmitting}
//                 sx={{
//                   backgroundColor: "#fcb045",
//                   color: "#1A2A6C",
//                   "&:hover": {
//                     backgroundColor: "#e0a034",
//                   },
//                   px: 4,
//                   animation: "bounceIn 2s",
//                   "@keyframes bounceIn": {
//                     "0%, 20%, 40%, 60%, 80%, 100%": {
//                       transform: "translateY(0)",
//                     },
//                     "50%": {
//                       transform: "translateY(-10px)",
//                     },
//                   },
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
//             animation: "fadeIn 5s",
//           }}
//         >
//           <IconButton
//             href="https://www.linkedin.com/in/shubhansu/"
//             target="_blank"
//             aria-label="LinkedIn"
//             sx={{ color: "white" }}
//           >
//             <LinkedInIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//           <IconButton
//             href="https://www.instagram.com"
//             target="_blank"
//             aria-label="Instagram"
//             sx={{ color: "white" }}
//           >
//             <InstagramIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//           <IconButton
//             href="https://wa.me/9811692443"
//             target="_blank"
//             aria-label="WhatsApp"
//             sx={{ color: "white" }}
//           >
//             <WhatsAppIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//         </Box>

//         <Box mt={4}>
//           <Typography variant="body1">
//             Email us at:{" "}
//             <a href="mailto:contact@techzick.com" style={{ color: "#fcb045" }}>
//               contact@techzick.com
//             </a>
//           </Typography>
//           <Typography variant="body1" mt={1}>
//             Contact Number:{" "}
//             <a href="tel:+1234567890" style={{ color: "#fcb045" }}>
//               +1234567890
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
//           Form submitted successfully!
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

// const apiUrl = "https://techzickweb-gyhcgrddg7aebpan.eastus-01.azurewebsites.net";

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

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
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
//         background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
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
//             "@keyframes fadeIn": {
//               "0%": { opacity: 0 },
//               "100%": { opacity: 1 },
//             },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#6dd5ed",
//                     },
//                   },
//                   animation: "slideInLeft 1.5s",
//                   "@keyframes slideInLeft": {
//                     "0%": { transform: "translateX(-100%)" },
//                     "100%": { transform: "translateX(0)" },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#6dd5ed",
//                     },
//                   },
//                   animation: "slideInRight 1.5s",
//                   "@keyframes slideInRight": {
//                     "0%": { transform: "translateX(100%)" },
//                     "100%": { transform: "translateX(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#6dd5ed",
//                     },
//                   },
//                   animation: "fadeInUp 1.5s",
//                   "@keyframes fadeInUp": {
//                     "0%": { opacity: 0, transform: "translateY(20px)" },
//                     "100%": { opacity: 1, transform: "translateY(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                   className: "no-arrows",
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#6dd5ed",
//                     },
//                   },
//                   animation: "fadeInUp 1.5s",
//                   "@keyframes fadeInUp": {
//                     "0%": { opacity: 0, transform: "translateY(20px)" },
//                     "100%": { opacity: 1, transform: "translateY(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#6dd5ed",
//                     },
//                   },
//                   animation: "fadeInUp 2s",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 disabled={isSubmitting}
//                 sx={{
//                   backgroundColor: "#6dd5ed",
//                   color: "#2193b0",
//                   "&:hover": {
//                     backgroundColor: "#5cc2d9",
//                   },
//                   px: 4,
//                   animation: "bounceIn 2s",
//                   "@keyframes bounceIn": {
//                     "0%, 20%, 40%, 60%, 80%, 100%": {
//                       transform: "translateY(0)",
//                     },
//                     "50%": {
//                       transform: "translateY(-10px)",
//                     },
//                   },
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
//             animation: "fadeIn 5s",
//           }}
//         >
//           <IconButton
//             href="https://www.linkedin.com/in/shubhansu/"
//             target="_blank"
//             aria-label="LinkedIn"
//             sx={{ color: "white" }}
//           >
//             <LinkedInIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//           <IconButton
//             href="https://www.instagram.com"
//             target="_blank"
//             aria-label="Instagram"
//             sx={{ color: "white" }}
//           >
//             <InstagramIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//           <IconButton
//             href="https://wa.me/9811692443"
//             target="_blank"
//             aria-label="WhatsApp"
//             sx={{ color: "white" }}
//           >
//             <WhatsAppIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//         </Box>

//         <Box mt={4}>
//           <Typography variant="body1">
//             Email us at:{" "}
//             <a href="mailto:contact@techzick.com" style={{ color: "#6dd5ed" }}>
//               contact@techzick.com
//             </a>
//           </Typography>
//           <Typography variant="body1" mt={1}>
//             Contact Number:{" "}
//             <a href="tel:+1234567890" style={{ color: "#6dd5ed" }}>
//               +1234567890
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
//           Form submitted successfully!
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

// const apiUrl = "https://techzickweb-gyhcgrddg7aebpan.eastus-01.azurewebsites.net";

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

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
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
//         background: "linear-gradient(135deg, #8E2DE2, #f64f59)",
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
//             "@keyframes fadeIn": {
//               "0%": { opacity: 0 },
//               "100%": { opacity: 1 },
//             },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#f64f59",
//                     },
//                   },
//                   animation: "slideInLeft 1.5s",
//                   "@keyframes slideInLeft": {
//                     "0%": { transform: "translateX(-100%)" },
//                     "100%": { transform: "translateX(0)" },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#f64f59",
//                     },
//                   },
//                   animation: "slideInRight 1.5s",
//                   "@keyframes slideInRight": {
//                     "0%": { transform: "translateX(100%)" },
//                     "100%": { transform: "translateX(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#f64f59",
//                     },
//                   },
//                   animation: "fadeInUp 1.5s",
//                   "@keyframes fadeInUp": {
//                     "0%": { opacity: 0, transform: "translateY(20px)" },
//                     "100%": { opacity: 1, transform: "translateY(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                   className: "no-arrows",
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#f64f59",
//                     },
//                   },
//                   animation: "fadeInUp 1.5s",
//                   "@keyframes fadeInUp": {
//                     "0%": { opacity: 0, transform: "translateY(20px)" },
//                     "100%": { opacity: 1, transform: "translateY(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#f64f59",
//                     },
//                   },
//                   animation: "fadeInUp 2s",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 disabled={isSubmitting}
//                 sx={{
//                   backgroundColor: "#f64f59",
//                   color: "#8E2DE2",
//                   "&:hover": {
//                     backgroundColor: "#e24550",
//                   },
//                   px: 4,
//                   animation: "bounceIn 2s",
//                   "@keyframes bounceIn": {
//                     "0%, 20%, 40%, 60%, 80%, 100%": {
//                       transform: "translateY(0)",
//                     },
//                     "50%": {
//                       transform: "translateY(-10px)",
//                     },
//                   },
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
//             animation: "fadeIn 5s",
//           }}
//         >
//           <IconButton
//             href="https://www.linkedin.com/in/shubhansu/"
//             target="_blank"
//             aria-label="LinkedIn"
//             sx={{ color: "white" }}
//           >
//             <LinkedInIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//           <IconButton
//             href="https://www.instagram.com"
//             target="_blank"
//             aria-label="Instagram"
//             sx={{ color: "white" }}
//           >
//             <InstagramIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//           <IconButton
//             href="https://wa.me/9811692443"
//             target="_blank"
//             aria-label="WhatsApp"
//             sx={{ color: "white" }}
//           >
//             <WhatsAppIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//         </Box>

//         <Box mt={4}>
//           <Typography variant="body1">
//             Email us at:{" "}
//             <a href="mailto:contact@techzick.com" style={{ color: "#f64f59" }}>
//               contact@techzick.com
//             </a>
//           </Typography>
//           <Typography variant="body1" mt={1}>
//             Contact Number:{" "}
//             <a href="tel:+1234567890" style={{ color: "#f64f59" }}>
//               +1234567890
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
//           Form submitted successfully!
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

// const apiUrl = "https://techzickweb-gyhcgrddg7aebpan.eastus-01.azurewebsites.net";

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

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
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
//         background: "linear-gradient(135deg, #3A3A3A, #B0B0B0)",
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
//             "@keyframes fadeIn": {
//               "0%": { opacity: 0 },
//               "100%": { opacity: 1 },
//             },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#B0B0B0",
//                     },
//                   },
//                   animation: "slideInLeft 1.5s",
//                   "@keyframes slideInLeft": {
//                     "0%": { transform: "translateX(-100%)" },
//                     "100%": { transform: "translateX(0)" },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#B0B0B0",
//                     },
//                   },
//                   animation: "slideInRight 1.5s",
//                   "@keyframes slideInRight": {
//                     "0%": { transform: "translateX(100%)" },
//                     "100%": { transform: "translateX(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#B0B0B0",
//                     },
//                   },
//                   animation: "fadeInUp 1.5s",
//                   "@keyframes fadeInUp": {
//                     "0%": { opacity: 0, transform: "translateY(20px)" },
//                     "100%": { opacity: 1, transform: "translateY(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                   className: "no-arrows",
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#B0B0B0",
//                     },
//                   },
//                   animation: "fadeInUp 1.5s",
//                   "@keyframes fadeInUp": {
//                     "0%": { opacity: 0, transform: "translateY(20px)" },
//                     "100%": { opacity: 1, transform: "translateY(0)" },
//                   },
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
//                 InputLabelProps={{
//                   style: { color: "white" },
//                 }}
//                 InputProps={{
//                   style: { color: "white", borderColor: "white" },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "& fieldset": {
//                       borderColor: "white",
//                     },
//                     "&:hover fieldset": {
//                       borderColor: "white",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#B0B0B0",
//                     },
//                   },
//                   animation: "fadeInUp 2s",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 disabled={isSubmitting}
//                 sx={{
//                   backgroundColor: "#B0B0B0",
//                   color: "#3A3A3A",
//                   "&:hover": {
//                     backgroundColor: "#A0A0A0",
//                   },
//                   px: 4,
//                   animation: "bounceIn 2s",
//                   "@keyframes bounceIn": {
//                     "0%, 20%, 40%, 60%, 80%, 100%": {
//                       transform: "translateY(0)",
//                     },
//                     "50%": {
//                       transform: "translateY(-10px)",
//                     },
//                   },
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
//             animation: "fadeIn 5s",
//           }}
//         >
//           <IconButton
//             href="https://www.linkedin.com/in/shubhansu/"
//             target="_blank"
//             aria-label="LinkedIn"
//             sx={{ color: "white" }}
//           >
//             <LinkedInIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//           <IconButton
//             href="https://www.instagram.com"
//             target="_blank"
//             aria-label="Instagram"
//             sx={{ color: "white" }}
//           >
//             <InstagramIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//           <IconButton
//             href="https://wa.me/9811692443"
//             target="_blank"
//             aria-label="WhatsApp"
//             sx={{ color: "white" }}
//           >
//             <WhatsAppIcon sx={{ fontSize: 30 }} />
//           </IconButton>
//         </Box>

//         <Box mt={4}>
//           <Typography variant="body1">
//             Email us at:{" "}
//             <a href="mailto:contact@techzick.com" style={{ color: "#B0B0B0" }}>
//               contact@techzick.com
//             </a>
//           </Typography>
//           <Typography variant="body1" mt={1}>
//             Contact Number:{" "}
//             <a href="tel:+1234567890" style={{ color: "#B0B0B0" }}>
//               +1234567890
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
//           Form submitted successfully!
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

// const apiUrl = "https://techzickweb-gyhcgrddg7aebpan.eastus-01.azurewebsites.net";

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

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
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
//         background: "linear-gradient(135deg, #1F1C2C, #928DAB)", // Gradient to match the theme
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
//             "@keyframes fadeIn": {
//               "0%": { opacity: 0 },
//               "100%": { opacity: 1 },
//             },
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
//                     "&:hover fieldset": {
//                       borderColor: "#B0B0B0",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#E0E0E0",
//                     },
//                   },
//                   animation: "slideInLeft 1.5s",
//                   "@keyframes slideInLeft": {
//                     "0%": { transform: "translateX(-100%)" },
//                     "100%": { transform: "translateX(0)" },
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
//                     "&:hover fieldset": {
//                       borderColor: "#B0B0B0",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#E0E0E0",
//                     },
//                   },
//                   animation: "slideInRight 1.5s",
//                   "@keyframes slideInRight": {
//                     "0%": { transform: "translateX(100%)" },
//                     "100%": { transform: "translateX(0)" },
//                   },
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
//                     "&:hover fieldset": {
//                       borderColor: "#B0B0B0",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#E0E0E0",
//                     },
//                   },
//                   animation: "fadeInUp 1.5s",
//                   "@keyframes fadeInUp": {
//                     "0%": { opacity: 0, transform: "translateY(20px)" },
//                     "100%": { opacity: 1, transform: "translateY(0)" },
//                   },
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
//                     "&:hover fieldset": {
//                       borderColor: "#B0B0B0",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#E0E0E0",
//                     },
//                   },
//                   animation: "fadeInUp 1.5s",
//                   "@keyframes fadeInUp": {
//                     "0%": { opacity: 0, transform: "translateY(20px)" },
//                     "100%": { opacity: 1, transform: "translateY(0)" },
//                   },
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
//                     "&:hover fieldset": {
//                       borderColor: "#B0B0B0",
//                     },
//                     "&.Mui-focused fieldset": {
//                       borderColor: "#E0E0E0",
//                     },
//                   },
//                   animation: "fadeInUp 2s",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 disabled={isSubmitting}
//                 sx={{
//                   backgroundColor: "#57FFC8", // Accent color to match theme
//                   color: "#1F1C2C", // Darker text color for contrast
//                   "&:hover": {
//                     backgroundColor: "#45e0b0", // Slightly lighter on hover
//                   },
//                   px: 4,
//                   animation: "bounceIn 2s",
//                   "@keyframes bounceIn": {
//                     "0%, 20%, 40%, 60%, 80%, 100%": {
//                       transform: "translateY(0)",
//                     },
//                     "50%": {
//                       transform: "translateY(-10px)",
//                     },
//                   },
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
//             animation: "fadeIn 5s",
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
//             href="https://wa.me/9811692443"
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
//             <a href="mailto:contact@techzick.com" style={{ color: "#B0B0B0" }}>
//               contact@techzick.com
//             </a>
//           </Typography>
//           <Typography variant="body1" mt={1}>
//             Contact Number:{" "}
//             <a href="tel:+1234567890" style={{ color: "#B0B0B0" }}>
//               +1234567890
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
//           Form submitted successfully!
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

import "./styles.css";

const apiUrl = import.meta.env.VITE_HOST;
const ContactUs = () => {
  console.log(apiUrl);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      console.log(error);
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
        backgroundColor: "#1C1C1C", // Matte black background color
        color: "white",
        py: 8,
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontFamily: "Merriweather, serif",
            marginBottom: 8,
            animation: "fadeIn 2s",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#B0B0B0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#B0B0B0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#E0E0E0",
                    },
                  },
                  animation: "slideInLeft 1.5s",
                  "@keyframes slideInLeft": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0)" },
                  },
                }}
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
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#B0B0B0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#B0B0B0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#E0E0E0",
                    },
                  },
                  animation: "slideInRight 1.5s",
                  "@keyframes slideInRight": {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0)" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                value={formData.email}
                onChange={handleChange}
                label="Email"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#B0B0B0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#B0B0B0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#E0E0E0",
                    },
                  },
                  animation: "fadeInUp 1.5s",
                  "@keyframes fadeInUp": {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#B0B0B0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#B0B0B0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#E0E0E0",
                    },
                  },
                  animation: "fadeInUp 1.5s",
                  "@keyframes fadeInUp": {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                InputProps={{
                  style: { color: "white" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#B0B0B0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#B0B0B0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#E0E0E0",
                    },
                  },
                  animation: "fadeInUp 2s",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: "#E0E0E0", // Accent color to match theme
                  color: "#1F1C2C", // Darker text color for contrast
                  "&:hover": {
                    backgroundColor: "#45e0b0", // Slightly lighter on hover
                  },
                  px: 4,
                  animation: "bounceIn 2s",
                  "@keyframes bounceIn": {
                    "0%, 20%, 40%, 60%, 80%, 100%": {
                      transform: "translateY(0)",
                    },
                    "50%": {
                      transform: "translateY(-10px)",
                    },
                  },
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Grid>
          </Grid>
        </form>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
            gap: 2,
            animation: "fadeIn 5s",
          }}
        >
          <IconButton
            href="https://www.linkedin.com/in/shubhansu/"
            target="_blank"
            aria-label="LinkedIn"
            sx={{ color: "#E0E0E0" }} // Light color to contrast with background
          >
            <LinkedInIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton
            href="https://www.instagram.com"
            target="_blank"
            aria-label="Instagram"
            sx={{ color: "#E0E0E0" }} // Light color to contrast with background
          >
            <InstagramIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton
            href="https://wa.me/7678161134"
            target="_blank"
            aria-label="WhatsApp"
            sx={{ color: "#E0E0E0" }} // Light color to contrast with background
          >
            <WhatsAppIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>

        <Box mt={4}>
          <Typography variant="body1">
            Email us at:{" "}
            <a href="mailto:Customerservices@techzick.com" style={{ color: "#B0B0B0" }}>
              Customerservices@techzick.com
            </a>
          </Typography>
          <Typography variant="body1" mt={1}>
            Contact Number:{" "}
            <a href="tel:91-1234567890" style={{ color: "#B0B0B0" }}>
              91-7678161134
            </a>
          </Typography>
        </Box>
      </Container>

      {/* Success & Error Alerts */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thank you for submitting the form, we'll get back to you!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
      >
        <Alert
          onClose={() => setShowError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          There was an error submitting the form. Please try again.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;
