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
              <img src="/images/navbar/fulkoka-logo.png" alt="Fulkoka Logo" style={{ width: 40, height: 40 }} />
              <Typography variant="h6">Fulkoka</Typography>
            </Box>
            <Typography sx={{ mt: 2 }}>
              Empowering communities through programs focused on health, education, and social justice.
            </Typography>
            <Link href="/about" sx={{ display: 'block', mt: 1, color: 'white', textDecoration: 'none' }}>
              About Us
            </Link>
          </Grid>

          {/* Middle Column - Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>Quick Links</Typography>
            <Box>
              <Link href="/programs" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                Programs
              </Link>
              <Link href="/news" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                News & Media
              </Link>
              <Link href="/get-involved" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                Get Involved
              </Link>
              <Link href="/donate" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                Donate
              </Link>
              <Link href="/contact" sx={{ display: 'block', color: 'white', textDecoration: 'none', mb: 1 }}>
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Right Column - Contact & Social Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>Contact Us</Typography>
            <Box sx={{ mb: 2 }}>
              <Typography>Email: contact@fulkoka.org</Typography>
              <Typography>Phone: +123-456-7890</Typography>
              <Typography sx={{ mt: 1 }}>Address: 123 NGO St, City, Country</Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ mb: 1 }}>Follow Us</Typography>
              <Box>
                <IconButton color="inherit" sx={{ mr: 1 }}>
                  <Facebook />
                </IconButton>
                <IconButton color="inherit" sx={{ mr: 1 }}>
                  <Twitter />
                </IconButton>
                <IconButton color="inherit" sx={{ mr: 1 }}>
                  <LinkedIn />
                </IconButton>
                <IconButton color="inherit">
                  <Instagram />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Newsletter Signup */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>Newsletter Signup</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              sx={{ mb: 2 }}
            />
            <Button variant="contained" sx={{ backgroundColor: '#1A73E8' }}>Subscribe</Button>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box sx={{ mt: 3, borderTop: '1px solid white', pt: 2 }}>
          <Typography variant="body2" align="center" sx={{ color: '#bbb' }}>
            © {new Date().getFullYear()} Fulkoka. All Rights Reserved.
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 1 }}>
            <Link href="/privacy-policy" sx={{ color: 'white', textDecoration: 'none', mr: 2 }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" sx={{ color: 'white', textDecoration: 'none' }}>
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
