"use client";
import React from 'react';
import { Box, Typography, Grid, Container, Button, Paper } from '@mui/material';

const NewsMediaPage = () => {
  return (
    <Container maxWidth="lg">
      {/* Title Section */}
      <Box sx={{ textAlign: 'center', mt: 4, mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          News & Media
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
          Stay informed with the latest news, media coverage, and updates about Fulkoka's programs, initiatives, and contributions to social causes.
        </Typography>
      </Box>

      {/* Featured News Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Featured News
        </Typography>
        <Grid container spacing={4}>
          {/* Featured News 1 */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', minHeight: '350px' }}>
              <img 
                src="https://via.placeholder.com/600x350" 
                alt="Featured News Image 1" 
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Fulkoka Launches Health Programs in Rural Communities
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                Fulkoka’s latest initiative aims to improve healthcare access for underserved rural populations. The program focuses on providing critical health services and education to the most vulnerable communities. 
              </Typography>
              <Button sx={{ mt: 2, color: '#1A73E8' }} href="/news#read-more" variant="text">
                Read More
              </Button>
            </Paper>
          </Grid>

          {/* Featured News 2 */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', minHeight: '350px' }}>
              <img 
                src="https://via.placeholder.com/600x350" 
                alt="Featured News Image 2" 
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Fulkoka Celebrates World Environment Day with New Initiatives
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                Fulkoka hosted a series of online and in-person events to commemorate World Environment Day, focusing on sustainability and environmental conservation efforts across the globe.
              </Typography>
              <Button sx={{ mt: 2, color: '#1A73E8' }} href="/news#read-more" variant="text">
                Read More
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Recent News Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Recent Updates
        </Typography>
        <Grid container spacing={4}>
          {/* Recent News 1 */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', minHeight: '350px' }}>
              <img 
                src="https://via.placeholder.com/600x350" 
                alt="Recent News Image 1" 
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Community Health Drive: Success in Rural Areas
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                Fulkoka’s recent health drive reached over 1,000 people, providing medical consultations, free medicines, and health education to rural communities. The initiative was a major success.
              </Typography>
              <Button sx={{ mt: 2, color: '#1A73E8' }} href="/news#read-more" variant="text">
                Read More
              </Button>
            </Paper>
          </Grid>

          {/* Recent News 2 */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', minHeight: '350px' }}>
              <img 
                src="https://via.placeholder.com/600x350" 
                alt="Recent News Image 2" 
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                International Women's Day Event: Empowering Change
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                In celebration of International Women's Day, Fulkoka hosted an empowering webinar on gender equality, featuring prominent speakers and advocates from around the world.
              </Typography>
              <Button sx={{ mt: 2, color: '#1A73E8' }} href="/news#read-more" variant="text">
                Read More
              </Button>
            </Paper>
          </Grid>

          {/* Recent News 3 */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', minHeight: '350px' }}>
              <img 
                src="https://via.placeholder.com/600x350" 
                alt="Recent News Image 3" 
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Fulkoka Hosts Climate Change Webinar Series
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                Fulkoka’s webinar series on climate change aimed to educate communities on the impact of global warming and ways to mitigate its effects. The series was well-received by participants worldwide.
              </Typography>
              <Button sx={{ mt: 2, color: '#1A73E8' }} href="/news#read-more" variant="text">
                Read More
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Media Coverage Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Media Coverage
        </Typography>
        <Grid container spacing={4}>
          {/* Media Coverage 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', minHeight: '350px' }}>
              <img 
                src="https://via.placeholder.com/600x350" 
                alt="Media Coverage Image 1" 
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Fulkoka's Health Programs Featured on Global News
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                Global News covered Fulkoka’s health programs aimed at rural communities, highlighting their significance in improving healthcare access and outcomes.
              </Typography>
              <Button sx={{ mt: 2, color: '#1A73E8' }} href="/news#read-more" variant="text">
                Read More
              </Button>
            </Paper>
          </Grid>

          {/* Media Coverage 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', minHeight: '350px' }}>
              <img 
                src="https://via.placeholder.com/600x350" 
                alt="Media Coverage Image 2" 
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Local News Features Fulkoka’s Efforts in Women's Empowerment
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                Local media outlet covered Fulkoka’s initiatives to promote women’s empowerment through educational and economic opportunities.
              </Typography>
              <Button sx={{ mt: 2, color: '#1A73E8' }} href="/news#read-more" variant="text">
                Read More
              </Button>
            </Paper>
          </Grid>

          {/* Media Coverage 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2, display: 'flex', flexDirection: 'column', minHeight: '350px' }}>
              <img 
                src="https://via.placeholder.com/600x350" 
                alt="Media Coverage Image 3" 
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Fulkoka and UNDP Partnership Highlighted in International Media
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mt: 2 }}>
                Fulkoka’s partnership with the UNDP to tackle global health and education challenges was covered by various international media channels.
              </Typography>
              <Button sx={{ mt: 2, color: '#1A73E8' }} href="/news#read-more" variant="text">
                Read More
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default NewsMediaPage;
