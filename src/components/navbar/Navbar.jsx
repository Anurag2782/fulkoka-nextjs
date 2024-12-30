"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Box, useMediaQuery, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null); // Track which submenu is open for mobile
  const isMobile = useMediaQuery('(max-width:600px)'); // Check for mobile screen size

  const logoSrc = "/images/navbar/fulkoka-logo.png";

  const menuItems = [
    { name: 'Home', link: '/' },,
    { name: 'About Us', link: '/about' },
    {
      name: 'Programs', 
      link: '/programs', 
      // subMenu: [
      //   { name: 'Health Programs', link: '/programs/health' },
      //   { name: 'Education Programs', link: '/programs/education' },
      //   { name: 'Environmental Programs', link: '/programs/environmental' },
      // ]
    },
    { name: 'News & Media', link: '/news-media' },
    { name: 'Get Involved', link: '/get-involved' },
    { name: 'Donate', link: '/get-involved/donate' },
    { name: 'Contact Us', link: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (index) => {
    setSubmenuOpen(submenuOpen === index ? null : index); // Toggle submenu visibility
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1A73E8' }}>
      <Toolbar>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img src={logoSrc} alt="Fulkoka Logo" style={{ width: 40, height: 40 }} />
          <Typography variant="h6" sx={{ color: 'white' }}>
            <Link href="/" passHref>
              <Box sx={{ textDecoration: 'none', color: 'white' }}>Fulkoka</Box>
            </Link>
          </Typography>
        </Box>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 3, ml: 'auto' }}>
            {menuItems.map((item, index) => (
              <Box
                key={item.name}
                sx={{ position: 'relative', '&:hover .submenu': { display: 'block' } }} // Show submenu on hover for desktop
              >
                <Link href={item.link} passHref>
                  <Button sx={{ color: 'white', '&:hover': { color: '#ddd', backgroundColor: 'transparent' } }}>
                    {item.name}
                    {item.subMenu && (
                      <ArrowDropDownIcon sx={{ marginLeft: 1, fontSize: '1rem', color: 'white' }} />
                    )}
                  </Button>
                </Link>

                {/* Nested Dropdown for Programs */}
                {item.subMenu && (
                  <Box
                    className="submenu"
                    sx={{
                      position: 'absolute',
                      top: '150%',  
                      left: 0,
                      backgroundColor: 'white',
                      borderRadius: '4px',
                      boxShadow: 2,
                      zIndex: 10,
                      display: 'none', 
                      width: '200px',
                    }}
                  >
                    {item.subMenu.map((subItem) => (
                      <Link href={subItem.link} passHref key={subItem.name}>
                        <Button sx={{
                          padding: '10px 16px',
                          textAlign: 'left',
                          color: '#333',
                          '&:hover': { color: '#1A73E8', backgroundColor: '#f1f1f1' }
                        }} >
                          {subItem.name}
                        </Button>
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <IconButton
            color="inherit"
            onClick={toggleMenu}
            sx={{ ml: 'auto' }} // Align hamburger menu to the rightmost part
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Menu - Expands Below Navbar */}
      {isMobile && (
        <Box
          sx={{
            position: 'absolute',
            top: '64px',  // Position the menu directly below the navbar (adjust based on navbar height)
            left: 0,
            width: '100%',
            backgroundColor: 'white',
            boxShadow: 3,
            display: isOpen ? 'block' : 'none',
            transition: 'transform 0.3s ease',  // Smooth transition for expanding
            transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',  // Smooth slide down effect
            zIndex: 10,
          }}
        >
          <Box>
            {menuItems.map((item) => (
              <Box key={item.name}>
                {/* Remove Link from submenu items (Programs, etc.) */}
                <Button
                  sx={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 20px',
                    color: '#333',
                    '&:hover': { color: '#1A73E8', backgroundColor: '#f1f1f1' },
                  }}
                  onClick={item.subMenu ? () => toggleSubmenu(item.name) : () => setIsOpen(false)} // Prevent navigation for submenu items
                >
                  {item.name}
                  {item.subMenu && (
                    <ArrowDropDownIcon sx={{ marginLeft: 1, fontSize: '1rem' }} />
                  )}
                </Button>

                {/* Show Submenu for Programs */}
                {item.subMenu && submenuOpen === item.name && isOpen && (
                  <Box sx={{ paddingLeft: 4 }}>
                    {item.subMenu.map((subItem) => (
                      <Link href={subItem.link} passHref key={subItem.name}>
                        <Button sx={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '12px 20px',
                          color: '#333',
                          '&:hover': { color: '#1A73E8', backgroundColor: '#f1f1f1' }
                        }}>
                          {subItem.name}
                        </Button>
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </AppBar>
  );
}
