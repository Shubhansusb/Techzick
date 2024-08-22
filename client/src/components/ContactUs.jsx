import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./styles.css";

const apiUrl = import.meta.env.VITE_SERVER_URL;

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

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
      const res = await fetch('http://localhost:3000/api/submit', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok)
        console.log('response from the server :', res);
      
    } catch (error) {
      console.log(error);
    }
    setIsSubmitting(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      requirements: "",
    })
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1A2A6C",
        color: "white",
        py: 8,
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" >
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
                  style: { color: "white", borderColor: "white" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
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
                  style: { color: "white", borderColor: "white" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
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
                  style: { color: "white", borderColor: "white" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
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
                  style: { color: "white", borderColor: "white" },
                  className: "no-arrows",
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
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
                  style: { color: "white", borderColor: "white" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
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
                  backgroundColor: "white",
                  color: "#1A2A6C",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
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
            sx={{ color: "white" }}
          >
            <LinkedInIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton
            href="https://www.instagram.com"
            target="_blank"
            aria-label="Instagram"
            sx={{ color: "white" }}
          >
            <InstagramIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton
            href="https://www.whatsapp.com"
            target="_blank"
            aria-label="WhatsApp"
            sx={{ color: "white" }}
          >
            <WhatsAppIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ mt: 4 }}>
          Address: 500032, Janakpuri, New Delhi, India
        </Typography>
        <Typography variant="body2">Email: support@company.com</Typography>
      </Container>
    </Box>
  );
};

export default ContactUs;


