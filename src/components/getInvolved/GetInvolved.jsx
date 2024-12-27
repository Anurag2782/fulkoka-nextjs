import { Box, Typography, Grid, Button } from '@mui/material';

const GetInvolved = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#eef3f7', px: 2 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          fontWeight: 'bold',
        }}
      >
        Get Involved
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          mb: 4,
          fontSize: { xs: '0.9rem', sm: '1rem' },
          px: { xs: 1, sm: 3 },
        }}
      >
        Join us in making a difference! Explore how you can contribute to our mission.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Volunteer Card */}
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
              Volunteer with Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: 2,
                fontSize: { xs: '0.85rem', sm: '1rem' },
              }}
            >
              Become a part of our team and help bring positive change to communities.
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
              Learn More
            </Button>
          </Box>
        </Grid>

        {/* Donate Card */}
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
              Make a Donation
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: 2,
                fontSize: { xs: '0.85rem', sm: '1rem' },
              }}
            >
              Support our initiatives with a donation and help us reach more people in need.
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
      </Grid>
    </Box>
  );
};

export default GetInvolved;
