import { Box, Typography, Grid, Button } from '@mui/material';

const CurrentInitiatives = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#f4f6f8', px: 2 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          fontWeight: 'bold',
        }}
      >
        Our Current Initiatives
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Mental Health Awareness Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              border: '1px solid #ddd',
              borderRadius: 2,
              padding: { xs: 2, sm: 3 },
              backgroundColor: '#fff',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.2rem' },
                fontWeight: 'bold',
              }}
            >
              Mental Health Awareness
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: 2,
                fontSize: { xs: '0.85rem', sm: '1rem' },
              }}
            >
              Raising awareness and providing resources for mental health care across communities.
            </Typography>
            <Button
              href="/get-involved/volunteer"
              variant="contained"
              sx={{
                marginTop: 3,
                fontSize: { xs: '0.8rem', sm: '1rem' },
                padding: { xs: '6px 12px', sm: '8px 16px' },
              }}
            >
              Get Involved
            </Button>
          </Box>
        </Grid>

        {/* Environmental Sustainability Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              border: '1px solid #ddd',
              borderRadius: 2,
              padding: { xs: 2, sm: 3 },
              backgroundColor: '#fff',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.2rem' },
                fontWeight: 'bold',
              }}
            >
              Environmental Sustainability
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: 2,
                fontSize: { xs: '0.85rem', sm: '1rem' },
              }}
            >
              Promoting greener and more sustainable practices for a cleaner future.
            </Typography>
            <Button
              href="/get-involved/donate"
              variant="contained"
              sx={{
                marginTop: 3,
                fontSize: { xs: '0.8rem', sm: '1rem' },
                padding: { xs: '6px 12px', sm: '8px 16px' },
              }}
            >
              Donate Now
            </Button>
          </Box>
        </Grid>

        {/* Educational Outreach Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              border: '1px solid #ddd',
              borderRadius: 2,
              padding: { xs: 2, sm: 3 },
              backgroundColor: '#fff',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.2rem' },
                fontWeight: 'bold',
              }}
            >
              Educational Outreach
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: 2,
                fontSize: { xs: '0.85rem', sm: '1rem' },
              }}
            >
              Providing educational support and resources for underprivileged communities.
            </Typography>
            <Button
              href="/get-involved/volunteer"
              variant="contained"
              sx={{
                marginTop: 3,
                fontSize: { xs: '0.8rem', sm: '1rem' },
                padding: { xs: '6px 12px', sm: '8px 16px' },
              }}
            >
              Join the Cause
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CurrentInitiatives;
