"use client"
import React, { useState } from 'react';
import { Box, Grid, Typography, Paper, Divider } from '@mui/material';
import { FaUsers, FaBalanceScale, FaHandHoldingHeart, FaTree } from 'react-icons/fa';

const coreValuesData = [
  {
    icon: <FaUsers size={80} color="#3B173B" />,
    title: 'Inclusivity and Non-Discrimination',
    shortText: 'We embrace diversity and are committed to ensuring respect and dignity.',
    fullText: 'We embrace diversity and are committed to ensuring that every individual, regardless of gender, ethnicity, religion, ability, neurodivergence, or socioeconomic status, is treated with respect and dignity. Our programs and initiatives are designed to be inclusive, accessible, and empowering for all.'
  },
  {
    icon: <FaBalanceScale size={80} color="#3B173B" />,
    title: 'Equity and Fairness',
    shortText: 'We prioritize the needs of marginalized communities.',
    fullText: 'We prioritize the needs of marginalized and underserved communities, including individuals with disabilities and neurodivergent populations. Our efforts focus on creating equitable access to resources, education, healthcare, and opportunities, fostering a society where no one is left behind.'
  },
  {
    icon: <FaHandHoldingHeart size={80} color="#3B173B" />,
    title: 'Social Justice',
    shortText: 'We stand for a fair and just society.',
    fullText: 'We stand for a fair and just society where everyone has the right to live with dignity, safety, and opportunity. Our work challenges systemic inequalities and advocates for policies and practices that uphold human rights and advance social equity.'
  },
  {
    icon: <FaTree size={80} color="#3B173B" />,
    title: 'Harmony with Nature',
    shortText: 'We recognize the deep interconnection between humanity and nature.',
    fullText: 'We recognize the deep interconnection between humanity and the environment. Our initiatives promote sustainable living, the conservation of natural resources, and resilience against climate change, striving for a balanced coexistence that nurtures both people and the planet.'
  }
];

const CoreValues = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Montserrat',
          fontSize: { xs: '2rem', md: '2.8rem' },
          color: '#3B173B',
          lineHeight: '1.5'
        }}
      >
        What Guides Us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          mt: 0,
          maxWidth: '800px',
          mx: 'auto',
          fontFamily: 'Georgia',
          color: '#4A4A4A',
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: '1.8'
        }}
      >
        Discover the values at the heart of our work.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center">
        {coreValuesData.map((value, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                alignItems:"center",
                backgroundColor: '#FFF8F0',
                borderRadius: '8px',
                boxShadow: 2,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '280px',
                maxHeight: expanded === index ? 'none' : '280px', // Prevent card size change
                overflow: 'hidden', // Hide overflow when collapsed
                '&:hover': { boxShadow: 4, transform: 'scale(1.05)' },
              }}
              onClick={() => handleExpand(index)}
            >
              {value.icon}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mt: 2,
                  color: '#3B173B',
                  fontFamily: 'Georgia',
                  fontSize: '1.2rem'
                }}
              >
                {value.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  color: '#4A4A4A',
                  fontFamily: 'Georgia',
                  fontSize: '1rem',
                  transition: 'max-height 0.3s ease', // Smooth transition for expanded content
                  maxHeight: expanded === index ? '300px' : '56px', // Control max height
                  overflow: 'hidden',
                }}
              >
                {expanded === index ? value.fullText : value.shortText}
              </Typography>
              {expanded !== index && (
                <Typography variant="caption" sx={{ color: '#1A73E8', mt: 1, display: 'block' }}>
                  Click to expand
                </Typography>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ borderColor: '#F6B83A', mt: 6 }} />
    </Box>
  );
};

export default CoreValues;
