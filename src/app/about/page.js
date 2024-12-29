"use client";
import React from 'react';
import { Box, Typography, Grid, Button, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      {/* Title Section */}
      {/* Image related to Fulkoka */}
      <Box sx={{ mt: 4 }}>
          <img 
            src="https://via.placeholder.com/800x400" 
            alt="Fulkoka in Action" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
          />
        </Box>
      <Box sx={{ textAlign: 'center', mt: 4, mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
          Fulkoka is a non-profit organization dedicated to addressing public health challenges, promoting education, fostering social justice, and ensuring environmental sustainability. Our goal is to empower communities through programs that address the needs of underserved populations.
        </Typography>
        
      </Box>

      {/* Mission & Vision Section */}
      <Grid container spacing={4}>
        {/* Mission */}
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>
              At Fulkoka, our mission is to empower communities to overcome health challenges through education, advocacy, and tangible support. We focus on creating lasting change by addressing both immediate needs and long-term solutions in health, education, and social welfare.
            </Typography>
            {/* Image related to Mission */}
            <Box sx={{ mt: 2 }}>
              <img 
                src="https://via.placeholder.com/600x300" 
                alt="Mission Image" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
            </Box>
          </Box>
        </Grid>

        {/* Vision */}
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 4, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>
              We envision a world where all individuals have access to good health, education, and a clean, sustainable environment. We work towards building a society where people are empowered to make decisions that benefit their well-being and their community.
            </Typography>
            {/* Image related to Vision */}
            <Box sx={{ mt: 2 }}>
              <img 
                src="https://via.placeholder.com/600x300" 
                alt="Vision Image" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Our Values Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
              Inclusivity
            </Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>
              We believe in creating inclusive programs that serve everyone, regardless of their background, gender, or social status.
            </Typography>
            {/* Image related to Inclusivity */}
            <Box sx={{ mt: 2 }}>
              <img 
                src="https://via.placeholder.com/600x300" 
                alt="Inclusivity Image" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
              Social Justice
            </Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>
              Our work is driven by the belief that everyone deserves equal opportunities and that social justice is essential for a thriving community.
            </Typography>
            {/* Image related to Social Justice */}
            <Box sx={{ mt: 2 }}>
              <img 
                src="https://via.placeholder.com/600x300" 
                alt="Social Justice Image" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
              Sustainability
            </Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>
              We are committed to promoting environmental sustainability and advocating for practices that safeguard the future of our planet.
            </Typography>
            {/* Image related to Sustainability */}
            <Box sx={{ mt: 2 }}>
              <img 
                src="https://via.placeholder.com/600x300" 
                alt="Sustainability Image" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          Meet Our Leadership Team
        </Typography>
        <Grid container spacing={4}>
          {/* Team Member 1 */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member 1" 
                style={{ width: '150px', height: '150px', borderRadius: '50%' }}
              />
              <Typography variant="h6" sx={{ mt: 2 }}>Bhawesh Jha</Typography>
              <Typography variant="body2" sx={{ color: '#777' }}>Founder & Executive Director</Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
                Bhawesh is a visionary leader with a passion for creating social impact. He is committed to making the world a healthier, more just place.
              </Typography>
            </Box>
          </Grid>
          {/* Team Member 2 */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member 2" 
                style={{ width: '150px', height: '150px', borderRadius: '50%' }}
              />
              <Typography variant="h6" sx={{ mt: 2 }}>Karthik Joya</Typography>
              <Typography variant="body2" sx={{ color: '#777' }}>Director of Media & Communications</Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
                Karthik oversees communications strategies, ensuring Fulkoka’s message reaches a wider audience and drives engagement.
              </Typography>
            </Box>
          </Grid>
          {/* Team Member 3 */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member 3" 
                style={{ width: '150px', height: '150px', borderRadius: '50%' }}
              />
              <Typography variant="h6" sx={{ mt: 2 }}>Dr. Sriram Subrahmanyan Swamy</Typography>
              <Typography variant="body2" sx={{ color: '#777' }}>Director</Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
                Dr. Sriram brings decades of experience in public health to Fulkoka’s initiatives, ensuring effective and impactful programming.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Join Us in Creating Positive Change
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
          Fulkoka's work is only possible through the support of people like you. Join us in making a lasting difference.
        </Typography>
        <Button variant="contained" sx={{ mt: 3, backgroundColor: '#1A73E8', '&:hover': { backgroundColor: '#155fa0' } }}>
          Get Involved
        </Button>
      </Box>
    </Container>
  );
};

export default AboutUs;
