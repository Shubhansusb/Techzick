import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, Container, Modal, Box } from "@mui/material";

const OurOfferings = () => {
  const [open, setOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState(null);

  const offerings = [
    {
      title: "Data Engineering",
      description: "Build robust data pipelines and architecture for seamless data flow.",
      details: `Our Data Engineering services include:
      
- Data Pipeline Design and Implementation: Develop and maintain scalable data pipelines.
- Data Architecture: Design architecture to support data warehousing, analytics, and reporting.
- Data Integration: Seamlessly integrate data from various sources for unified analysis.
- ETL Processes: Efficient Extract, Transform, Load processes to ensure data quality.
- Big Data Technologies: Implement technologies like Hadoop, Spark for large-scale data processing.`
    },
    {
      title: "Data Analytics and Insights",
      description: "Unlock the power of your data with our analytics and insights services.",
      details: `Our Data Analytics services include:
      
- Data Warehousing: Centralized data storage for comprehensive analysis.
- Business Intelligence: Visualize data with tools like Tableau, Power BI.
- Predictive Analytics: Forecast trends and outcomes using advanced techniques.
- Data Governance: Ensure data quality and consistency across the organization.
- Big Data Solutions: Handle large data sets with technologies like Hadoop, Spark.`
    },
    {
      title: "Software Development",
      description: "Tailored software solutions for your unique business needs.",
      details: `Our Software Development services include:
      
- Custom Application Development: Build software solutions tailored to your needs.
- Technology Stack Expertise: Specialize in React, Node.js, Python, Java, .NET.
- Agile Methodology: Continuous delivery with regular updates.
- Quality Assurance: Comprehensive testing to ensure reliability.
- Maintenance and Support: Ongoing support post-launch.`
    },
    {
      title: "Cyber Security",
      description: "Protect your business from cyber threats with comprehensive security solutions.",
      details: `Our Cyber Security services include:
      
- Security Assessments: Identify and mitigate risks with vulnerability scans.
- Network Security: Implement firewalls, IDS, and VPNs for network protection.
- Endpoint Protection: Secure devices with advanced antivirus and anti-malware.
- Incident Response: Rapid response to security breaches.
- Security Awareness Training: Educate employees on best security practices.`
    },
    {
      title: "IT Infrastructure and Services",
      description: "Optimize your IT infrastructure for efficiency and scalability.",
      details: `Our IT Infrastructure services include:
      
- IT Strategy and Planning: Align technology with business objectives.
- Infrastructure Management: Manage and optimize your IT infrastructure.
- Cloud Services: Migrate to cloud platforms like AWS, Azure, Google Cloud.
- Network Management: Design and manage secure, efficient networks.
- Disaster Recovery: Ensure business continuity with backup and recovery plans.`
    },
    {
      title: "IT Consulting",
      description: "Expert IT consulting to align technology with your business goals.",
      details: `Our IT Consulting services include:
      
- IT Strategy and Planning: Develop a comprehensive IT strategy.
- Technology Assessment: Assess current infrastructure and processes.
- Digital Transformation: Guide digital transformation initiatives.
- Project Management: Ensure IT projects are delivered on time and within budget.
- Vendor Management: Manage relationships with IT vendors for maximum value.`
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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #1A2A6C 50%, #fff 50%)",
        padding: "3.75rem 0",
        textAlign: "center",
        color: "#fff",
        
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom sx={{ fontFamily: 'Merriweather, serif', fontWeight: 'bold' }}>
          Our Offerings
        </Typography>
        <Typography variant="h7" gutterBottom sx={{ fontFamily: 'Open Sans, sans-serif', color: "white" }}>  
        Our expertise drives innovation across key areas like Data Engineering, Full Stack Development, Front-End Development, and IT Infrastructure Services. We deliver tailored solutions that empower businesses to thrive in a digital world, from strategy to execution.
        </Typography>
        <Grid container spacing={5} justifyContent="center" mt={4}>
          {offerings.map((offering, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "25rem",
                  height: "14.375rem",
                  margin: "auto",
                  backgroundColor: "#f0f0f0",   
                  boxShadow: "0px 0.625rem 0.9375rem rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: "scale(1)",
                  transition: "transform 0.5s ease-in-out, z-index 0.5s ease-in-out",
                  position: "relative",
                  zIndex: 1,
                  "&:hover": {
                    transform: "scale(1.1)",
                    zIndex: 10,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ color: "#1A2A6C", mb: 2, fontWeight: 'bold', fontFamily: 'Merriweather, serif' }}>
                    {offering.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#333", mb: 2, fontFamily: 'Open Sans, sans-serif', fontSize: "1rem" }}>
                    {offering.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#D32F2F", cursor: "pointer", textDecoration: "underline", fontFamily: 'Open Sans, sans-serif' }}
                    onClick={() => handleOpen(offering)}
                  >
                    + Learn More
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "43.75rem",
            maxHeight: '80vh',
            overflowY: 'auto',
            bgcolor: '#f0f0f0',
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
          }}
        >
          {selectedOffering && (
            <>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Merriweather, serif', fontWeight: 'bold', color: "#1A2A6C" }}>
                {selectedOffering.title}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Open Sans, sans-serif', color: "#333", whiteSpace: "pre-line", fontWeight: "bold" }}>
                {selectedOffering.details}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default OurOfferings;

