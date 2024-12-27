import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';

const testimonials = [
  {
    name: 'Anjali Sharma',
    title: 'Volunteer',
    feedback:
      'Working with Fulkoka has been a life-changing experience. The team’s dedication is truly inspiring.',
    avatar: '/images/anjali.jpg', // Replace with actual image paths
  },
  {
    name: 'Rahul Mehta',
    title: 'Donor',
    feedback:
      'I’m amazed by the transparency and impact of Fulkoka’s initiatives. It feels great to contribute.',
    avatar: '/images/rahul.jpg', // Replace with actual image paths
  },
  {
    name: 'Priya Gupta',
    title: 'Beneficiary',
    feedback:
      'Thanks to Fulkoka, I received the support I needed during a challenging time. Forever grateful!',
    avatar: '/images/priya.jpg', // Replace with actual image paths
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: '#f9fafb' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          fontWeight: 'bold',
        }}
      >
        What People Say About Us
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          mb: 4,
          fontSize: { xs: '0.9rem', sm: '1rem' },
          px: { xs: 1, sm: 4 },
        }}
      >
        Hear from our volunteers, donors, and beneficiaries.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: { xs: 2, sm: 3 },
                maxWidth: 350,
                textAlign: 'center',
                borderRadius: 2,
                backgroundColor: '#fff',
              }}
            >
              <Avatar
                alt={testimonial.name}
                src={testimonial.avatar}
                sx={{
                  width: { xs: 60, sm: 80 },
                  height: { xs: 60, sm: 80 },
                  margin: '0 auto',
                  mb: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  fontWeight: 'bold',
                }}
              >
                {testimonial.name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}
              >
                {testimonial.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  fontStyle: 'italic',
                  fontSize: { xs: '0.85rem', sm: '1rem' },
                }}
              >
                “{testimonial.feedback}”
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
