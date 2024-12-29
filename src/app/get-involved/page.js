"use client";
import React from 'react';
import { Box, Typography, Grid, Container, Button, Paper, Divider } from '@mui/material';

const GetInvolvedPage = () => {
  return (
    <Container maxWidth="lg">
      {/* Title Section */}
      <Box sx={{ textAlign: 'center', mt: 4, mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          Get Involved
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
          There are many ways you can support Fulkoka and make a difference. Join us in empowering communities and making a positive impact on society.
        </Typography>
      </Box>

      {/* Volunteering Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Volunteer with Us
        </Typography>
        <Grid container spacing={4}>
          {/* Individual Volunteering Opportunities */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column', minHeight: '250px', borderRadius: 2 }}>
              <img 
                src="https://via.placeholder.com/600x350" 
                alt="Volunteer for Health Initiatives"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px',
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Volunteer for Health Initiatives
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                Be a part of our health programs and help provide medical care to underserved communities. Volunteers play a critical role in improving healthcare accessibility.
              </Typography>
              <Button sx={{ mt: 2, color: '#1A73E8' }} href="/volunteer" variant="text">
                Learn More
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column', minHeight: '250px', borderRadius: 2 }}>
              <img 
                src="https://via.placeholder.com/600x350" 
                alt="Environmental Conservation Volunteers"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px',
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Environmental Conservation Volunteers
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                Join our sustainability and environmental conservation initiatives to make a real difference. Your effort can help us protect natural resources.
              </Typography>
              <Button sx={{ mt: 2, color: '#1A73E8' }} href="/volunteer" variant="text">
                Learn More
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column', minHeight: '250px', borderRadius: 2 }}>
              <img 
                src="https://via.placeholder.com/600x350" 
                alt="Support Women's Empowerment"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px',
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Support Women's Empowerment Programs
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                Help empower women through education, skill development, and mentorship programs. Your involvement can have a lasting impact on many lives.
              </Typography>
              <Button sx={{ mt: 2, color: '#1A73E8' }} href="/volunteer" variant="text">
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Donate Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Donate to Fulkoka
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column', minHeight: '250px', borderRadius: 2 }}>
              <img 
                src="https://via.placeholder.com/600x350" 
                alt="Donate Image"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px',
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Your Contribution Can Save Lives
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                Your donation can make a significant difference in the lives of individuals and communities. Donate today to help us support our health, education, and sustainability programs.
              </Typography>
              <Button sx={{ mt: 2, color: '#1A73E8' }} href="/donate" variant="text">
                Donate Now
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column', minHeight: '250px', borderRadius: 2 }}>
              <img 
                src="https://via.placeholder.com/600x350" 
                alt="Fund Education Programs"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px',
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Fund Our Education Programs
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                Support Fulkoka’s education programs to ensure that children and adults in marginalized communities receive the education they deserve.
              </Typography>
              <Button sx={{ mt: 2, color: '#1A73E8' }} href="/donate" variant="text">
                Donate Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Spread the Word Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Spread the Word
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
            You can also support us by spreading the word about Fulkoka’s mission. Share our initiatives on social media, tell your friends and family, and be a voice for change in your community.
          </Typography>
          <Button 
            sx={{ backgroundColor: '#1A73E8', color: 'white', padding: '10px 20px', fontWeight: 'bold' }} 
            variant="contained" 
            href="https://www.facebook.com/Fulkoka"
            target="_blank"
          >
            Share on Facebook
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default GetInvolvedPage;
