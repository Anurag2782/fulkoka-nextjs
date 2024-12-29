import { Box, Typography, Grid, Button } from '@mui/material';

const GetInvolved = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#eef3f7', px: { xs: 2, sm: 4, md: 6 } }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          fontWeight: 'bold',
          color: '#333',
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
          color: '#555',
          px: { xs: 2, sm: 6 },
        }}
      >
        Join us in making a difference! Whether it’s volunteering your time, contributing financially, or simply spreading awareness, every action matters. Together, we can build a brighter future.
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {/* Volunteer Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              border: '1px solid #ddd',
              borderRadius: 2,
              padding: { xs: 3, sm: 4 },
              backgroundColor: '#fff',
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <Box
              component="img"
              src="https://www.disabilityscot.org.uk/wp-content/uploads/2022/09/volwithusnarrow.jpg"
              alt="Volunteer"
              sx={{
                width: '50%',
                borderRadius: '8px',
                mb: 2,
                objectFit: 'cover',
                maxHeight: '150px',
                mx:"auto"
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.2rem' },
                fontWeight: 'bold',
                color: '#1a73e8',
              }}
            >
              Volunteer with Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: 2,
                fontSize: { xs: '0.85rem', sm: '1rem' },
                color: '#555',
              }}
            >
              Lend your skills and time to help us organize events, run campaigns, and empower communities in need.
            </Typography>
            <Button
              href="/get-involved/volunteer"
              variant="contained"
              color="primary"
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
              padding: { xs: 3, sm: 4 },
              backgroundColor: '#fff',
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <Box
              component="img"
              src='https://th.bing.com/th/id/OIP.y85FJQ1i1v6iCLxomlZzjgHaHa?rs=1&pid=ImgDetMain'
              alt="Donate"
              sx={{
                width: '40%',
                borderRadius: '8px',
                mb: 2,
                objectFit: 'cover',
                maxHeight: '150px',
                mx:"auto"
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.2rem' },
                fontWeight: 'bold',
                color: '#1a73e8',
              }}
            >
              Make a Donation
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: 2,
                fontSize: { xs: '0.85rem', sm: '1rem' },
                color: '#555',
              }}
            >
              Your generous contributions fuel our mission to provide education, healthcare, and other critical services.
            </Typography>
            <Button
              href="/get-involved/donate"
              variant="contained"
              color="primary"
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

        {/* Partner Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              border: '1px solid #ddd',
              borderRadius: 2,
              padding: { xs: 3, sm: 4 },
              backgroundColor: '#fff',
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <Box
              component="img"
              src="https://cdn-icons-png.flaticon.com/512/6533/6533065.png"
              alt="Partner"
              sx={{
                width: '35%',
                borderRadius: '8px',
                mb: 2,
                objectFit: 'cover',
                maxHeight: '150px',
                mx:"auto"
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.2rem' },
                fontWeight: 'bold',
                color: '#1a73e8',
              }}
            >
              Partner with Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: 2,
                fontSize: { xs: '0.85rem', sm: '1rem' },
                color: '#555',
              }}
            >
              Collaborate with us as a corporate or community partner and help expand our reach and impact.
            </Typography>
            <Button
              href="/get-involved/partner"
              variant="contained"
              color="primary"
              sx={{
                marginTop: 3,
                fontSize: { xs: '0.8rem', sm: '1rem' },
                padding: { xs: '6px 12px', sm: '8px 16px' },
              }}
            >
              Partner Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetInvolved;
