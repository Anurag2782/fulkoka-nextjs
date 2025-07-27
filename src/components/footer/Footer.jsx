"use client";
import React from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";

const footerStyle = {
  backgroundColor: "#FFF8F0",
  color: "black",
  py: 4,
  overflowX: "hidden",
  fontFamily: "'Georgia', sans-serif",
};

const sectionTitleStyle = {
  mb: 2,
  fontWeight: "bold",
  fontFamily: "'Georgia', serif",
};

const linkStyle = {
  display: "block",
  color: "black",
  textDecoration: "none",
  fontSize: "14px",
  "&:hover": { textDecoration: "underline" },
  fontFamily: "'Georgia', sans-serif",
};

const bodyTextStyle = {
  fontSize: "14px",
  lineHeight: 1.6,
  fontFamily: "'Georgia', sans-serif",
};

const Footer = () => {
  const quickLinks = [
    { label: "Programs", href: "/programs" },
    { label: "News & Media", href: "/news-media" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Donate", href: "/get-involved/donate" },
    { label: "Contact us", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: "https://www.facebook.com/fulkoka06" },
    { icon: <LinkedIn />, href: "https://www.linkedin.com/company/fulkoka-foundation/" },
    { icon: <Instagram />, href: "https://www.instagram.com/fulkoka/" },
  ];

  return (
    <Box sx={footerStyle}>
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", px: 2 }}>
        <Grid container spacing={4}>
          {/* Left Column - Logo and About Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src="/images/navbar/Fulkoka-logo2.png"
                  alt="Fulkoka Logo"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography variant="h6" sx={{ fontFamily: "'Georgia', serif", fontWeight: "bold" }}>
                <Link href="/" sx={{ textDecoration: "none", color: "black" }}>Fulkoka</Link>
              </Typography>
            </Box>
            <Typography sx={{ ...bodyTextStyle, mt: 2 }}>
              Empowering communities through programs focused on health, education, and social justice.
            </Typography>
            {/* <Link href="/about" sx={{ ...linkStyle, mt: 1, fontWeight: "medium" }}>
              About Us
            </Link> */}
          </Grid>

          {/* Middle Column - Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={sectionTitleStyle}>Quick links</Typography>
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.href} sx={{ ...linkStyle, mb: 1 }}>
                {link.label}
              </Link>
            ))}
          </Grid>

          {/* Right Column - Contact & Social Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={sectionTitleStyle}>Contact us</Typography>
            <Typography sx={bodyTextStyle}>Email: fulkokango@gmail.com</Typography>
            <Typography sx={{ ...bodyTextStyle, mt: 1 }}>
              Address: Balbhadrapur, Navtol, Laheriasarai, Darbhanga, Bihar-846001
            </Typography>
            <Typography variant="h6" sx={{ ...sectionTitleStyle, mt: 2 }}>Follow us</Typography>
            <Box>
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} target="_blank" sx={{ mr: 1 }}>
                  <IconButton sx={{ fontSize: "24px", color: "black", "&:hover": { color: "#FFD700" } }}>
                    {social.icon}
                  </IconButton>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Newsletter Signup */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={sectionTitleStyle}>Newsletter Sign up</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              sx={{
                mb: 2,
                "& .MuiInputBase-root": {
                  backgroundColor: "#ffffff",
                  borderRadius: 1,
                },
                "& input": {
                  padding: "10px",
                  color: "#1A73E8",
                  fontFamily: "'Georgia', sans-serif",
                },
              }}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#FFD700",
                color: "black",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#E8C300" },
                fontFamily: "'Georgia', sans-serif",
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box sx={{ mt: 3, borderTop: "1px solid black", pt: 2, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#bbb", fontSize: "14px", fontFamily: "'Georgia', sans-serif" }}>
            © {new Date().getFullYear()} Fulkoka. All Rights Reserved.
          </Typography>
          <Box sx={{ mt: 1,display:"flex", justifyContent:"center" }}>
            {["Privacy Policy", "Terms of Service"].map((label, index) => (
              <Link key={index} href="/" sx={{ ...linkStyle, mx: 1 }}>
                {label}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
