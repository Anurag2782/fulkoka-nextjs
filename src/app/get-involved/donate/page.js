"use client";
import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, Container, Stack, Divider, Paper, RadioGroup, FormControlLabel, Radio, Slider } from '@mui/material';
import { FaHandsHelping, FaHeart, FaUserPlus } from 'react-icons/fa'; // Importing icons for visual enhancement

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState(100); 
  const [customAmount, setCustomAmount] = useState('');

  const handleDonationChange = (event, newValue) => {
    setDonationAmount(newValue);
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation form submission (Payment processing can go here)
    console.log(`Donation of $${customAmount || donationAmount} processed`);
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: '60px' }}>
      {/* Title Section with Gradient Background */}
      <Box sx={{ textAlign: 'center', mt: 6, mb: 6, background: 'linear-gradient(to right, #1A73E8, #0061A8)', borderRadius: '12px', padding: '40px 20px' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', letterSpacing: '0.5px' }}>
          Make a Difference with Your Donation
        </Typography>
        <Typography variant="h6" sx={{ color: '#fff', mt: 2 }}>
          Your contribution helps us continue our vital work in healthcare, education, and social justice. Every donation counts.
        </Typography>
      </Box>

      {/* Donation Form Section */}
      <Box sx={{ mb: 6, backgroundColor: '#f7f7f7', padding: '40px', borderRadius: '12px' }}>
        <Typography variant="h4" sx={{ fontWeight: '600', mb: 4, textAlign: 'center', color: '#333' }}>
          Donate Now
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* Name Field */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
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
                required
                sx={{
                  '& .MuiOutlinedInput-root': { borderRadius: '6px' },
                  '& label': { color: '#333' },
                  '& .MuiInputBase-root': { backgroundColor: '#fafafa' },
                }}
              />
            </Grid>

            {/* Donation Amount Section with Slider */}
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2, color: '#333' }}>
                Choose Your Donation Amount
              </Typography>
              <Slider
                value={donationAmount}
                onChange={handleDonationChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `₹${value}`}
                min={100}
                max={100000}
                step={100}
                sx={{ mb: 2, color: '#1A73E8' }}
              />
              <TextField
                fullWidth
                label="Or enter your custom amount"
                variant="outlined"
                type="number"
                value={customAmount}
                onChange={handleCustomAmountChange}
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
                label="Message (Optional)"
                variant="outlined"
                multiline
                rows={4}
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
                Donate Now
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      {/* Donation Options Section with Icons */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: '600', mb: 4, color: '#333' }}>
          How Your Donation Helps
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 3, textAlign: 'center', boxShadow: 3, borderRadius: '8px' }}>
              <FaHandsHelping size={50} color="#1A73E8" />
              <Typography variant="h6" sx={{ fontWeight: '600', color: '#1A73E8', mt: 2 }}>
                Health Programs
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
                Your donation helps provide medical supplies, health education, and services to underserved communities.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 3, textAlign: 'center', boxShadow: 3, borderRadius: '8px' }}>
              <FaHeart size={50} color="#1A73E8" />
              <Typography variant="h6" sx={{ fontWeight: '600', color: '#1A73E8', mt: 2 }}>
                Educational Support
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
                Funds educational programs, scholarships, and resources for children and adults in need.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ padding: 3, textAlign: 'center', boxShadow: 3, borderRadius: '8px' }}>
              <FaUserPlus size={50} color="#1A73E8" />
              <Typography variant="h6" sx={{ fontWeight: '600', color: '#1A73E8', mt: 2 }}>
                Social Justice
              </Typography>
              <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
                Supports initiatives aimed at empowering marginalized communities through advocacy and social reform.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Payment Integration Section */}
      <Box sx={{ mb: 6, textAlign: 'center', backgroundColor: '#e1f5fe', padding: '40px 20px', borderRadius: '12px' }}>
        <Typography variant="h4" sx={{ fontWeight: '600', mb: 4, color: '#333' }}>
          Choose Your Payment Method
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center">
          <Button variant="outlined" sx={{ color: '#1A73E8', borderColor: '#1A73E8', padding: '10px 20px', fontWeight: 'bold' }}>
            PayPal
          </Button>
          <Button variant="outlined" sx={{ color: '#1A73E8', borderColor: '#1A73E8', padding: '10px 20px', fontWeight: 'bold' }}>
            Credit Card
          </Button>
        </Stack>
      </Box>
      <Divider sx={{ mb: 6 }} />


      {/* Thank You Section */}
      <Box sx={{ textAlign: 'center', mb: 6, paddingTop: '40px' }}>
        <Typography variant="h4" sx={{ fontWeight: '600', color: '#333' }}>
          Thank You for Your Support!
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mt: 2 }}>
          Your generosity is truly appreciated. Your contribution will help us continue our work and make a positive impact.
        </Typography>
      </Box>

      {/* Footer Section */}
      <Divider sx={{ mb: 6 }} />
      {/* <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="body2" sx={{ color: '#bbb' }}>
          © {new Date().getFullYear()} Fulkoka. All Rights Reserved.
        </Typography>
      </Box> */}
    </Container>
  );
};

export default DonatePage;
