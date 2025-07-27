"use client";
import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import OurTeam from "@/components/ourTeam/OurTeamSection";

const AboutUs = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        paddingY: { xs: "30px", sm: "40px", md: "60px" },
        fontFamily: "Georgia, serif",
      }}
    >
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            fontSize: { xs: "2rem", md: "2.8rem" },
          }}
        >
          About us
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
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mb: 6,
        maxWidth:"100%",
        // height:"400px",
        objectFit:"contain",
        // scale:"0.3",
        mx:"auto",
        
        // overflow:"hidden"
      }}
      >
        <img src="/images/Others/ChildrenImageDrawing.jpg" style={{height:"400px", width:"100%"}}/>
      </Box>

      {/* About Section */}
      <Box mb={6}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
          }}
        >
          Fulkoka is a not-for-profit organization registered under Section 8 of
          the Companies Act, Government of India. Our mission is to address
          emerging public health challenges at the upstream level through a
          combination of awareness, advocacy, and action. We focus on creating
          systemic change that improves health outcomes and promotes sustainable
          well-being for all.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            mt: 2,
          }}
        >
          Our name, Fulkoka, is inspired by the Maithili word for the wild water
          lily. We believe in the transformative power of nature and the
          resilience of communities. Just as the wild water lily flourishes in
          dynamic environments, we are committed to empowering individuals and
          communities to thrive amidst the challenges of an ever-changing world.
        </Typography>
      </Box>

      {/* Mission Section */}
      <Box mb={4}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            mb: 1,
          }}
        >
          Our mission
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
          }}
        >
          Our mission is to empower individuals and communities through comprehensive programs and interventions focused on physical health, mental well-being, education, and environmental stewardship. We are committed to fostering sustainable change, promoting equitable access to resources, and inspiring collective action to create a healthier, greener, and more resilient world.
        </Typography>
      </Box>

      {/* Vision Section */}
      <Box mb={6}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            mb: 1,
          }}
        >
          Our vision
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
          }}
        >
          Our vision is simple yet profound: we envision a world where every individual enjoys optimal physical health and mental well-being, has access to quality education, and lives in harmony with a thriving environment. We see a society where people are not just bystanders but active stewards of the planet, contributing to a sustainable future for generations to come.

        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#C5A3C5", mt: 8 }} />
      <OurTeam />
    </Container>
  );
};

export default AboutUs;
