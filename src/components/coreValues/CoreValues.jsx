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
            <img src="https://latinbusinesstoday.com/wp-content/uploads/2023/06/June-Is-Inclusivity-Month-What-It-Means-for-Us-scaled-e1686057366542.jpeg" alt="Inclusivity" style={{ width: '250px', height: '200px' }} />
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
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/200529125702-20200529-racial-unity-gfx.jpg?q=x_0,y_0,h_619,w_1100,c_fill/h_653,w_1160/f_webp" alt="Equity" style={{ width: '250px', height: '200px'}} />
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
            <img src="https://th.bing.com/th/id/OIP.on6og54NuAS-vFWNo05ikgHaHa?rs=1&pid=ImgDetMain" alt="Social Justice" style={{ width: '250px', height: '200px' }} />
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
            <img src="https://th.bing.com/th/id/OIP.R9SEALIC3vQ5i_b_ydR2owHaDv?rs=1&pid=ImgDetMain" alt="Nature" style={{width: '250px', height: '200px' }} />
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
