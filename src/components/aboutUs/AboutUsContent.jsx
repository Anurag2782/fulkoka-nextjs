import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

const AboutUsContent = () => {
  return (
    <Box sx={{ px: 4, py: 8 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Our Mission
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
        Fulkoka is committed to addressing emerging public health challenges through a combination of awareness, advocacy, and action.
      </Typography>

      {/* Vision Section */}
      <Grid container spacing={4} sx={{ mt: 6 }} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Our Vision
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              We envision a world where every individual enjoys optimal health and well-being.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Our Mission
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Empowering communities to create a healthier, greener, and more resilient world.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              What Guides Us
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Inclusivity, Equity, Social Justice, and Harmony with Nature are at the heart of our work.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUsContent;
