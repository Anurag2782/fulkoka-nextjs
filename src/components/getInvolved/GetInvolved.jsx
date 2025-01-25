import React from 'react';
import { Box, Grid, Typography, Paper, Card, CardMedia, CardContent, Button, Divider } from '@mui/material';
import { FaSeedling, FaHandshake, FaHeart } from 'react-icons/fa';

const GetInvolved = () => {
  const involvementOptions = [
    {
      title: 'Volunteer with Us',
      description: 'Lend your skills and time to help us organize events, run campaigns, and empower communities in need.',
      image: 'https://www.disabilityscot.org.uk/wp-content/uploads/2022/09/volwithusnarrow.jpg',
      icon: <FaHandshake />,
      buttonText: 'Learn More',
      buttonLink: '/get-involved/donate',
    },
    {
      title: 'Make a Donation',
      description: 'Your generous contributions fuel our mission to provide education, healthcare, and other critical services.',
      image: 'https://th.bing.com/th/id/OIP.y85FJQ1i1v6iCLxomlZzjgHaHa?rs=1&pid=ImgDetMain',
      icon: <FaHeart />,
      buttonText: 'Donate Now',
      buttonLink: '/get-involved/donate',
    },
    {
      title: 'Partner with Us',
      description: 'Collaborate with us as a corporate or community partner and help expand our reach and impact.',
      image: 'https://cdn-icons-png.flaticon.com/512/6533/6533065.png',
      icon: <FaSeedling />,
      buttonText: 'Partner Now',
      buttonLink: '/get-involved/donate',
    },
  ];

  return (
    <Box sx={{ px: 4, py: 3,mb:3 }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Montserrat',
          fontSize: { xs: '2rem', md: '2.8rem' },
          color: '#3B173B',
        }}
      >
        Get Involved
      </Typography>

      {/* Section Description */}
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          mt: 0,
          maxWidth: '800px',
          mx: 'auto',
          fontFamily: 'Georgia',
          color: '#4A4A4A',
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: '1.8',
        }}
      >
        Join us in making a difference! Whether it’s volunteering your time, contributing financially, or simply spreading awareness, every action matters. Together, we can build a brighter future.
      </Typography>

      {/* Grid of Get Involved Options */}
      <Grid container spacing={4} sx={{ mt: 0 }} justifyContent="center">
        {involvementOptions.map((option, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ p: 4, textAlign: 'center', backgroundColor: '#FFF8F0', borderRadius: '8px' }}>
              {/* Image */}
              <Card sx={{ my: 2 ,
                    // height : "auto",
                    borderRadius: '8px',
                    objectFit: 'cover',
                    maxHeight: {xs : 'auto',md :'150px'},
                    mx: 'auto',
                    backgroundColor:"#FFF",}}>
                <CardMedia
                  // component="img"
                  height="150"
                  // image={option.image}
                  // alt={option.title}
                  sx={{
                    // width: {xs : "60%",md :'40%'},
                    // height : "auto",
                    borderRadius: '8px',
                    objectFit: 'cover',
                    maxHeight: {xs : 'auto',md :'150px'},
                    mx: 'auto',
                    backgroundColor:"#FFF",
                    padding: 2,
                  }}
                >
                  <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  fontFamily: 'Montserrat',
                  color: '#3B173B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {option.icon} {option.title}
              </Typography>

                </CardMedia>
                
              </Card>
              
              <Typography variant="body2" sx={{ mt: 2, fontFamily: 'Georgia', color: '#4A4A4A' }}>
                {option.description}
              </Typography>
              
              {/* Button */}
              <Box sx={{ mt: 2 }}>
                <Button
                  href={option.buttonLink}
                  variant="contained"
                  color="primary"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                    padding: { xs: '6px 12px', sm: '8px 16px' },
                    fontWeight: 'bold',
                    backgroundColor: '#3B173B',
                    fontFamily : ""
                  }}
                >
                  {option.buttonText}
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* <Divider sx={{ borderColor: '#F6B83A', my: 6 }} />  */}
    </Box>
  );
};

export default GetInvolved;
