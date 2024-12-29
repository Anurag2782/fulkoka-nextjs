import { Box, Typography, Grid, Button, Card, CardMedia, CardContent } from '@mui/material';

const CurrentInitiatives = () => {
  const initiatives = [
    {
      title: 'Mental Health Awareness',
      description: 'Raising awareness and providing resources for mental health care across communities.',
      image: 'https://img.freepik.com/free-vector/mental-health-awareness-concept_23-2148514643.jpg', // Replace with your image path
      buttonText: 'Get Involved',
      buttonLink: '/get-involved/volunteer',
    },
    {
      title: 'Environmental Sustainability',
      description: 'Promoting greener and more sustainable practices for a cleaner future.',
      image: 'https://th.bing.com/th/id/OIP.k99JMRreLIAWiDtj-bzT5gAAAA?rs=1&pid=ImgDetMain', // Replace with your image path
      buttonText: 'Donate Now',
      buttonLink: '/get-involved/donate',
    },
    {
      title: 'Educational Outreach',
      description: 'Providing educational support and resources for underprivileged communities.',
      image: 'https://th.bing.com/th/id/OIP.PEuWX5US8bgy6v8yktvGxAHaE7?rs=1&pid=ImgDetMain', // Replace with your image path
      buttonText: 'Join the Cause',
      buttonLink: '/get-involved/volunteer',
    },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: '#f4f6f8', px: { xs: 2, sm: 4 } }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '1.8rem', sm: '2.4rem' },
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        Our Current Initiatives
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          maxWidth: '600px',
          margin: '0 auto',
          fontSize: { xs: '0.9rem', sm: '1rem' },
          color: '#555',
          mb: 4,
        }}
      >
        Join us in making a difference through our ongoing programs and initiatives aimed at building a better future.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {initiatives.map((initiative, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={initiative.image}
                alt={initiative.title}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1.2rem', sm: '1.4rem' },
                    fontWeight: 'bold',
                    color: '#1a73e8',
                    mb: 2,
                  }}
                >
                  {initiative.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    color: '#555',
                    mb: 3,
                  }}
                >
                  {initiative.description}
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    href={initiative.buttonLink}
                    variant="contained"
                    color="primary"
                    sx={{
                      fontSize: { xs: '0.8rem', sm: '1rem' },
                      padding: { xs: '6px 12px', sm: '8px 16px' },
                    }}
                  >
                    {initiative.buttonText}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CurrentInitiatives;
