"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const teamMembers = [
  {
    name: "Bhawesh Jha",
    title: "Founder",
    description:
      "Bhawesh Jha, founder of Fulkoka (2023), is a Project & Policy Officer at the University of Edinburgh. With experience in mental health policy in India, particularly in Bihar, he advocates for integrating social services like livelihoods and disability benefits into mental health care.\n\nHe has worked with the National Tele Mental Health Programme in collaboration with National Institute of Mental Health and Neuro-Sciences and IIIT, Bangalore, Mariwala Health Initiative, NHSRC, and ICMR. A member of the State Mental Health Authority, Bihar, his interests include suicide prevention, mental health systems, disability, and law. Bhawesh holds a master’s degree in Health Administration from TISS, Mumbai.",
  },
  {
    name: "Kartik Joya",
    title: "Director (Media & Communications)",
    description:
      "Kartik Joya, co-founder of Fulkoka (2023), is an independent filmmaker and media strategist specializing in creating impactful narratives and enhancing content for creators and organizations. With a background in Media and Culture Studies from TISS Mumbai, Kartik brings a wealth of expertise in media production, strategic communication, and advocacy.\n\nKartik has a proven ability to empower others to tell compelling stories, combining creativity and strategy to drive meaningful engagement.",
  },
  {
    name: "Dr. Sriram Subrahmanyan Swamy",
    title: "Director & Co-Founder",
    description:
      "Dr. Sriram Subrahmanian Swamy, Co-Founder of Fulkoka Foundation, is currently serving as a Senior public health specialist at Public health division of Tata Steel UISL. With extensive experience across leading organizations such as ICMR (Indian Council of Medical Research), WHO (World Health Organisation), and MSF (Doctors Without Borders), he has worked in diverse public health domains, focusing on communicable diseases like tuberculosis and HIV, vaccine-preventable illnesses, and vector-borne diseases such as dengue and chikungunya.\n\nDr. Sriram brings a wealth of expertise in program operations and implementation, with a strong emphasis on field operations and impactful communication.",
  },
  {
    name: "Anurag Labh Aman",
    title: "Collaborator",
    description:
      "Anurag Labh Aman, a Research Scholar at NITK Surathkal, where his research focuses on the effects of climate change on water resources and river management. Mr. Anurag strongly believes in the power of science to drive social change and works closely with NGOs to translate research into community-based solutions. His interest in setting up science labs in remote areas stems from a desire to make scientific education accessible to all, fostering a culture of innovation and sustainability in rural communities. By integrating sustainability education with practical experimentation, he aims to cultivate scientific curiosity and empower marginalized communities to address local challenges.",
  },
];

const OurTeam = () => {
  return (
    <Box sx={{m:0,px:0, py: 5, fontFamily: "Georgia, serif" }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Georgia",
          fontWeight: "700",
          color: "#3B173B",
          mb: 2,
          fontSize: { xs: "1.8rem", md: "2.2rem" },
        }}
      >
        Our team
      </Typography>
      <Box>
        {teamMembers.map((member, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Georgia",
                fontWeight: "700",
                color: "#3B173B", // Dark plum
                mb: 2,
              }}
            >
              {member.name}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontStyle: "italic",
                color: "#555",
                fontFamily: "Georgia, serif",
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: "1.8",
              }}
            >
              {member.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#000",
                mb: 2,
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: "1.8",
                fontFamily: "Georgia",
              }}
            >
              {member.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurTeam;
