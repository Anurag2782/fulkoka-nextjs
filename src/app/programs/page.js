"use client";
import React from "react";
import { Box, Typography, Container, Divider, Link } from "@mui/material";
import { FaHeartbeat, FaBookOpen, FaRecycle, FaHandsHelping } from "react-icons/fa";

const ProgramsPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingY: { xs: "30px", sm: "40px", md: "60px" },
        fontFamily: "Poppins",
        backgroundColor: "#FFF8F0", // Light yellow background
      }}
    >
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat", // Updated heading font
            fontWeight: "700",
            color: "#3B173B", // Dark plum
            fontSize: { xs: "2rem", md: "2.8rem" },
          }}
        >
          Strategic Focus Areas
        </Typography>
        <Divider
          sx={{
            width: "100px",
            height: "3px",
            backgroundColor: "#F6B83A", // Bright yellow for emphasis
            margin: "16px auto",
          }}
        />
      </Box>

      {/* Strategic Focus Section */}
      <Box textAlign="center" mb={6}>
        {/* <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            color: "#3B173B", // Dark plum
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Strategic Focus Areas
        </Typography> */}
        <Typography
          variant="body1"
          sx={{
            color: "#4A4A4A", // Neutral dark gray
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
          }}
        >
          Transforming lives through education, health initiatives, and environmental sustainability.
        </Typography>
      </Box>

      {/* Section: Education */}
      <Box mb={{ xs: 4, md: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat", // Updated heading font
            fontWeight: "700",
            color: "#3B173B", // Dark plum
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Education
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
          At Fulkoka, we firmly believe in the power of education as a catalyst for positive change. Education is
          not just about acquiring knowledge; it is about unlocking opportunities, fostering creativity, and nurturing
          empathy. By promoting education, we aim to address the root causes of poverty, improve health outcomes, and
          preserve our precious environment and climate for future generations.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#4A4A4A", // Neutral dark gray
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
          }}
        >
          We recognize that health is not merely the absence of disease but a state of complete physical, mental,
          and social well-being. In today's world, the challenges to our health are manifold, ranging from
          non-communicable diseases (NCDs) to mental health issues and the impacts of climate change. Our Health
          Initiative is dedicated to addressing these interconnected challenges and promoting holistic well-being for
          all.
        </Typography>
      </Box>

      <Divider sx={{ my: 4, borderColor: "#C5A3C5" }} /> {/* Soft plum divider */}

      {/* Section: Public Health */}
      <Box mb={{ xs: 4, md: 8 }} mt={{ xs: 4, md: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            color: "#3B173B", // Dark plum
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Public Health
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            color: "#3B173B", // Dark plum
            mb: 2,
            fontSize: { xs: "1.6rem", md: "1.9rem" },
          }}
        >
          Mental Health & Non-Communicable Diseases
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
          Mental health is an essential component of overall well-being, yet it is often overlooked or stigmatized in
          many societies. The prevalence of mental health disorders is increasing globally, exacerbated by factors
          such as social isolation, economic instability, and traumatic experiences.
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
          Non-communicable diseases (NCDs)—such as cardiovascular diseases, diabetes, cancer, and chronic respiratory
          conditions—are the leading causes of death globally, accounting for over 70% of all deaths. Addressing these
          challenges requires understanding the commercial determinants of health (CDOH), which include the ways
          industries influence policy, behavior, and health outcomes.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            color: "#3B173B", // Dark plum
            mb: 2,
            fontSize: { xs: "1.6rem", md: "1.9rem" },
          }}
        >
          Understanding the Commercial Determinants of Health
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#4A4A4A", // Neutral dark gray
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
          }}
        >
          The commercial determinants of health involve the ways industries influence policy, behavior, and health:
        </Typography>
        <Box sx={{padding: '1rem',}}
        >

        
        <ul
  style={{
    fontSize: '1.2rem', 
    lineHeight: '1.6', 
    color: '#4A4A4A', 
    
  }}
>
  <li>
    <strong>Marketing and Advertising:</strong> Aggressive promotion of unhealthy products like sugary drinks, ultra-processed foods, and tobacco.
  </li>
  <li>
    <strong>Policy Influence:</strong> Lobbying to weaken public health regulations, such as taxes on sugary drinks or restrictions on alcohol advertising.
  </li>
  <li>
    <strong>Product Accessibility and Pricing:</strong> Ensuring affordability and wide availability of unhealthy products.
  </li>
  <li>
    <strong>Corporate Social Responsibility:</strong> Tactics to improve public perception while deflecting attention from negative health impacts.
  </li>
</ul>
</Box>

        <Typography
          variant="body1"
          sx={{
            color: "#4A4A4A", // Neutral dark gray
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
          }}
        >
          Addressing these systemic issues is critical to reducing NCD prevalence and promoting healthier environments.
        </Typography>
      </Box>

      <Divider sx={{ my: 4, borderColor: "#C5A3C5" }} /> {/* Soft plum divider */}

      {/* Section: Environment, Climate Change, and Health */}
      <Box mb={{ xs: 4, md: 8 }} mt={{ xs: 4, md: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            color: "#3B173B", // Dark plum
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Environment, Climate Change, and Health
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
          The health of people and the planet are deeply interconnected. Environmental degradation—through air pollution, water contamination, and deforestation—undermines human health, contributing to respiratory diseases, waterborne illnesses, and loss of biodiversity. Climate change amplifies these challenges, driving extreme weather events, altering ecosystems, and worsening global health crises.
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
          Rising temperatures and unpredictable weather patterns are increasing the spread of vector-borne diseases like malaria and dengue, worsening food insecurity, and triggering mental health crises due to displacement and uncertainty. Vulnerable populations, especially in low-income settings, bear the brunt of these impacts, despite contributing the least to climate change.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#4A4A4A", // Neutral dark gray
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
          }}
        >
          Addressing these issues requires integrated action through initiatives like reducing greenhouse gas emissions, restoring ecosystems, promoting sustainable agriculture, and building climate-resilient health systems. Equity must remain central to these efforts, ensuring marginalized communities are empowered and protected.
        </Typography>
      </Box>
    </Container>
  );
};

export default ProgramsPage;
