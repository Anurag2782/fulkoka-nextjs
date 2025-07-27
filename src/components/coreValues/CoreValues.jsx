"use client";
import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const coreValuesData = [
  {
    title: "Inclusivity and non-discrimination",
    description:
      "We embrace diversity and are committed to ensuring that every individual, regardless of gender, ethnicity, religion, ability, neurodivergence, or socioeconomic status, is treated with respect and dignity. Our programs and initiatives are designed to be inclusive, accessible, and empowering for all.",
  },
  {
    title: "Equity and fairness",
    description:
      "We prioritize the needs of marginalized and underserved communities, including individuals with disabilities and neurodivergent populations. Our efforts focus on creating equitable access to resources, education, healthcare, and opportunities, fostering a society where no one is left behind.",
  },
  {
    title: "Social justice",
    description:
      "We stand for a fair and just society where everyone has the right to live with dignity, safety, and opportunity. Our work challenges systemic inequalities and advocates for policies and practices that uphold human rights and advance social equity.",
  },
  {
    title: "Harmony with nature",
    description:
      "We recognize the deep interconnection between humanity and the environment. Our initiatives promote sustainable living, the conservation of natural resources, and resilience against climate change, striving for a balanced coexistence that nurtures both people and the planet.",
  },
];

const CoreValues = () => {
  return (
    <Box
      sx={{
        px: 3,
        py: 5,

        mx: "auto",
        textAlign: "left",
        fontFamily: "Georgia, serif",
      }}
    >
      <Box
        sx={{
          maxWidth: "md",
          mx: "auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "#3B173B",
            textAlign: "center",
          }}
        >
          What guides us
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            maxWidth: "700px",
            mx: "auto",
            fontFamily: "Georgia, serif",
            color: "#4A4A4A",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            textAlign: "center",
          }}
        >
          Discover the values at the heart of our work.
        </Typography>

        <Box sx={{ mt: 4 }}>
          {coreValuesData.map((value, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#3B173B",
                  fontFamily: "Georgia, serif",
                  fontSize: "1.3rem",
                }}
              >
                {value.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  color: "#4A4A4A",
                  fontFamily: "Georgia, serif",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  lineHeight: "1.6",
                }}
              >
                {value.description}
              </Typography>
            </Box>
          ))}
        </Box>

      </Box>
        <Divider sx={{ borderColor: "#F6B83A", mt: 6 }} />
    </Box>
  );
};

export default CoreValues;
