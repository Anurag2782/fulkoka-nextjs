"use client";
import React from "react";
import { Box, Typography, Container, Divider, Link } from "@mui/material";

const linkStyles = {
  color: "#000",
  textDecoration: "underline", 
  fontWeight: "600",
  display: "inline-block", 
  marginBottom: "8px",
  fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
  transition: "color 0.3s ease-in-out", 
  '&:hover': {
    color: "#3B173B", 
  },
};

const theme = {
  secondaryColor: "#3B173B",
  backgroundColor: "#FFF8F0",
  textColor: "#4A4A4A",
  fontFamily: "Poppins",
  headingFontFamily: "Montserrat",
  linkStyles: linkStyles,
};


const NewsMediaPage = () => {
  const resources = [
    {
      href: "https://mhi.org.in/static/assets/files/asp/MHI-Suicide-Prevention-Changing-the-Narrative-Sept-2021.pdf",
      text: "Suicide Prevention: Changing the narrative (Mariwala Health Initiative, India)",
    },
    {
      href: "https://unitedgmh.org/sites/default/files/2021-09/UNITEDGMH%20Suicide%20Report%202021%C6%92.pdf",
      text: "Decriminalising Suicide: Saving Lives, Reducing Stigma",
    },
    {
      href: "https://idronline.org/article/health/it-takes-a-village-a-systemic-approach-to-suicide-prevention/",
      text: "It Takes a Village: A Systemic Approach to Suicide Prevention (IDR)",
    },
    {
      href: "https://www.ideasforindia.in/topics/miscellany/how-can-public-health-become-political-priority-hindi1.html",
      text: "लोक-स्वास्थ्य कैसे बने राजनीतिक प्राथमिकता",
    },
    {
      href: "https://www.jansatta.com/blog/corona-crisis-covid-19-jails-full-of-prisoners-can-become-super-spreader/1711063/?",
      text: "कोरोना संकट: सुपर स्प्रेडर बन सकती हैं क्षमता से अधिक भरी जेलें, आंकड़े दे रहे गवाही",
    },
    {
      href: "https://www.livehindustan.com/blog/nazariya/story-hindustan-nazaria-column-23-december-2021-5390227.html",
      text: "एक जरूरी विमर्श से मुंह मोड़े बैठा समाज",
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingY: { xs: "30px", sm: "40px", md: "60px" },
        fontFamily: theme.fontFamily,
        // backgroundColor: theme.backgroundColor,
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: theme.headingFontFamily,
            fontWeight: "700",
            color: theme.secondaryColor,
            fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
            mb: 2,
          }}
        >
          News & Media
        </Typography>
        <Divider sx={{ width: "100px", height: "3px", backgroundColor: theme.secondaryColor, margin: "0 auto" }} />
      </Box>

      <Box component="ul" sx={{ paddingLeft: { xs: "1rem", sm: "1.5rem" }, my: 6 }}>
        {resources.map((resource, index) => (
          <li key={index} style={{marginBottom : 2}}>
            <Link href={resource.href} target="_blank" rel="noopener" sx={theme.linkStyles}>
              {resource.text}
            </Link>
          </li>
        ))}
      </Box>

      <Divider sx={{ borderColor: "#C5A3C5", mb: 8 }} />
    </Container>
  );
};

export default NewsMediaPage;
