import React from 'react';
import { Box, Grid, Typography, Paper, Divider } from '@mui/material';
import { FaUsers, FaBalanceScale, FaHandHoldingHeart, FaTree } from 'react-icons/fa'; // Using unique icons

const CoreValues = () => {
  return (
    <Box sx={{ px: 4, py: 3 }}>
      {/* Core Values Title and Description */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Montserrat',
          fontSize: { xs: '2rem', md: '2.8rem' },
          color: '#3B173B', 
          lineHeight: '1.5',
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
          fontFamily: 'Poppins',
          color: '#4A4A4A', // Neutral gray for readability
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: '1.8',
        }}
      >
        Discover the values that guide our work.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center">
        {/* Inclusivity */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 4,
              textAlign: 'center',
              backgroundColor: '#FFF8F0',
              borderRadius: '8px',
              boxShadow: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: 4,
                transform: 'scale(1.05)',
              },
            }}
          >
            <FaUsers size={80} color="#3B173B" />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mt: 2,
                color: '#3B173B',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.2rem',
              }}
            >
              Inclusivity
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: '#4A4A4A',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1rem',
              }}
            >
              We embrace diversity and ensure respect for all individuals.
            </Typography>
          </Paper>
        </Grid>

        {/* Equity */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 4,
              textAlign: 'center',
              backgroundColor: '#FFF8F0',
              borderRadius: '8px',
              boxShadow: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: 4,
                transform: 'scale(1.05)',
              },
            }}
          >
            <FaBalanceScale size={80} color="#3B173B" />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mt: 2,
                color: '#3B173B',
                fontFamily: 'Poppins,',
                fontSize: '1.2rem',
              }}
            >
              Equity
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: '#4A4A4A',
                fontFamily: 'Poppins',
                fontSize: '1rem',
              }}
            >
              We focus on marginalized communities, promoting fair access to resources.
            </Typography>
          </Paper>
        </Grid>

        {/* Social Justice */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 4,
              textAlign: 'center',
              backgroundColor: '#FFF8F0',
              borderRadius: '8px',
              boxShadow: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: 4,
                transform: 'scale(1.05)',
              },
            }}
          >
            <FaHandHoldingHeart size={80} color="#3B173B" />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mt: 2,
                color: '#3B173B',
                fontFamily: 'Poppins',
                fontSize: '1.2rem',
              }}
            >
              Social Justice
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: '#4A4A4A',
                fontFamily: 'Poppins',
                fontSize: '1rem',
              }}
            >
              We advocate for policies that uphold human rights and fairness.
            </Typography>
          </Paper>
        </Grid>

        {/* Harmony with Nature */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              p: 4,
              textAlign: 'center',
              backgroundColor: '#FFF8F0',
              borderRadius: '8px',
              boxShadow: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: 4,
                transform: 'scale(1.05)',
              },
            }}
          >
            <FaTree size={80} color="#3B173B" />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mt: 2,
                color: '#3B173B',
                fontFamily: 'Poppins, sans-f',
                fontSize: '1.2rem',
              }}
            >
              Harmony with Nature
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: '#4A4A4A',
                fontFamily: 'Poppins, sans-f',
                fontSize: '1rem',
              }}
            >
              We promote sustainable living and the conservation of natural resources.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: '#F6B83A', mt: 6 }} />
    </Box>
  );
};

export default CoreValues;
