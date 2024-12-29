"use client";
import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, Container, Paper, Divider, Stack, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

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
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: '500', mb: 4, textAlign: 'center', color: '#333' }}>
          Our Contact Information
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 3, textAlign: 'center', boxShadow: 1, borderRadius: '8px' }}>
              <Typography variant="h6" sx={{ fontWeight: '600', color: '#1A73E8' }}>
                Email
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
                contact@fulkoka.org
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 3, textAlign: 'center', boxShadow: 1, borderRadius: '8px' }}>
              <Typography variant="h6" sx={{ fontWeight: '600', color: '#1A73E8' }}>
                Phone
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
                +123-456-7890
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 3, textAlign: 'center', boxShadow: 1, borderRadius: '8px' }}>
              <Typography variant="h6" sx={{ fontWeight: '600', color: '#1A73E8' }}>
                Address
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
                123 NGO St, City, Country
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Social Media Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: '500', mb: 4, color: '#333' }}>
          Follow Us
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center" sx={{backgroundColor: '#f5f5f5', p : 2}}>
          <IconButton
            color="primary"
            sx={{
              backgroundColor: '#3b5998',
              '&:hover': { backgroundColor: '#1A73E8' },
              padding: '10px',
            }}
          >
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            sx={{
              backgroundColor: '#00acee',
              '&:hover': { backgroundColor: '#1A73E8' },
              padding: '10px',
            }}
          >
            <Twitter fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            sx={{
              backgroundColor: '#0e76a8',
              '&:hover': { backgroundColor: '#1A73E8' },
              padding: '10px',
            }}
          >
            <LinkedIn fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            sx={{
              backgroundColor: '#C13584',
              '&:hover': { backgroundColor: '#1A73E8' },
              padding: '10px',
            }}
          >
            <Instagram fontSize="large" />
          </IconButton>
        </Stack>
      </Box>

      {/* Footer Section */}
      <Divider sx={{ mb: 6 }} />
      
    </Container>
  );
};

export default ContactUsPage;
