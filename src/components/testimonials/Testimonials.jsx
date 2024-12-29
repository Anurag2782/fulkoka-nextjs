import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';

const testimonials = [
  {
    name: 'Anjali Sharma',
    title: 'Volunteer',
    feedback:
      'Working with Fulkoka has been a life-changing experience. The team’s dedication is truly inspiring.',
    avatar: 'https://via.placeholder.com/150/FFB6C1/000000?text=Volunteer',
  },
  {
    name: 'Rahul Mehta',
    title: 'Donor',
    feedback:
      'I’m amazed by the transparency and impact of Fulkoka’s initiatives. It feels great to contribute.',
    avatar: 'https://via.placeholder.com/150/87CEFA/000000?text=Donor',
  },
  {
    name: 'Priya Gupta',
    title: 'Beneficiary',
    feedback:
      'Thanks to Fulkoka, I received the support I needed during a challenging time. Forever grateful!',
    avatar: 'https://via.placeholder.com/150/98FB98/000000?text=Beneficiary',
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 3,
        // backgroundColor: '#eef2f5',
        textAlign: 'center',
        width:"90%",
        mx:"auto",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: '1.8rem', sm: '2.5rem' },
          fontWeight: 'bold',
          color: '#1A202C',
        }}
      >
        What People Say About Us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 5,
          fontSize: { xs: '1rem', sm: '1.2rem' },
          color: '#4A5568',
        }}
      >
        Hear inspiring stories from our community of volunteers, donors, and beneficiaries.
      </Typography>

      <Grid container spacing={5} justifyContent="center">
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
              elevation={4}
              sx={{
                padding: { xs: 3, sm: 4 },
                maxWidth: 400,
                textAlign: 'center',
                borderRadius: 3,
                backgroundColor: '#ffffff',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                },
              }}
            >
              <Avatar
                alt={testimonial.name}
                src={testimonial.avatar}
                sx={{
                  width: { xs: 70, sm: 100 },
                  height: { xs: 70, sm: 100 },
                  margin: '0 auto',
                  mb: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1.2rem', sm: '1.5rem' },
                  fontWeight: 'bold',
                  color: '#2D3748',
                }}
              >
                {testimonial.name}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#718096',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  mb: 2,
                }}
              >
                {testimonial.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontStyle: 'italic',
                  color: '#4A5568',
                  fontSize: { xs: '1rem', sm: '1.1rem' },
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
