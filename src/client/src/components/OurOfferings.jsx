// import React, { useState } from "react";
// import { 
//   Card, 
//   CardContent, 
//   Typography, 
//   Grid, 
//   Container, 
//   Modal, 
//   Box, 
//   useTheme,
//   IconButton,
//   Chip
// } from "@mui/material";
// import { motion } from "framer-motion";
// import CloseIcon from '@mui/icons-material/Close';

// const OurOfferings = () => {
//   const theme = useTheme();
//   const [open, setOpen] = useState(false);
//   const [selectedOffering, setSelectedOffering] = useState(null);

//   const offerings = [
//     {
//       title: "Artificial Intelligence",
//       description: "Transform your business with cutting-edge AI solutions.",
//       details: `Our AI services leverage the latest technologies to drive innovation:
      
// • AI Strategy & Consulting: Develop comprehensive AI roadmaps
// • Machine Learning: Custom models for prediction and optimization
// • Computer Vision: Image recognition and video analytics
// • Natural Language Processing: Chatbots and document processing
// • Generative AI: Implement LLMs for content generation
// • AI Integration: Incorporate AI into existing workflows
// • Ethical AI: Responsible development with explainability`,
//       icon: "🧠",
//       gradient: "linear-gradient(135deg, #6e8efb, #a777e3)",
//       badge: "HOT"
//     },
//     {
//       title: "Data Engineering",
//       description: "Build robust data pipelines and architecture for seamless data flow.",
//       details: `Our Data Engineering services include:
      
// • Data Pipeline Design: Develop and maintain scalable data pipelines
// • Architecture Solutions: Design systems for data warehousing and analytics
// • Integration Services: Seamlessly connect data from multiple sources
// • ETL Processes: Ensure data quality through efficient transformation
// • Big Data Technologies: Implement Hadoop, Spark for large-scale processing`,
//       icon: "📊",
//       gradient: "linear-gradient(135deg, #4facfe, #00f2fe)"
//     },
//     {
//       title: "Data Analytics and Insights",
//       description: "Unlock the power of your data with advanced analytics.",
//       details: `Our Data Analytics services include:
      
// • Data Warehousing: Centralized storage for comprehensive analysis
// • Business Intelligence: Visualizations with Tableau and Power BI
// • Predictive Modeling: Forecast trends using advanced techniques
// • Data Governance: Ensure quality and consistency across systems
// • Big Data Solutions: Handle massive datasets with modern tools`,
//       icon: "🔍",
//       gradient: "linear-gradient(135deg, #f093fb, #f5576c)"
//     },
//     {
//       title: "Software Development",
//       description: "Tailored solutions for your unique business needs.",
//       details: `Our Development services include:
      
// • Custom Applications: Build software tailored to your requirements
// • Full Stack Expertise: React, Node.js, Python, Java, .NET
// • Agile Delivery: Continuous updates with iterative development
// • Quality Assurance: Comprehensive testing for reliability
// • Maintenance: Ongoing support post-launch`,
//       icon: "💻",
//       gradient: "linear-gradient(135deg, #43e97b, #38f9d7)"
//     },
//     {
//       title: "Cyber Security",
//       description: "Comprehensive protection from cyber threats.",
//       details: `Our Security services include:
      
// • Security Assessments: Identify and mitigate vulnerabilities
// • Network Protection: Firewalls, IDS, and VPN implementations
// • Endpoint Security: Advanced antivirus and anti-malware
// • Incident Response: Rapid breach containment
// • Security Training: Employee awareness programs`,
//       icon: "🛡️",
//       gradient: "linear-gradient(135deg, #ff758c, #ff7eb3)"
//     },
    
//     {
//       title: "IT Consulting",
//       description: "Align technology with your business goals.",
//       details: `Our Consulting services include:
      
// • Strategic Planning: Develop comprehensive IT roadmaps
// • Technology Assessment: Evaluate current systems
// • Digital Transformation: Guide modernization initiatives
// • Project Management: On-time, on-budget delivery
// • Vendor Management: Optimize third-party relationships`,
//       icon: "📋",
//       gradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)"
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
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: theme.palette.background.default,
//         py: 8,
//         px: { xs: 2, sm: 3 },
//       }}
//     >
//       <Container maxWidth="lg">
//         <Box textAlign="center" mb={6}>
//           <Typography
//             variant="h2"
//             gutterBottom
//             sx={{
//               fontFamily: 'Merriweather, serif',
//               fontWeight: 700,
//               color: theme.palette.text.primary,
//               fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
//               mb: 2
//             }}
//           >
//             Our Offerings
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             sx={{
//               fontFamily: 'Open Sans, sans-serif',
//               color: theme.palette.text.secondary,
//               maxWidth: 800,
//               mx: 'auto',
//               fontSize: { xs: "1rem", md: "1.1rem" },
//               lineHeight: 1.6
//             }}
//           >
//             Our expertise drives innovation across key areas. We deliver tailored solutions from strategy to execution.
//           </Typography>
//         </Box>

//         <Grid container spacing={4} justifyContent="center">
//           {offerings.map((offering, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
//               <motion.div
//                 whileHover={{ y: -10 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Card
//                   sx={{
//                     height: "100%",
//                     borderRadius: 3,
//                     background: offering.gradient,
//                     boxShadow: `0 8px 32px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
//                     transition: 'transform 0.3s, box-shadow 0.3s',
//                     border: 'none',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     overflow: 'hidden',
//                     position: 'relative',
//                     color: 'white'
//                   }}
//                 >
//                   {offering.badge && (
//                     <Chip 
//                       label={offering.badge}
//                       size="small"
//                       sx={{
//                         position: 'absolute',
//                         right: 16,
//                         top: 16,
//                         bgcolor: theme.palette.error.main,
//                         color: 'white',
//                         fontWeight: 'bold',
//                         fontSize: '0.7rem',
//                         height: 24
//                       }}
//                     />
//                   )}
//                   <CardContent
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       textAlign: "center",
//                       py: 4,
//                       px: 3,
//                       flexGrow: 1
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         fontSize: "3rem",
//                         mb: 2,
//                         filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
//                       }}
//                     >
//                       {offering.icon}
//                     </Box>
                    
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         fontWeight: 700,
//                         fontFamily: 'Merriweather, serif',
//                         mb: 2,
//                         fontSize: "1.4rem",
//                         textShadow: '0 2px 4px rgba(0,0,0,0.1)'
//                       }}
//                     >
//                       {offering.title}
//                     </Typography>
                    
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         mb: 3,
//                         flexGrow: 1,
//                         fontSize: "1rem",
//                         opacity: 0.9
//                       }}
//                     >
//                       {offering.description}
//                     </Typography>
                    
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         cursor: "pointer",
//                         fontWeight: 600,
//                         fontFamily: 'Open Sans, sans-serif',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 1,
//                         bgcolor: 'rgba(255,255,255,0.2)',
//                         px: 2,
//                         py: 1,
//                         borderRadius: 2,
//                         backdropFilter: 'blur(4px)',
//                         '&:hover': {
//                           bgcolor: 'rgba(255,255,255,0.3)'
//                         }
//                       }}
//                       onClick={() => handleOpen(offering)}
//                     >
//                       Learn More <span style={{ fontSize: '1.2rem' }}>→</span>
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       <Modal 
//         open={open} 
//         onClose={handleClose}
//         sx={{ 
//           backdropFilter: 'blur(4px)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           p: 2
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.9 }}
//           transition={{ duration: 0.2 }}
//         >
//           <Box
//             sx={{
//               width: { xs: "90vw", sm: "80vw", md: "700px" },
//               maxHeight: "90vh",
//               overflowY: "auto",
//               bgcolor: 'background.paper',
//               borderRadius: 4,
//               boxShadow: 24,
//               p: { xs: 3, md: 4 },
//               position: 'relative',
//               border: `2px solid ${selectedOffering?.gradient?.split(',')[0] || theme.palette.primary.main}`
//             }}
//           >
//             <IconButton
//               aria-label="close"
//               onClick={handleClose}
//               sx={{
//                 position: 'absolute',
//                 right: 16,
//                 top: 16,
//                 color: theme.palette.text.secondary,
//                 bgcolor: theme.palette.action.hover,
//                 '&:hover': {
//                   bgcolor: theme.palette.action.selected
//                 }
//               }}
//             >
//               <CloseIcon />
//             </IconButton>

//             {selectedOffering && (
//               <Box sx={{ pt: 2 }}>
//                 <Box sx={{ 
//                   display: 'flex', 
//                   alignItems: 'center', 
//                   gap: 2, 
//                   mb: 3,
//                   background: selectedOffering.gradient,
//                   p: 3,
//                   borderRadius: 3,
//                   color: 'white'
//                 }}>
//                   <Typography variant="h3" sx={{ fontSize: "2.5rem" }}>
//                     {selectedOffering.icon}
//                   </Typography>
//                   <Typography
//                     variant="h4"
//                     sx={{
//                       fontFamily: 'Merriweather, serif',
//                       fontWeight: 700,
//                     }}
//                   >
//                     {selectedOffering.title}
//                   </Typography>
//                 </Box>
                
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     fontFamily: 'Open Sans, sans-serif',
//                     color: theme.palette.text.secondary,
//                     whiteSpace: "pre-line",
//                     fontSize: "1.1rem",
//                     lineHeight: 1.7,
//                     '& strong': {
//                       color: theme.palette.primary.main
//                     }
//                   }}
//                 >
//                   {selectedOffering.details}
//                 </Typography>
//               </Box>
//             )}
//           </Box>
//         </motion.div>
//       </Modal>
//     </Box>
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
  IconButton,
  Chip
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';

const OurOfferings = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState(null);

  const offerings = [
    {
      title: "Artificial Intelligence",
      description: "Transform your business with cutting-edge AI solutions.",
      details: `Our AI services leverage the latest technologies to drive innovation:
      
• AI Strategy & Consulting: Develop comprehensive AI roadmaps
• Machine Learning: Custom models for prediction and optimization
• Computer Vision: Image recognition and video analytics
• Natural Language Processing: Chatbots and document processing
• Generative AI: Implement LLMs for content generation
• AI Integration: Incorporate AI into existing workflows
• Ethical AI: Responsible development with explainability`,
      icon: "🧠",
      color: theme.palette.primary.main,
      badge: "HOT"
    },
    {
      title: "Data Engineering",
      description: "Build robust data pipelines and architecture for seamless data flow.",
      details: `Our Data Engineering services include:
      
• Data Pipeline Design: Develop and maintain scalable data pipelines
• Architecture Solutions: Design systems for data warehousing and analytics
• Integration Services: Seamlessly connect data from multiple sources
• ETL Processes: Ensure data quality through efficient transformation
• Big Data Technologies: Implement Hadoop, Spark for large-scale processing`,
      icon: "📊",
      color: theme.palette.secondary.main
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
      icon: "🔍",
      color: theme.palette.info.main
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
      icon: "💻",
      color: theme.palette.success.main
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
      icon: "🛡️",
      color: theme.palette.warning.main
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
      icon: "📋",
      color: theme.palette.error.main
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
                    borderRadius: 2,
                    background: theme.palette.background.paper,
                    boxShadow: theme.shadows[3],
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    border: '1px solid',
                    borderColor: theme.palette.divider,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      boxShadow: theme.shadows[6],
                      borderColor: offering.color
                    }
                  }}
                >
                  {offering.badge && (
                    <Chip 
                      label={offering.badge}
                      size="small"
                      sx={{
                        position: 'absolute',
                        right: 16,
                        top: 16,
                        bgcolor: offering.color,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.7rem',
                        height: 24
                      }}
                    />
                  )}
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
                        color: offering.color
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
                        fontSize: "1.4rem",
                        color: theme.palette.text.primary
                      }}
                    >
                      {offering.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        flexGrow: 1,
                        fontSize: "1rem",
                        color: theme.palette.text.secondary
                      }}
                    >
                      {offering.description}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: "pointer",
                        fontWeight: 600,
                        fontFamily: 'Open Sans, sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: offering.color,
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
              borderRadius: 2,
              boxShadow: 24,
              p: { xs: 3, md: 4 },
              position: 'relative',
              borderTop: `4px solid ${selectedOffering?.color || theme.palette.primary.main}`
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
                '&:hover': {
                  color: theme.palette.text.primary
                }
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedOffering && (
              <Box sx={{ pt: 2 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2, 
                  mb: 3,
                }}>
                  <Typography variant="h3" sx={{ fontSize: "2.5rem", color: selectedOffering.color }}>
                    {selectedOffering.icon}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: 'Merriweather, serif',
                      fontWeight: 700,
                      color: theme.palette.text.primary
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