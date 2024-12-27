import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '80vh',
        backgroundImage: 'url("/images/wild-water-lily.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Empowering communities for a healthier and sustainable future.
        </Typography>
        <Button
          href="#mission"
          sx={{
            mt: 4,
            px: 4,
            py: 2,
            backgroundColor: '#1A73E8',
            color: 'white',
            borderRadius: 20,
            '&:hover': {
              backgroundColor: '#1769aa',
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
