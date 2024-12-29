"use client";
import React from 'react';
import { Box, Typography, Link, IconButton, Grid, TextField, Button } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1A73E8', color: 'white', py: 4, mt: 5, overflowX: 'hidden' }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', paddingX: 2 }}>
        <Grid container spacing={4}>
          {/* Left Column - Logo and About Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <img src="/images/navbar/fulkoka-logo.png" alt="Fulkoka Logo" style={{ width: 50, height: 50 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Fulkoka</Typography>
            </Box>
            <Typography sx={{ mt: 2, fontSize: '14px' }}>
              Empowering communities through programs focused on health, education, and social justice.
            </Typography>
            <Link href="/about" sx={{ display: 'block', mt: 1, color: 'white', textDecoration: 'none', fontSize: '14px', '&:hover': { textDecoration: 'underline' } }}>
              About Us
            </Link>
          </Grid>

          {/* Middle Column - Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Quick Links</Typography>
            <Box>
              <Link href="/programs" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1, fontSize: '14px', '&:hover': { textDecoration: 'underline' } }}>
                Programs
              </Link>
              <Link href="/news" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1, fontSize: '14px', '&:hover': { textDecoration: 'underline' } }}>
                News & Media
              </Link>
              <Link href="/get-involved" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1, fontSize: '14px', '&:hover': { textDecoration: 'underline' } }}>
                Get Involved
              </Link>
              <Link href="/donate" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1, fontSize: '14px', '&:hover': { textDecoration: 'underline' } }}>
                Donate
              </Link>
              <Link href="/contact" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1, fontSize: '14px', '&:hover': { textDecoration: 'underline' } }}>
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Right Column - Contact & Social Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Contact Us</Typography>
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontSize: '14px' }}>Email: contact@fulkoka.org</Typography>
              <Typography sx={{ fontSize: '14px' }}>Phone: +123-456-7890</Typography>
              <Typography sx={{ mt: 1, fontSize: '14px' }}>Address: 123 NGO St, City, Country</Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>Follow Us</Typography>
              <Box>
                <IconButton color="inherit" sx={{ mr: 1, '&:hover': { color: '#F4C542' } }}>
                  <Facebook />
                </IconButton>
                <IconButton color="inherit" sx={{ mr: 1, '&:hover': { color: '#1DA1F2' } }}>
                  <Twitter />
                </IconButton>
                <IconButton color="inherit" sx={{ mr: 1, '&:hover': { color: '#0077b5' } }}>
                  <LinkedIn />
                </IconButton>
                <IconButton color="inherit" sx={{ '&:hover': { color: '#E1306C' } }}>
                  <Instagram />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Newsletter Signup */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Newsletter Signup</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              sx={{
                mb: 2,
                '& .MuiInputBase-root': {
                  backgroundColor: '#ffffff',
                  color: '#1A73E8'
                }
              }}
            />
            <Button variant="contained" sx={{
              backgroundColor: '#1A73E8',
              '&:hover': { backgroundColor: '#155fa0' },
              color: 'white'
            }}>
              Subscribe
            </Button>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box sx={{ mt: 3, borderTop: '1px solid white', pt: 2 }}>
          <Typography variant="body2" align="center" sx={{ color: '#bbb', fontSize: '14px' }}>
            © {new Date().getFullYear()} Fulkoka. All Rights Reserved.
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 1 }}>
            <Link href="/privacy-policy" sx={{ color: 'white', textDecoration: 'none', mr: 2, fontSize: '14px', '&:hover': { textDecoration: 'underline' } }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" sx={{ color: 'white', textDecoration: 'none', fontSize: '14px', '&:hover': { textDecoration: 'underline' } }}>
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
