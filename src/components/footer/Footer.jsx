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
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#4B134F", // Matches navbar color
        color: "white",
        py: 4,
        mt: 0,
        overflowX: "hidden",
        fontFamily: "'Georgia', sans-serif", // Default font for the entire footer
      }}
    >
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", px: 2 }}>
        <Grid container spacing={4}>
          {/* Left Column - Logo and About Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: "white", // White background for better visibility
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
                }}
              >
                <img
                  src="/images/navbar/Fulkoka-logo.png"
                  alt="Fulkoka Logo"
                  style={{ width: "80%", height: "80%" }} // Adjust size to fit within the background
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Georgia', serif", // Georgia for the logo text
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <Link href="/">
                  <Box sx={{ textDecoration: "none", color: "white" }}>
                    Fulkoka
                  </Box>
                </Link>
              </Typography>
            </Box>

            <Typography
              sx={{
                mt: 2,
                fontSize: "14px",
                lineHeight: 1.6,
                fontFamily: "'Georgia', sans-serif", // Georgia for body text
              }}
            >
              Empowering communities through programs focused on health,
              education, and social justice.
            </Typography>
            <Link
              href="/about"
              sx={{
                display: "block",
                mt: 1,
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "medium",
                "&:hover": { textDecoration: "underline" },
                fontFamily: "'Georgia', sans-serif", // Georgia for links
              }}
            >
              About Us
            </Link>
          </Grid>

          {/* Middle Column - Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontFamily: "'Georgia', serif", // Georgia for section titles
              }}
            >
              Quick Links
            </Typography>
            <Box>
              {[
                { label: "Programs", href: "/programs" },
                { label: "News & Media", href: "/news-media" },
                { label: "Get Involved", href: "/get-involved" },
                { label: "Donate", href: "/get-involved/donate" },
                { label: "Contact Us", href: "/contact" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  sx={{
                    display: "block",
                    color: "white",
                    textDecoration: "none",
                    mb: 1,
                    fontSize: "14px",
                    "&:hover": { textDecoration: "underline" },
                    fontFamily: "'Georgia', sans-serif", // Georgia for links
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Right Column - Contact & Social Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontFamily: "'Georgia', serif", // Georgia for section titles
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  fontFamily: "'Georgia', sans-serif", // Georgia for body text
                }}
              >
                Email: fulkokango@gmail.com
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  fontFamily: "'Georgia', sans-serif", // Georgia for body text
                }}
              >
                Phone: +123-456-7890
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: "14px",
                  lineHeight: 1.6,
                  fontFamily: "'Georgia', sans-serif", // Georgia for body text
                }}
              >
                Address: Balbhadrapur, Navtol, Laheriasarai, Darbhanga,
                Bihar-846001
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  fontWeight: "bold",
                  fontFamily: "'Georgia', serif", // Georgia for section titles
                }}
              >
                Follow Us
              </Typography>
              <Box>
                {[
                  {
                    icon: <Facebook />,
                    href: "https://www.facebook.com/fulkoka06",
                  },
                  // {
                  //   icon: <Twitter />,
                  //   href: "",
                  // },
                  {
                    icon: <LinkedIn />,
                    href: "https://www.linkedin.com/company/fulkoka-foundation/",
                  },
                  {
                    icon: <Instagram />,
                    href: "https://www.instagram.com/fulkoka/",
                  },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    sx={{ mr: 1 }}
                  >
                    <IconButton
                      sx={{
                        fontSize: "24px",
                        color: "white",
                        "&:hover": { color: "#FFD700" },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Newsletter Signup */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontFamily: "'Georgia', serif", // Georgia for section titles
              }}
            >
              Newsletter Signup
            </Typography>
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
                  fontFamily: "'Georgia', sans-serif", // Georgia for inputs
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
                fontFamily: "'Georgia', sans-serif", // Georgia for buttons
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box
          sx={{
            mt: 3,
            borderTop: "1px solid white",
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#bbb",
              fontSize: "14px",
              fontFamily: "'Georgia', sans-serif", // Georgia for body text
            }}
          >
            © {new Date().getFullYear()} Fulkoka. All Rights Reserved.
          </Typography>
          <Box sx={{ mt: 1 }}>
            {[
              { label: "Privacy Policy", href: "/" },
              { label: "Terms of Service", href: "/" },
            ].map((link, index) => (
              <Link
                key={index}
                // href={link.href}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "14px",
                  mx: 1,
                  "&:hover": { textDecoration: "underline" },
                  fontFamily: "'Georgia', sans-serif", // Georgia for links
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
