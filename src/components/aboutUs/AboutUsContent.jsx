"use client";
import React from "react";
import { Box, Grid, Typography, Paper, Card, CardMedia, CardContent, Divider } from "@mui/material";

const sections = [
  {
    title: "Education for change",
    description:
      "We believe in the power of education to break cycles of poverty and improve lives. Our programs promote access to quality learning, skill development, and awareness to empower individuals and communities.",
    image: "https://th.bing.com/th/id/OIP.dfh5p3erFtogRvjv_g-zegHaEa?rs=1&pid=ImgDetMain",
    caption: "Vision of a healthy, prosperous future for all.",
  },
  {
    title: "Public & mental health initiatives",
    description:
      "We address emerging health challenges, focusing on: Mental Health Awareness & Support, Non-Communicable Diseases (NCDs) Prevention, Commercial Determinants of Health (CDOH) Advocacy and Access to Equitable Healthcare",
    image: "https://th.bing.com/th/id/OIP.MWDj6-aB6urE_Nw8k5OzgwHaCb?rs=1&pid=ImgDetMain",
    caption: "Collaboration for a sustainable and healthier future.",
  },
  {
    title: "Environment, climate & health",
    description:
      "We recognize the deep connection between human health and the environment. Our efforts include: Climate resilience and sustainability projects, Pollution control and environmental advocacy, Disaster preparedness and community-driven solutions.",
    image: "images/HomeAboutUs/DEI2.jpg",
    caption: "Advocating for justice, equality, and sustainable harmony.",
  },
];

const AboutUsContent = () => {
  return (
    <Box sx={{ px: 4, py: 3 }}>
      {/* Mission Title and Description */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "Georgia",
          fontSize: { xs: "2rem", md: "2.8rem" },
          color: "#3B173B",
        }}
      >
        Welcome to Fulkoka
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          mt: 2,
          maxWidth: "800px",
          mx: "auto",
          fontFamily: "Georgia",
          color: "#4A4A4A",
          fontSize: { xs: "1rem", md: "1.2rem" },
          lineHeight: "1.8",
        }}
      >
        At Fulkoka, we are committed to addressing public health challenges at their roots. Through awareness, advocacy, and action, we drive systemic change that promotes better health outcomes, mental well-being, education, and environmental sustainability.

      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          mt: 2,
          mb:4,
          maxWidth: "800px",
          mx: "auto",
          fontFamily: "Georgia",
          color: "#4A4A4A",
          fontSize: { xs: "1rem", md: "1.2rem" },
          lineHeight: "1.8",
        }}
      >
Our name, Fulkoka, is inspired by the wild water lily in Maithili—a symbol of resilience and transformation. Just as the lily thrives in changing environments, we empower individuals and communities to flourish in an evolving world.

      </Typography>

      <Divider sx={{ borderColor: "#F6B83A", my: 6 }} />

      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "Georgia",
          fontSize: { xs: "2rem", md: "2.8rem" },
          color: "#3B173B",
          mt: 2,
        }}
      >
        What we do
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          mt: 2,
          maxWidth: "800px",
          mx: "auto",
          fontFamily: "Georgia",
          color: "#4A4A4A",
          fontSize: { xs: "1rem", md: "1.2rem" },
          lineHeight: "1.8",
        }}
      >
        We focus on health, education, and environmental sustainability, tackling challenges at both individual and systemic levels.

      </Typography>

      {/* Vision, Mission, Guides Us Section */}
      <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center">
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ p: 4, textAlign: "center", backgroundColor: "#FFF8F0", borderRadius: "8px", minHeight:"250px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Georgia",
                  color: "#3B173B",
                }}
              >
                {section.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, fontFamily: "Georgia", color: "#4A4A4A" }}>
                {section.description}
              </Typography>
              <Card sx={{ mt: 2 }}>
                {/* <CardMedia component="img" height="180" image={section.image} alt={section.title} /> */}
                {/* <CardContent>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Georgia" }}>
                    {section.caption}
                  </Typography>
                </CardContent> */}
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ borderColor: "#F6B83A", mt: 6 }} />
    </Box>
  );
};

export default AboutUsContent;
