"use client";
import React from "react";
import { Box, Typography, Container, Divider, Link } from "@mui/material";

const GetInvolvedPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingY: { xs: "30px", sm: "40px", md: "60px" },
        fontFamily: "Georgia", 
        // backgroundColor: "#FFF8F0",
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat", // Keep Montserrat for headers
            fontWeight: "700",
            color: "#3B173B",
            fontSize: { xs: "2rem", md: "2.8rem" },
          }}
        >
          Get Involved
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

      <Box mb={8}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat", // Keep Montserrat for headers
            fontWeight: "700",
            color: "#3B173B",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Give
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia", // Apply Georgia font to the body text
          }}
        >
          Your support can help us create real impact. By donating, you contribute to tackling emerging public health
          challenges such as improving mental health awareness, combating air pollution, and addressing substance
          misuse. Your generosity enables programs that promote healthier communities, sustainable environments, and
          equitable access to resources. To donate, please visit the{" "}
          <Link
            href="https://www.onlinesbi.sbi/sbicollect"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#F6B83A",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            SBI Collect website (click here)
          </Link>{" "}
          and search for Fulkoka Foundation. Together, we can drive meaningful change.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#C5A3C5", mb: 8 }} />

      <Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat", // Keep Montserrat for headers
            fontWeight: "700",
            color: "#3B173B",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Volunteer / Join Friends of Fulkoka Chapter
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia", // Apply Georgia font to the body text
          }}
        >
          Be a part of the movement! Whether you’re passionate about environmental sustainability, education, or health,
          there’s a place for you in our mission. Join the Friends of Fulkoka chapter in your institution to learn,
          contribute, and make a difference in the causes that matter to you. Fill out{" "}
          <Link
            href="#"
            sx={{
              color: "#F6B83A",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            this form
          </Link>{" "}
          and we’ll reach out to help you get started on your journey with us.
        </Typography>
      </Box>
    </Container>
  );
};

export default GetInvolvedPage;
