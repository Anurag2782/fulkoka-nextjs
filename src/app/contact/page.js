"use client";
import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, Container, Paper, Divider, Stack, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Phone, Map } from '@mui/icons-material';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container maxWidth="md">
      {/* Title Section */}
      <Box sx={{ textAlign: 'center', mt: 6, mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1A73E8', letterSpacing: '0.5px' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ color: '#444', mt: 2 }}>
          We’d love to hear from you! Get in touch with us for inquiries, feedback, or more information.
        </Typography>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: '500', mb: 4, textAlign: 'center', color: '#333' }}>
          Send Us a Message
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* Name Field */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': { borderRadius: '6px' },
                  '& label': { color: '#333' },
                  '& .MuiInputBase-root': { backgroundColor: '#fafafa' },
                }}
              />
            </Grid>

            {/* Email Field */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': { borderRadius: '6px' },
                  '& label': { color: '#333' },
                  '& .MuiInputBase-root': { backgroundColor: '#fafafa' },
                }}
              />
            </Grid>

            {/* Message Field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                required
                sx={{
                  '& .MuiOutlinedInput-root': { borderRadius: '6px' },
                  '& label': { color: '#333' },
                  '& .MuiInputBase-root': { backgroundColor: '#fafafa' },
                }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#1A73E8',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '12px 24px',
                  '&:hover': {
                    backgroundColor: '#0061A8',
                  },
                  borderRadius: '6px',
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      {/* Contact Information Section */}
      {/* Contact Information Section */}
<Box sx={{ mb: 6 }}>
  <Typography variant="h4" sx={{ fontWeight: '500', mb: 4, textAlign: 'center', color: '#333' }}>
    Get In Touch
  </Typography>
  <Grid container spacing={4} sx={{ display: 'flex', alignItems: 'stretch' }}>
    <Grid item xs={12} sm={4}>
      <Paper sx={{
        padding: 3, textAlign: 'center', boxShadow: 1, borderRadius: '8px', height: '100%',
        backgroundColor: '#E0F7FA', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' }
      }}>
        <Facebook sx={{ fontSize: 40, color: '#1A73E8' }} />
        <Typography variant="h6" sx={{ fontWeight: '600', color: '#1A73E8' }}>
          Email
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
          fulkokango@gmail.com
        </Typography>
      </Paper>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Paper sx={{
        padding: 3, textAlign: 'center', boxShadow: 1, borderRadius: '8px', height: '100%',
        backgroundColor: '#FFEBEE', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' }
      }}>
        <Phone sx={{ fontSize: 40, color: '#1A73E8' }} />
        <Typography variant="h6" sx={{ fontWeight: '600', color: '#1A73E8' }}>
          Phone
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
          +123-456-7890
        </Typography>
      </Paper>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Paper sx={{
        padding: 3, textAlign: 'center', boxShadow: 1, borderRadius: '8px', height: '100%',
        backgroundColor: '#FFF3E0', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' }
      }}>
        <Map sx={{ fontSize: 40, color: '#1A73E8' }} />
        <Typography variant="h6" sx={{ fontWeight: '600', color: '#1A73E8' }}>
          Address
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
          Balbhadrapur, Navtol, Laheriasarai, Darbhanga, Bihar-846001
        </Typography>
      </Paper>
    </Grid>
  </Grid>
</Box>


      {/* Social Media Section */}
      {/* Follow Us Section */}
<Box sx={{ mb: 6, textAlign: 'center', backgroundColor: '#F5F5F5', padding: 4, borderRadius: '8px' }}>
  <Typography variant="h5" sx={{ fontWeight: '600', color: '#333', mb: 4 }}>
    Stay Connected
  </Typography>
  <Typography variant="body1" sx={{ color: '#777', mb: 4 }}>
    Follow us on social media to stay updated with the latest news and updates.
  </Typography>
  <Stack direction="row" spacing={4} justifyContent="center">
    <IconButton
      color="primary"
      sx={{
        backgroundColor: '#E1F5FE', borderRadius: '50%', padding: '12px',
        '&:hover': { backgroundColor: '#B3E5FC', transform: 'scale(1.05)', transition: 'transform 0.2s ease' }
      }}
    >
      <Facebook fontSize="large" sx={{ color: '#4267B2' }} />
    </IconButton>
    <IconButton
      color="primary"
      sx={{
        backgroundColor: '#E1F5FE', borderRadius: '50%', padding: '12px',
        '&:hover': { backgroundColor: '#B3E5FC', transform: 'scale(1.05)', transition: 'transform 0.2s ease' }
      }}
    >
      <Twitter fontSize="large" sx={{ color: '#1DA1F2' }} />
    </IconButton>
    <IconButton
      color="primary"
      sx={{
        backgroundColor: '#E1F5FE', borderRadius: '50%', padding: '12px',
        '&:hover': { backgroundColor: '#B3E5FC', transform: 'scale(1.05)', transition: 'transform 0.2s ease' }
      }}
    >
      <LinkedIn fontSize="large" sx={{ color: '#0077B5' }} />
    </IconButton>
    <IconButton
      color="primary"
      sx={{
        backgroundColor: '#E1F5FE', borderRadius: '50%', padding: '12px',
        '&:hover': { backgroundColor: '#B3E5FC', transform: 'scale(1.05)', transition: 'transform 0.2s ease' }
      }}
    >
      <Instagram fontSize="large" sx={{ color: '#C13584' }} />
    </IconButton>
  </Stack>
</Box>


      {/* Footer Section */}
      <Divider sx={{ mb: 6 }} />
      
    </Container>
  );
};

export default ContactUsPage;
