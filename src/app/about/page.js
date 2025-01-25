"use client";
import React from "react";
import { Box, Typography, Grid, Container, Divider, Link } from "@mui/material";
import OurTeam from "@/components/ourTeam/OurTeamSection";

const AboutUs = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingY: { xs: "30px", sm: "40px", md: "60px" },
        fontFamily: "Georgia, serif", 
        // backgroundColor: "#FFF8F0",
      }}
    >
      <Box>
        
      </Box>
      {/* Page Header */}
      <Box mb={6}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat", 
            fontWeight: "700",
            color: "#3B173B", // Dark plum
            fontSize: { xs: "2rem", md: "2.8rem" },
            mb: 2,
            textAlign : "center",
          }}
        >
          About Us
        </Typography>
        <Divider
          sx={{
            width: "100px",
            height: "3px",
            backgroundColor: "#F6B83A",
            margin: "16px auto",
          }}
        />
        
      </Box>
      <Box mb={6}>
      <Typography
          variant="body1"
          width={{ xs: "100%", md: "100%" }}
          sx={{
            fontFamily: "Georgia, serif", 
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
          }}
          mx="auto"
        >
          Fulkoka is a not-for-profit organization registered under Section 8 of the Companies Act, Government of India. Our mission is to address emerging public health challenges at the upstream level through a combination of awareness, advocacy, and action. We focus on creating systemic change that improves health outcomes and promotes sustainable well-being for all.
          Our name, Fulkoka, is inspired by the Maithili word for the wild water lily. We believe in the transformative power of nature and the resilience of communities. Just as the wild water lily flourishes in dynamic environments, we are committed to empowering individuals and communities to thrive amidst the challenges of an ever-changing world.
        </Typography>
      </Box>

      {/* Mission & Vision Section */}
      <Grid container spacing={4}>
        {/* Mission */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 4,
              backgroundColor: "#e3f2fd", // Light blue background for mission
              borderRadius: "8px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: 3,
              "&:hover": {
                boxShadow: 6,
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "700",
                color: "#3B173B", // Dark plum
                mb: 2,
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#4A4A4A", // Neutral dark gray
                mb: 2,
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: "1.8",
              }}
            >
              Empowering communities to overcome challenges in health, education, and welfare. We create lasting change
              by addressing immediate needs and sustainable solutions.
            </Typography>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: "8px",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://th.bing.com/th/id/OIP.MWDj6-aB6urE_Nw8k5OzgwHaCb?rs=1&pid=ImgDetMain"
                alt="Mission"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Vision */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 4,
              backgroundColor: "#e8f5e9", // Light green background for vision
              borderRadius: "8px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: 3,
              "&:hover": {
                boxShadow: 6,
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "700",
                color: "#3B173B", // Dark plum
                mb: 2,
              }}
            >
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#4A4A4A", // Neutral dark gray
                mb: 2,
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: "1.8",
              }}
            >
              Envisioning a world where everyone enjoys health, well-being, and education in harmony with nature. Together, we build thriving communities.
            </Typography>
            <Box
              sx={{
                overflow: "hidden",
                borderRadius: "8px",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://th.bing.com/th/id/OIP.dfh5p3erFtogRvjv_g-zegHaEa?rs=1&pid=ImgDetMain"
                alt="Vision"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: "#C5A3C5", my: 8 }}/> {/* Soft plum divider */}
    </Container>
  );
};

export default AboutUs;
