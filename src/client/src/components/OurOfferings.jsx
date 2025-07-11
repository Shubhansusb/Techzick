// import React, { useState } from "react";
// import { Card, CardContent, Typography, Grid, Container, Modal, Box } from "@mui/material";

// const OurOfferings = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedOffering, setSelectedOffering] = useState(null);

//   const offerings = [
//     {
//       title: "Data Engineering",
//       description: "Build robust data pipelines and architecture for seamless data flow.",
//       details: `Our Data Engineering services include:
      
// Data Pipeline Design and Implementation: Develop and maintain scalable data pipelines.
// Data Architecture: Design architecture to support data warehousing, analytics, and reporting.
// Data Integration: Seamlessly integrate data from various sources for unified analysis.
// ETL Processes: Efficient Extract, Transform, Load processes to ensure data quality.
// Big Data Technologies: Implement technologies like Hadoop, Spark for large-scale data processing.`,
//     },
//     {
//       title: "Data Analytics and Insights",
//       description: "Unlock the power of your data with our analytics and insights services.",
//       details: `Our Data Analytics services include:
      
// Data Warehousing: Centralized data storage for comprehensive analysis.
// Business Intelligence: Visualize data with tools like Tableau, Power BI.
// Predictive Analytics: Forecast trends and outcomes using advanced techniques.
// Data Governance: Ensure data quality and consistency across the organization.
// Big Data Solutions: Handle large data sets with technologies like Hadoop, Spark.`,
//     },
//     {
//       title: "Software Development",
//       description: "Tailored software solutions for your unique business needs.",
//       details: `Our Software Development services include:
      
// Custom Application Development: Build software solutions tailored to your needs.
// Technology Stack Expertise: Specialize in React, Node.js, Python, Java, .NET.
// Agile Methodology: Continuous delivery with regular updates.
// Quality Assurance: Comprehensive testing to ensure reliability.
// Maintenance and Support: Ongoing support post-launch.`,
//     },
//     {
//       title: "Cyber Security",
//       description: "Protect your business from cyber threats with comprehensive security solutions.",
//       details: `Our Cyber Security services include:
      
// Security Assessments: Identify and mitigate risks with vulnerability scans.
// Network Security: Implement firewalls, IDS, and VPNs for network protection.
// Endpoint Protection: Secure devices with advanced antivirus and anti-malware.
// Incident Response: Rapid response to security breaches.
// Security Awareness Training: Educate employees on best security practices.`,
//     },
//     {
//       title: "IT Infrastructure and Services",
//       description: "Optimize your IT infrastructure for efficiency and scalability.",
//       details: `Our IT Infrastructure services include:
      
// IT Strategy and Planning: Align technology with business objectives.
// Infrastructure Management: Manage and optimize your IT infrastructure.
// Cloud Services: Migrate to cloud platforms like AWS, Azure, Google Cloud.
// Network Management: Design and manage secure, efficient networks.
// Disaster Recovery: Ensure business continuity with backup and recovery plans.`,
//     },
//     {
//       title: "IT Consulting",
//       description: "Expert IT consulting to align technology with your business goals.",
//       details: `Our IT Consulting services include:
      
// IT Strategy and Planning: Develop a comprehensive IT strategy.
// Technology Assessment: Assess current infrastructure and processes.
// Digital Transformation: Guide digital transformation initiatives.
// Project Management: Ensure IT projects are delivered on time and within budget.
// Vendor Management: Manage relationships with IT vendors for maximum value.`,
//     },
//   ];

//   const handleOpen = (offering) => {
//     setSelectedOffering(offering);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedOffering(null);
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#F7F7F7",
//         padding: "3.75rem 0",
//         textAlign: "center",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Typography
//           variant="h3"
//           gutterBottom
//           sx={{
//             fontFamily: 'Merriweather, serif',
//             fontWeight: 'bold',
//             color: "#333333",
//             fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }
//           }}
//         >
//           Our Offerings
//         </Typography>
//         <Typography
//           variant="h7"
//           gutterBottom
//           sx={{
//             fontFamily: 'Open Sans, sans-serif',
//             color: "#666666",
//             fontSize: { xs: "0.9rem", md: "1rem" }
//           }}
//         >
//           Our expertise drives innovation across key areas like Data Engineering, Full Stack Development, and IT Infrastructure Services. We deliver tailored solutions from strategy to execution.
//         </Typography>
//         <Grid container spacing={4} justifyContent="center" mt={4}>
//           {offerings.map((offering, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card
//                 sx={{
//                   width: { xs: "100%", sm: "80%", md: "25rem" },
//                   height: "100%",
//                   backgroundColor: "#333333",
//                   color: "#FFFFFF",
//                   boxShadow: "0px 0.625rem 0.9375rem rgba(0, 0, 0, 0.5)",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   padding: { xs: "1rem", md: "1.5rem" },
//                   transition: "transform 0.3s, box-shadow 0.3s",  // Smooth transition
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                     boxShadow: "0px 1.25rem 1.875rem rgba(0, 0, 0, 0.5)",  // Enhanced hover effect
//                     zIndex: 10,
//                   },
//                 }}
//               >
//                 <CardContent>
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       color: "#FFC107",
//                       mb: 2,
//                       fontWeight: 'bold',
//                       fontFamily: 'Merriweather, serif',
//                       fontSize: { xs: "1.2rem", md: "1.5rem" }
//                     }}
//                   >
//                     {offering.title}
//                   </Typography>
//                   <Typography
//                     variant="body1"
//                     sx={{
//                       color: "#FFFFFF",
//                       mb: 2,
//                       fontFamily: 'Open Sans, sans-serif',
//                       fontSize: { xs: "0.9rem", md: "1rem" },
//                     }}
//                   >
//                     {offering.description}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     sx={{
//                       color: "#FFC107",
//                       cursor: "pointer",
//                       textDecoration: "underline",
//                       fontFamily: 'Open Sans, sans-serif',
//                     }}
//                     onClick={() => handleOpen(offering)}
//                   >
//                     + Learn More
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       <Modal open={open} onClose={handleClose}>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: { xs: "90%", sm: "70%", md: "45.75rem" },
//             height: { xs: "auto", md: "20rem" },
//             maxHeight: '80vh',
//             overflowY: 'auto',
//             bgcolor: '#333333',
//             color: "#FFFFFF",
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 1,
//             transition: "opacity 0.3s ease-in-out",  // Modal fade-in transition
//           }}
//         >
//           {selectedOffering && (
//             <>
//               <Typography
//                 variant="h4"
//                 gutterBottom
//                 sx={{
//                   fontFamily: 'Merriweather, serif',
//                   fontWeight: 'bold',
//                   color: "#FFC107",
//                   fontSize: { xs: "1.5rem", md: "2rem" }
//                 }}
//               >
//                 {selectedOffering.title}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 sx={{
//                   fontFamily: 'Open Sans, sans-serif',
//                   color: "#FFFFFF",
//                   whiteSpace: "pre-line",
//                   fontSize: { xs: "0.85rem", md: "1rem" },
//                 }}
//               >
//                 {selectedOffering.details}
//               </Typography>
//             </>
//           )}
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default OurOfferings;
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Container, 
  Modal, 
  Box, 
  useTheme,
  IconButton
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';

const OurOfferings = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState(null);

  const offerings = [
    {
      title: "Data Engineering",
      description: "Build robust data pipelines and architecture for seamless data flow.",
      details: `Our Data Engineering services include:
      
• Data Pipeline Design: Develop and maintain scalable data pipelines
• Architecture Solutions: Design systems for data warehousing and analytics
• Integration Services: Seamlessly connect data from multiple sources
• ETL Processes: Ensure data quality through efficient transformation
• Big Data Technologies: Implement Hadoop, Spark for large-scale processing`,
      icon: "📊"
    },
    {
      title: "Data Analytics and Insights",
      description: "Unlock the power of your data with advanced analytics.",
      details: `Our Data Analytics services include:
      
• Data Warehousing: Centralized storage for comprehensive analysis
• Business Intelligence: Visualizations with Tableau and Power BI
• Predictive Modeling: Forecast trends using advanced techniques
• Data Governance: Ensure quality and consistency across systems
• Big Data Solutions: Handle massive datasets with modern tools`,
      icon: "🔍"
    },
    {
      title: "Software Development",
      description: "Tailored solutions for your unique business needs.",
      details: `Our Development services include:
      
• Custom Applications: Build software tailored to your requirements
• Full Stack Expertise: React, Node.js, Python, Java, .NET
• Agile Delivery: Continuous updates with iterative development
• Quality Assurance: Comprehensive testing for reliability
• Maintenance: Ongoing support post-launch`,
      icon: "💻"
    },
    {
      title: "Cyber Security",
      description: "Comprehensive protection from cyber threats.",
      details: `Our Security services include:
      
• Security Assessments: Identify and mitigate vulnerabilities
• Network Protection: Firewalls, IDS, and VPN implementations
• Endpoint Security: Advanced antivirus and anti-malware
• Incident Response: Rapid breach containment
• Security Training: Employee awareness programs`,
      icon: "🛡️"
    },
    {
      title: "IT Infrastructure",
      description: "Optimize your infrastructure for efficiency.",
      details: `Our Infrastructure services include:
      
• IT Strategy: Align technology with business objectives
• Infrastructure Optimization: Manage and optimize systems
• Cloud Migration: AWS, Azure, Google Cloud solutions
• Network Design: Secure and efficient architectures
• Disaster Recovery: Business continuity planning`,
      icon: "🖥️"
    },
    {
      title: "IT Consulting",
      description: "Align technology with your business goals.",
      details: `Our Consulting services include:
      
• Strategic Planning: Develop comprehensive IT roadmaps
• Technology Assessment: Evaluate current systems
• Digital Transformation: Guide modernization initiatives
• Project Management: On-time, on-budget delivery
• Vendor Management: Optimize third-party relationships`,
      icon: "📋"
    },
  ];

  const handleOpen = (offering) => {
    setSelectedOffering(offering);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedOffering(null);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.palette.background.default,
        py: 8,
        px: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontFamily: 'Merriweather, serif',
              fontWeight: 700,
              color: theme.palette.text.primary,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 2
            }}
          >
            Our Offerings
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: 'Open Sans, sans-serif',
              color: theme.palette.text.secondary,
              maxWidth: 800,
              mx: 'auto',
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.6
            }}
          >
            Our expertise drives innovation across key areas. We deliver tailored solutions from strategy to execution.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {offerings.map((offering, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
              <motion.div
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(145deg, #1a1a1a, #2a2a2a)' 
                      : 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                    boxShadow: theme.shadows[4],
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    border: '1px solid',
                    borderColor: theme.palette.divider,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      py: 4,
                      px: 3,
                      flexGrow: 1
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "3rem",
                        mb: 2,
                        color: theme.palette.primary.main
                      }}
                    >
                      {offering.icon}
                    </Box>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        fontFamily: 'Merriweather, serif',
                        mb: 2,
                        color: theme.palette.text.primary,
                        fontSize: "1.4rem"
                      }}
                    >
                      {offering.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontFamily: 'Open Sans, sans-serif',
                        mb: 3,
                        flexGrow: 1,
                        fontSize: "1rem"
                      }}
                    >
                      {offering.description}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.primary.main,
                        cursor: "pointer",
                        fontWeight: 600,
                        fontFamily: 'Open Sans, sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                      onClick={() => handleOpen(offering)}
                    >
                      Learn More <span style={{ fontSize: '1.2rem' }}>→</span>
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Modal 
        open={open} 
        onClose={handleClose}
        sx={{ 
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <Box
            sx={{
              width: { xs: "90vw", sm: "80vw", md: "700px" },
              maxHeight: "90vh",
              overflowY: "auto",
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: 24,
              p: { xs: 3, md: 4 },
              position: 'relative',
              border: `2px solid ${theme.palette.primary.main}`
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                color: theme.palette.text.secondary,
                bgcolor: theme.palette.action.hover,
                '&:hover': {
                  bgcolor: theme.palette.action.selected
                }
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedOffering && (
              <Box sx={{ pt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Typography variant="h3" sx={{ fontSize: "2.5rem" }}>
                    {selectedOffering.icon}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: 'Merriweather, serif',
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {selectedOffering.title}
                  </Typography>
                </Box>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Open Sans, sans-serif',
                    color: theme.palette.text.secondary,
                    whiteSpace: "pre-line",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    '& strong': {
                      color: theme.palette.primary.main
                    }
                  }}
                >
                  {selectedOffering.details}
                </Typography>
              </Box>
            )}
          </Box>
        </motion.div>
      </Modal>
    </Box>
  );
};

export default OurOfferings;