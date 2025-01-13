import React from 'react';
import { Box, Grid, Typography, Paper, Card, CardMedia, CardContent, Divider,Button } from '@mui/material';
import { FaSeedling, FaHandshake, FaHeart } from 'react-icons/fa'; // Icons for visual enhancement

const CurrentInitiatives = () => {
  const initiatives = [
    {
      title: 'Mental Health Awareness',
      description: 'Raising awareness and providing resources for mental health care across communities.',
      image: 'https://img.freepik.com/free-vector/mental-health-awareness-concept_23-2148514643.jpg',
      icon: <FaHeart />,
      buttonText: 'Get Involved',
      buttonLink: '/get-involved/volunteer',
    },
    {
      title: 'Environmental Sustainability',
      description: 'Promoting greener and more sustainable practices for a cleaner future.',
      image: 'https://th.bing.com/th/id/OIP.k99JMRreLIAWiDtj-bzT5gAAAA?rs=1&pid=ImgDetMain',
      icon: <FaSeedling />,
      buttonText: 'Donate Now',
      buttonLink: '/get-involved/donate',
    },
    {
      title: 'Educational Outreach',
      description: 'Providing educational support and resources for underprivileged communities.',
      image: 'https://th.bing.com/th/id/OIP.PEuWX5US8bgy6v8yktvGxAHaE7?rs=1&pid=ImgDetMain',
      icon: <FaHandshake />,
      buttonText: 'Join the Cause',
      buttonLink: '/get-involved/volunteer',
    },
  ];

  return (
    <Box sx={{ px: 4, py: 3 }}>
      {/* Initiatives Title */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Montserrat', // Consistent font family
          fontSize: { xs: '2rem', md: '2.8rem' },
          color: '#3B173B', // Consistent color scheme
        }}
      >
        Our Current Initiatives
      </Typography>

      {/* Initiatives Description */}
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          mt: 1,
          maxWidth: '800px',
          mx: 'auto',
          fontFamily: 'Poppins', // Consistent font family
          color: '#4A4A4A', // Consistent color scheme
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: '1.8',
        }}
      >
        Join us in making a difference through our ongoing programs and initiatives aimed at building a better future.
      </Typography>

      {/* Initiatives Grid */}
      <Grid container spacing={4} sx={{ mt: 0 }} justifyContent="center">
        {initiatives.map((initiative, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ p: 4, textAlign: 'center', backgroundColor: '#FFF8F0', borderRadius: '8px' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  fontFamily: 'Montserrat',
                  color: '#3B173B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {initiative.icon} {initiative.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, fontFamily: 'Poppins', color: '#4A4A4A' }}>
                {initiative.description}
              </Typography>
              {/* Image */}
              <Card sx={{ mt: 2 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={initiative.image}
                  alt={initiative.title}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {initiative.title} program
                  </Typography>
                </CardContent>
              </Card>
              {/* Button */}
              <Box sx={{ mt: 2 }}>
                <Button
                  href={initiative.buttonLink}
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                    padding: { xs: '6px 12px', sm: '8px 16px' },
                    fontWeight: 'bold',
                    backgroundColor: '#3B173B', // Match primary color
                  }}
                >
                  {initiative.buttonText}
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ borderColor: '#F6B83A', mt: 6 }} /> {/* Divider for emphasis */}
    </Box>
  );
};

export default CurrentInitiatives;
