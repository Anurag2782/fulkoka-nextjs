import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

const CoreValues = () => {
  return (
    <Box sx={{ px: 4, py: 8, backgroundColor: '#f7f7f7' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        What Guides Us
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
        Discover the values that guide our work.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 6 }} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <img src="/images/inclusivity-icon.png" alt="Inclusivity" style={{ width: '60px', height: '60px' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
              Inclusivity
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              We embrace diversity and ensure respect for all individuals.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <img src="/images/equity-icon.png" alt="Equity" style={{ width: '60px', height: '60px' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
              Equity
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              We focus on marginalized communities, promoting fair access to resources.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <img src="/images/justice-icon.png" alt="Social Justice" style={{ width: '60px', height: '60px' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
              Social Justice
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              We advocate for policies that uphold human rights and fairness.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <img src="/images/nature-icon.png" alt="Nature" style={{ width: '60px', height: '60px' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
              Harmony with Nature
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              We promote sustainable living and the conservation of natural resources.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoreValues;
