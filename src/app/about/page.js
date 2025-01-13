"use client";
import React from "react";
import { Box, Typography, Grid, Container, Divider, Link } from "@mui/material";

const AboutUs = () => {
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
          About Us
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

      <Divider sx={{ borderColor: "#C5A3C5", my: 8 }} /> {/* Soft plum divider */}

      {/* Core Values Section */}
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            color: "#3B173B", // Dark plum
            mb: 4,
            textAlign: "center",
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Inclusivity and Equality",
              description:
                "We celebrate diversity and ensure everyone is treated with dignity, regardless of background or beliefs.",
              image:
                "https://latinbusinesstoday.com/wp-content/uploads/2023/06/June-Is-Inclusivity-Month-What-It-Means-for-Us-scaled-e1686057366542.jpeg",
            },
            {
              title: "Equity and Opportunity",
              description:
                "Our focus is on equitable access to resources and opportunities for marginalized communities.",
              image:
                "https://media.cnn.com/api/v1/images/stellar/prod/200529125702-20200529-racial-unity-gfx.jpg?q=x_0,y_0,h_619,w_1100,c_fill/h_653,w_1160/f_webp",
            },
            {
              title: "Justice and Fairness",
              description:
                "We advocate for a society where safety, dignity, and opportunity are accessible to all.",
              image:
                "https://th.bing.com/th/id/OIP.on6og54NuAS-vFWNo05ikgHaHa?rs=1&pid=ImgDetMain",
            },
            {
              title: "Environmental Stewardship",
              description:
                "We promote sustainable practices, climate resilience, and the conservation of natural resources.",
              image:
                "https://th.bing.com/th/id/OIP.R9SEALIC3vQ5i_b_ydR2owHaDv?rs=1&pid=ImgDetMain",
            },
          ].map((value, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: "8px",
                  backgroundColor: "#f5f5f5",
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
                  variant="h6"
                  sx={{
                    fontWeight: "700",
                    mb: 2,
                    color: "#3B173B", // Dark plum
                    fontFamily: "Montserrat",
                  }}
                >
                  {value.title}
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
                  {value.description}
                </Typography>
                <Box
                  sx={{
                    overflow: "hidden",
                    borderRadius: "8px",
                    height: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={value.image}
                    alt={value.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;
