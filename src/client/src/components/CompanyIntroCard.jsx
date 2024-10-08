// import React from "react";
// import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
// import { motion } from "framer-motion";

// const WhyChooseUs = () => {
//   const reasons = [
//     {
//       title: "Innovative Solutions",
//       description: "We craft innovative solutions tailored to modern business needs.",
//       icon: "🚀",
//     },
//     {
//       title: "Scalable Services",
//       description: "Our services grow with your business, ensuring long-term scalability.",
//       icon: "📈",
//     },
//     {
//       title: "Security Focused",
//       description: "Security is at the core of our solutions, protecting your assets.",
//       icon: "🔒",
//     },
//     {
//       title: "Expert Team",
//       description: "Highly skilled professionals delivering cutting-edge solutions.",
//       icon: "🛠️",
//     },
//     {
//       title: "Client-Centric",
//       description: "Your success is our priority, and we ensure to meet your expectations.",
//       icon: "🤝",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         // backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHx8fDE2ODQzOTg4NjA&ixlib=rb-4.0.3&q=80&w=1920')`, // Replace with your image URL
//         backgroundImage: `url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Replace with your image URL
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         padding: "4rem 0",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* <Typography
//           variant="h3"
//           gutterBottom
//           sx={{
//             fontFamily: "Merriweather, serif",
//             fontWeight: "bold",
//             color: "#FFFFFF", // Change text color for better visibility
//             fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
//           }}
//         >
//           Why Choose Us
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             fontFamily: "Open Sans, sans-serif",
//             color: "#FFFFFF", // Change text color for better visibility
//             marginBottom: "3rem",
//             fontSize: { xs: "0.9rem", md: "1rem" },
//           }}
//         >
//           We bring unparalleled expertise and commitment to delivering top-notch solutions that drive real business value.
//         </Typography> */}

//         <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "1rem", borderRadius: "8px" }}>
//           <Typography
//             variant="h3"
//             gutterBottom
//             sx={{
//               fontFamily: "Merriweather, serif",
//               fontWeight: "bold",
//               color: "#FFC107",
//               fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Larger font size for more emphasis
//             }}
//           >
//             Why Choose Us
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{
//               fontFamily: "Open Sans, sans-serif",
//               color: "#CCCCCC",
//               marginBottom: "3rem",
//               fontSize: { xs: "1rem", md: "1.25rem" }, // Increase font size slightly
//             }}
//           >
//             We bring unparalleled expertise and commitment to delivering top-notch solutions that drive real business value.
//           </Typography>

//         </Box>


//         <Grid container spacing={4} justifyContent="center">
//           {reasons.map((reason, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Card
//                   sx={{
//                     height: "200px",
//                     backgroundColor: "#333333",
//                     color: "#FFFFFF",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     padding: "2rem",
//                     boxShadow: "0px 0.625rem 0.9375rem rgba(0, 0, 0, 0.5)",
//                   }}
//                 >
//                   <CardContent>
//                     <Typography
//                       variant="h4"
//                       sx={{
//                         color: "#FFC107",
//                         fontWeight: "bold",
//                         fontFamily: "Merriweather, serif",
//                         fontSize: { xs: "1.5rem", md: "1.75rem" },
//                         marginBottom: "1rem",
//                       }}
//                     >
//                       {reason.icon} {reason.title}
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       sx={{
//                         color: "#FFFFFF",
//                         fontFamily: "Open Sans, sans-serif",
//                         fontSize: { xs: "0.9rem", md: "1rem" },
//                       }}
//                     >
//                       {reason.description}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default WhyChooseUs;



// import React from "react";
// import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
// import { motion } from "framer-motion";

// const WhyChooseUs = () => {
//   const reasons = [
//     {
//       title: "Innovative Solutions",
//       description: "We craft innovative solutions tailored to modern business needs.",
//       icon: "🚀",
//     },
//     {
//       title: "Scalable Services",
//       description: "Our services grow with your business, ensuring long-term scalability.",
//       icon: "📈",
//     },
//     {
//       title: "Security Focused",
//       description: "Security is at the core of our solutions, protecting your assets.",
//       icon: "🔒",
//     },
//     {
//       title: "Expert Team",
//       description: "Highly skilled professionals delivering cutting-edge solutions.",
//       icon: "🛠️",
//     },
//     {
//       title: "Client-Centric",
//       description: "Your success is our priority, and we ensure to meet your expectations.",
//       icon: "🤝",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundImage: `url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Replace with your image URL
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         padding: "4rem 0",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//       }}
//     >
//       {/* Outer container with semi-transparent shadow background */}
//       <Box
//         sx={{
//           backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
//           padding: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive padding
//           borderRadius: "12px", // Rounded corners for the shadow box
//           width: "100%",
//           maxWidth: "1200px", // Restrict max width for better layout control
//         }}
//       >
//         <Container maxWidth="lg">
//           <Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "2rem", borderRadius: "8px" }}>
//             <Typography
//               variant="h3"
//               gutterBottom
//               sx={{
//                 fontFamily: "Merriweather, serif",
//                 fontWeight: "bold",
//                 color: "#FFC107",
//                 fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Larger font size for more emphasis
//               }}
//             >
//               Why Choose Us
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{
//                 fontFamily: "Open Sans, sans-serif",
//                 color: "#CCCCCC",
//                 marginBottom: "3rem",
//                 fontSize: { xs: "1rem", md: "1.25rem" }, // Increase font size slightly
//               }}
//             >
//               We bring unparalleled expertise and commitment to delivering top-notch solutions that drive real business value.
//             </Typography>
//           </Box>

//           {/* Grid Section */}
//           <Grid container spacing={4} justifyContent="center">
//             {reasons.map((reason, index) => (
//               <Grid item key={index} xs={12} sm={6} md={4}>
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <Card
//                     sx={{
//                       height: "100%", // Ensure cards take full height of grid
//                       backgroundColor: "#333333",
//                       color: "#FFFFFF",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       padding: "2rem",
//                       boxShadow: "0px 0.625rem 0.9375rem rgba(0, 0, 0, 0.5)", // Shadow effect for cards
//                     }}
//                   >
//                     <CardContent>
//                       <Typography
//                         variant="h4"
//                         sx={{
//                           color: "#FFC107",
//                           fontWeight: "bold",
//                           fontFamily: "Merriweather, serif",
//                           fontSize: { xs: "1.5rem", md: "1.75rem" },
//                           marginBottom: "1rem",
//                         }}
//                       >
//                         {reason.icon} {reason.title}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           color: "#FFFFFF",
//                           fontFamily: "Open Sans, sans-serif",
//                           fontSize: { xs: "0.9rem", md: "1rem" },
//                         }}
//                       >
//                         {reason.description}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default WhyChooseUs;



import React from "react";
import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
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
        backgroundImage: `url('https://images.unsplash.com/photo-1593376893114-1aed528d80cf?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "20% 40%",
        backgroundRepeat: "no-repeat",
        position: "relative", // Required for the overlay to cover the background image
      }}
    >
      {/* Full-page shadow overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Shadow overlay effect over the whole page
          zIndex: 1, // Ensures the overlay sits on top of the background but behind content
        }}
      />

      {/* Content container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2, // Ensure the content is above the shadow
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: { xs: "2rem", sm: "3rem", md: "4rem" },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
              color: "#FFC107",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Larger font size for more emphasis
            }}
          >
            Why Choose Us
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "Open Sans, sans-serif",
              color: "#CCCCCC",
              marginBottom: "2rem",
              fontSize: { xs: "1rem", md: "1.40rem" }, // Increase font size slightly
            }}
          >
            We bring unparalleled expertise and commitment to delivering top-notch solutions that drive real business value.
          </Typography>

          {/* Grid Section */}
          <Grid container spacing={4} justifyContent="center">
            {reasons.map((reason, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    sx={{
                      height: "12rem", // Ensure cards take full height of grid
                      backgroundColor: "#333333",
                      color: "#FFFFFF",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "1rem",
                      boxShadow: "0px 0.625rem 0.9375rem rgba(0, 0, 0, 0.5)", // Shadow effect for cards
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h4"
                        sx={{
                          color: "#FFC107",
                          fontWeight: "bold",
                          fontFamily: "Merriweather, serif",
                          fontSize: { xs: "1.5rem", md: "1.75rem" },
                          marginBottom: "1rem",
                        }}
                      >
                        {reason.icon} {reason.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#FFFFFF",
                          fontFamily: "Open Sans, sans-serif",
                          fontSize: { xs: "0.9rem", md: "1rem" },
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
    </Box>
  );
};

export default WhyChooseUs;
