"use client"
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { FaLeaf } from 'react-icons/fa'; 

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '80vh',
        backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1723485760056-2b4f59326d6c?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        borderRadius: '10px',
      }}
    >
      {/* Overlay for better text visibility */}
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
      
      {/* Content Container */}
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
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
            fontSize: { xs: '2.2rem', md: '3.5rem' },
            color: '#FFF', 
          }}
        >
          About Us
        </Typography>
        
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            fontFamily: 'Georgia', 
            color: '#E0E0E0',
            fontSize: { xs: '1.2rem', md: '1.5rem' },
          }}
        >
          Empowering communities for a healthier and sustainable future.
        </Typography>

        <Button
          href="/about"
          sx={{
            mt: 4,
            px: 4,
            py: 2,
            backgroundColor: '#4B134F',
            color: 'white',
            borderRadius: 20,
            fontFamily: 'Georgia', 
            fontSize: '1rem',
            fontWeight: 'bold',
            '&:hover': {
              // backgroundColor: '#4B135F',
              scale : 1.01
            },
            textTransform:"none",
          }}
        >
          {/* <FaLeaf style={{ marginRight: '8px' }} />  */}
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
