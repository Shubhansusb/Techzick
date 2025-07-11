import React from "react";
import { Container, Grid, Card, CardContent, Typography, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const theme = useTheme();
  const reasons = [
    {
      title: "Innovative Solutions",
      description: "We craft innovative solutions tailored to modern business needs.",
      icon: "🚀",
    },
    {
      title: "Scalable Services",
      description: "Our services grow with your business, ensuring long-term scalability.",
      icon: "📈",
    },
    {
      title: "Security Focused",
      description: "Security is at the core of our solutions, protecting your assets.",
      icon: "🔒",
    },
    {
      title: "Expert Team",
      description: "Highly skilled professionals delivering cutting-edge solutions.",
      icon: "🛠️",
    },
    {
      title: "Client-Centric",
      description: "Your success is our priority, and we ensure to meet your expectations.",
      icon: "🤝",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1593376893114-1aed528d80cf?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "center", md: "20% 40%" },
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontFamily: "Merriweather, serif",
              fontWeight: 700,
              color: theme.palette.warning.main,
              fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
              mb: 2,
              textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Why Choose Us
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontFamily: "Open Sans, sans-serif",
              color: theme.palette.grey[300],
              maxWidth: 800,
              mx: "auto",
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              lineHeight: 1.6,
            }}
          >
            We bring unparalleled expertise and commitment to delivering top-notch solutions that drive real business value.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {reasons.map((reason, index) => (
            <Grid item key={index} xs={12} sm={6} lg={4}>
              <motion.div
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  damping: 15 
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    backgroundColor: "rgba(30, 30, 30, 0.85)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 193, 7, 0.2)",
                    overflow: "visible",
                    transition: "all 0.3s ease",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      p: { xs: 2, sm: 3 },
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        mb: 2,
                        fontSize: "3rem",
                        lineHeight: 1,
                        transform: "translateY(-25px)",
                        background: theme.palette.grey[900],
                        borderRadius: "50%",
                        width: 80,
                        height: 80,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `2px solid ${theme.palette.warning.main}`,
                        boxShadow: `0 0 20px ${theme.palette.warning.dark}`,
                      }}
                    >
                      {reason.icon}
                    </Box>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.warning.main,
                        fontFamily: "Merriweather, serif",
                        mb: 2,
                        mt: -1,
                        fontSize: { xs: "1.3rem", md: "1.5rem" },
                      }}
                    >
                      {reason.title}
                    </Typography>
                    
                    <Typography
                      sx={{
                        color: theme.palette.grey[200],
                        fontFamily: "Open Sans, sans-serif",
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        lineHeight: 1.6,
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {reason.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;