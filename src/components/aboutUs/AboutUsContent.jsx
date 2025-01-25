"use client"
import React from 'react';
import { Box, Grid, Typography, Paper, Card, CardMedia, CardContent, Divider } from '@mui/material';
import { FaSeedling, FaHandshake, FaHeart } from 'react-icons/fa'; // Icons for visual enhancement

const AboutUsContent = () => {
  return (
    <Box sx={{ px: 4, py: 3 }}>
      {/* Mission Title and Description */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Montserrat',
          fontSize: { xs: '2rem', md: '2.8rem' },
          color: '#3B173B',
        }}
      >
        Our Mission
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          mt: 2,
          maxWidth: '800px',
          mx: 'auto',
          fontFamily: 'Georgia',
          color: '#4A4A4A', 
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: '1.8',
        }}
      >
        Fulkoka is committed to addressing emerging public health challenges through a combination of awareness, advocacy, and action. 
        Our goal is to empower communities, improve well-being, and advocate for a healthier and more sustainable future.
      </Typography>

      {/* Vision Section */}
      <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center">
        {/* Our Vision */}
        <Grid item xs={12} sm={6} md={4}>
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
              <FaSeedling style={{ marginRight: '8px' }} /> Our Vision
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, fontFamily: 'Georgia', color: '#4A4A4A' }}>
              We envision a world where every individual enjoys optimal health and well-being, free from preventable diseases and social disparities.
            </Typography>
            {/* Image */}
            <Card sx={{ mt: 2 }}>
              <CardMedia
                component="img"
                height="180"
                image="https://th.bing.com/th/id/OIP.dfh5p3erFtogRvjv_g-zegHaEa?rs=1&pid=ImgDetMain"
                alt="Our Vision Image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{fontFamily : 'Georgia'}}>
                  Vision of a healthy, prosperous future for all.
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        {/* Our Mission */}
        <Grid item xs={12} sm={6} md={4}>
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
              <FaHandshake style={{ marginRight: '8px' }} /> Our Mission
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, fontFamily: 'Georgia', color: '#4A4A4A' }}>
              Empowering communities to create a healthier, greener, and more resilient world through collaboration, education, and advocacy.
            </Typography>
            {/* Image */}
            <Card sx={{ mt: 2 }}>
              <CardMedia
                component="img"
                height="180"
                image="https://th.bing.com/th/id/OIP.MWDj6-aB6urE_Nw8k5OzgwHaCb?rs=1&pid=ImgDetMain"
                alt="Our Mission Image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{fontFamily : 'Georgia'}}>
                  Collaboration for a sustainable and healthier future.
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        {/* What Guides Us */}
        <Grid item xs={12} sm={6} md={4}>
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
              <FaHeart style={{ marginRight: '8px' }} /> What Guides Us
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, fontFamily: 'Georgia', color: '#4A4A4A' }}>
              Inclusivity, Equity, Social Justice, and Harmony with Nature are at the heart of our work. We believe that sustainable change starts with individual and collective empowerment.
            </Typography>
            {/* Image */}
            <Card sx={{ mt: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://th.bing.com/th/id/R.20ad86b5d39c216157784433168dc80f?rik=Y0wBgkGhaygOBw&riu=http%3a%2f%2finsightswithimpact.org%2fwp-content%2fuploads%2f2019%2f11%2fDEI-graphic.png&ehk=ADRvhrzb140AXgstSNX6ae1BiyCd83DxMjebTch%2fyGM%3d&risl=&pid=ImgRaw&r=0"
                alt="Guiding Principles Image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{fontFamily : 'Georgia'}}>
                  Advocating for justice, equality, and sustainable harmony with nature.
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: '#F6B83A', mt: 6 }} /> {/* Bright yellow divider for emphasis */}
    </Box>
  );
};

export default AboutUsContent;
