"use client";
import React from "react";
import { Box, Typography, Container, Divider, Link } from "@mui/material";

// Defining the theme variables for consistent styling
const theme = {
  primaryColor: "#F6B83A",  // Bright yellow for accents
  secondaryColor: "#3B173B", // Dark plum for headings
  backgroundColor: "#FFF8F0", // Light yellow background
  textColor: "#4A4A4A", // Neutral dark gray for body text
  fontFamily: "Poppins", // Consistent font family
  headingFontFamily: "Montserrat", // Consistent heading font family
};

const NewsMediaPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingY: { xs: "30px", sm: "40px", md: "60px" },
        fontFamily: theme.fontFamily,
        backgroundColor: theme.backgroundColor,
      }}
    >
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: theme.headingFontFamily,
            fontWeight: "700",
            color: theme.secondaryColor,
            fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
            marginBottom: "16px",
          }}
        >
          News & Media
        </Typography>
        <Divider
          sx={{
            width: "100px",
            height: "3px",
            backgroundColor: theme.primaryColor,
            margin: "16px auto",
          }}
        />
      </Box>

      {/* Section: Resources */}
      <Box mb={8}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: theme.headingFontFamily,
            fontWeight: "700",
            color: theme.secondaryColor,
            mb: 2,
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
          }}
        >
          Resources
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.textColor,
            mb: 3,
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            lineHeight: "1.8",
            textAlign: "justify",
          }}
        >
          Explore insightful articles and research on public health and social issues:
        </Typography>
        <Box component="ul" sx={{ paddingLeft: { xs: "1rem", sm: "1.5rem" }, mb: 3 }}>
  <li>
    <Link
      href="https://mhi.org.in/static/assets/files/asp/MHI-Suicide-Prevention-Changing-the-Narrative-Sept-2021.pdf"
      target="_blank"
      rel="noopener"
      sx={{
        color: theme.primaryColor,
        textDecoration: "none",
        fontWeight: "600",
        display: "block",
        marginBottom: "8px",
        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" }, // Increased font size here
      }}
    >
      Suicide Prevention: Changing the narrative (Mariwala Health Initiative, India)
    </Link>
  </li>
  <li>
    <Link
      href="https://unitedgmh.org/sites/default/files/2021-09/UNITEDGMH%20Suicide%20Report%202021%C6%92.pdf"
      target="_blank"
      rel="noopener"
      sx={{
        color: theme.primaryColor,
        textDecoration: "none",
        fontWeight: "600",
        display: "block",
        marginBottom: "8px",
        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" }, // Increased font size here
      }}
    >
      Decriminalising Suicide: Saving Lives, Reducing Stigma
    </Link>
  </li>
  <li>
    <Link
      href="https://idronline.org/article/health/it-takes-a-village-a-systemic-approach-to-suicide-prevention/"
      target="_blank"
      rel="noopener"
      sx={{
        color: theme.primaryColor,
        textDecoration: "none",
        fontWeight: "600",
        display: "block",
        marginBottom: "8px",
        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" }, // Increased font size here
      }}
    >
      It Takes a Village: A Systemic Approach to Suicide Prevention (IDR)
    </Link>
  </li>
  <li>
    <Link
      href="https://www.ideasforindia.in/topics/miscellany/how-can-public-health-become-political-priority-hindi1.html"
      target="_blank"
      rel="noopener"
      sx={{
        color: theme.primaryColor,
        textDecoration: "none",
        fontWeight: "600",
        display: "block",
        marginBottom: "8px",
        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" }, // Increased font size here
      }}
    >
      लोक-स्वास्थ्य कैसे बने राजनीतिक प्राथमिकता
    </Link>
  </li>
  <li>
    <Link
      href="https://www.jansatta.com/blog/corona-crisis-covid-19-jails-full-of-prisoners-can-become-super-spreader/1711063/?"
      target="_blank"
      rel="noopener"
      sx={{
        color: theme.primaryColor,
        textDecoration: "none",
        fontWeight: "600",
        display: "block",
        marginBottom: "8px",
        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" }, // Increased font size here
      }}
    >
      कोरोना संकट: सुपर स्प्रेडर बन सकती हैं क्षमता से अधिक भरी जेलें, आंकड़े दे रहे गवाही
    </Link>
  </li>
  <li>
    <Link
      href="https://www.livehindustan.com/blog/nazariya/story-hindustan-nazaria-column-23-december-2021-5390227.html"
      target="_blank"
      rel="noopener"
      sx={{
        color: theme.primaryColor,
        textDecoration: "none",
        fontWeight: "600",
        display: "block",
        marginBottom: "8px",
        fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" }, // Increased font size here
      }}
    >
      एक जरूरी विमर्श से मुंह मोड़े बैठा समाज
    </Link>
  </li>
</Box>

      </Box>

      {/* Divider */}
      <Divider sx={{ borderColor: "#C5A3C5", mb: 8 }} /> {/* Soft plum divider */}

    </Container>
  );
};

export default NewsMediaPage;
