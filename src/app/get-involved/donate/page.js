"use client";
import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, Container, Divider, Link } from '@mui/material';
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
    <Container
      maxWidth="lg"
      sx={{
        paddingY: { xs: "30px", sm: "40px", md: "60px" },
        fontFamily: "Poppins",
        backgroundColor: "#FFF8F0", // Light yellow background similar to GetInvolvedPage
      }}
    >
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat", // Consistent with GetInvolvedPage
            fontWeight: "700",
            color: "#3B173B", // Dark plum color
            fontSize: { xs: "2rem", md: "2.8rem" },
          }}
        >
          Make a Difference with Your Donation
        </Typography>
        <Divider
          sx={{
            width: "100px",
            height: "3px",
            backgroundColor: "#F6B83A", // Bright yellow for emphasis
            margin: "16px auto",
          }}
        />
      </Box>

      {/* Donation Information Section */}
      <Typography
        variant="body1"
        sx={{
          color: "#4A4A4A", // Neutral dark gray
          mb: 6,
          fontSize: { xs: "1rem", md: "1.2rem" },
          lineHeight: "1.8",
          textAlign: 'center',
        }}
      >
        Your support can help us create real impact. By donating, you contribute to tackling emerging public health
        challenges such as improving mental health awareness, combating air pollution, and addressing substance
        misuse. Your generosity enables programs that promote healthier communities, sustainable environments, and
        equitable access to resources. To donate, please visit the{" "}
        <Link
          href="https://www.onlinesbi.sbi/sbicollect"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#F6B83A", // Bright yellow
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          SBI Collect website (click here)
        </Link>{" "}
        and search for Fulkoka Foundation. Together, we can drive meaningful change.
      </Typography>

      <Divider sx={{ borderColor: "#C5A3C5", mb: 6 }} /> {/* Soft plum divider */}

      {/* Donation Form Section */}
      <Box mb={6}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat", // Updated heading font
            fontWeight: "700",
            color: "#3B173B", // Dark plum color
            mb: 2,
            
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Choose Your Donation Amount
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* Custom Donation Amount */}
            <Grid item xs={12}>
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

            {/* Submit Button */}
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Link href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm" >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#F6B83A',
                    color: 'white',
                    fontWeight: 'bold',
                    padding: '12px 24px',
                    '&:hover': {
                      backgroundColor: '#E3962A',
                    },
                    borderRadius: '6px',
                  }}
                >
                  Donate Now
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>

      {/* Thank You Section */}
      <Divider sx={{ borderColor: "#C5A3C5", mb: 6 }} />
      <Box sx={{ textAlign: 'center', mb: 6, paddingTop: '40px' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: '600',
            color: '#3B173B', // Dark plum color
            textAlign: 'center',
            fontFamily: "Montserrat",
          }}
        >
          Thank You for Your Support!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#4A4A4A", // Neutral dark gray
            mt: 2,
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: '1.8',
            textAlign: 'center',
          }}
        >
          Your generosity is truly appreciated. Your contribution will help us continue our work and make a positive impact.
        </Typography>
      </Box>
    </Container>
  );
};

export default DonatePage;
