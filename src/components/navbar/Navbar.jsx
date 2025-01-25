"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const [submenuOpenIndex, setSubmenuOpenIndex] = useState(null); 
  const isMobile = useMediaQuery("(max-width:600px)");

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Programs", link: "/programs" },
    { name: "News & Media", link: "/news-media" },
    { name: "Get Involved", link: "/get-involved" },
    { name: "Donate", link: "/get-involved/donate" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubmenu = (index) => {
    setSubmenuOpenIndex(submenuOpenIndex === index ? null : index);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setSubmenuOpenIndex(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        // background: "linear-gradient(90deg, #4B134F, #B838C1, #FFD700)",
        backgroundColor:"#4B134F",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        {/* Logo */}
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
              backgroundColor: "white",
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
              fontFamily: "'Playfair Display', serif",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <Link href="/" passHref>
              <Box sx={{ textDecoration: "none", color: "white" }}>Fulkoka</Box>
            </Link>
          </Typography>
        </Box>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3, ml: "auto" }}>
            {menuItems.map((item) => (
              <Box key={item.name} sx={{ position: "relative" }}>
                <Link href={item.link} passHref>
                  <Button
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      color: "white",
                      backgroundColor : item.name == "Donate"? "#4B134F": "",
                      "&:hover": {
                        color: "#FFD700",
                        backgroundColor: item.name == "Donate"? "#4B134F":  "transparent",
                        scale:1.1
                      },
                    }}
                  >
                    {item.name}
                    {item.subMenu && (
                      <ArrowDropDownIcon
                        sx={{ marginLeft: 1, fontSize: "1rem" }}
                      />
                    )}
                  </Button>
                </Link>
              </Box>
            ))}
          </Box>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <IconButton color="inherit" onClick={toggleMenu} sx={{ ml: "auto" }}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Menu */}
{isMobile && isOpen && (
  <Box
    sx={{
      backgroundColor: "#4B134F",
      boxShadow: 3,
      zIndex: 10,
      position: "absolute",
      top: 64,
      left: 0,
      width: "100%",
    }}
  >
    {menuItems.map((item) => (
      <Box key={item.name}>
        <Link href={item.link} passHref>
          <Button
            sx={{
              width: "100%",
              textAlign: "left",
              padding: "12px 20px",
              fontFamily: "'Roboto', sans-serif",
              fontWeight: "bold",
              color: "white",
              "&:hover": {
                color: "#FFD700",
                backgroundColor: "rgba(255, 215, 0, 0.1)",
              },
            }}
            onClick={closeMenu} // Close the menu on click
          >
            {item.name}
          </Button>
        </Link>
      </Box>
    ))}
  </Box>
)}

    </AppBar>
  );
}
