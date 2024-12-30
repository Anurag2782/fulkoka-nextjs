"use client";
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { FaHeartbeat, FaBookOpen, FaRecycle, FaHandsHelping } from 'react-icons/fa';

const programsData = [
  {
    title: "Healthcare Initiatives",
    description: "Providing essential healthcare services and education to underserved communities. Our healthcare programs focus on preventive measures, regular check-ups, and medical camps to improve health awareness.",
    icon: <FaHeartbeat size={80} color="#1A73E8" />,
    image: "https://via.placeholder.com/600x400", // Replace with relevant healthcare image URL
  },
  {
    title: "Education Support",
    description: "Promoting education through scholarships, resources, and community programs. We aim to bridge the education gap in rural and underprivileged areas with sustainable initiatives.",
    icon: <FaBookOpen size={80} color="#1A73E8" />,
    image: "https://via.placeholder.com/600x400", // Replace with relevant education image URL
  },
  {
    title: "Environmental Sustainability",
    description: "Driving initiatives focused on clean energy, waste reduction, and green living. Join us in making the planet greener with tree plantation drives and eco-awareness campaigns.",
    icon: <FaRecycle size={80} color="#1A73E8" />,
    image: "https://via.placeholder.com/600x400", // Replace with relevant environment image URL
  },
  {
    title: "Social Empowerment",
    description: "Empowering marginalized communities through advocacy and skills development. We work to provide equal opportunities and foster a sense of dignity among all individuals.",
    icon: <FaHandsHelping size={80} color="#1A73E8" />,
    image: "https://via.placeholder.com/600x400", // Replace with relevant empowerment image URL
  },
];

const ProgramsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: '60px', paddingBottom: '60px' }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1A73E8', mb: 2 }}>
          Our Programs
        </Typography>
        <Typography variant="h6" sx={{ color: '#555' }}>
          Learn about our impactful initiatives shaping a better world.
        </Typography>
      </Box>

      {/* Timeline Design */}
      <Grid container spacing={6}>
        {programsData.map((program, index) => (
          <Grid
            container
            spacing={4}
            key={index}
            direction={index % 2 === 0 ? 'row' : 'row-reverse'}
            alignItems="center"
          >
            {/* Icon and Description */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                {program.icon}
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A73E8', mt: 2 }}>
                  {program.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mt: 1 }}>
                  {program.description}
                </Typography>
              </Box>
            </Grid>

            {/* Image */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  backgroundImage: `url(${program.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '12px',
                  height: 300,
                }}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProgramsPage;
