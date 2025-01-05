"use client";
import React from "react";
import { Box, Typography, Grid, Container, Button, Paper, Link } from "@mui/material";

const NewsMediaPage = () => {
  return (
    <Container maxWidth="lg">
      {/* Title Section */}
      <Box sx={{ textAlign: "center", mt: 4, mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          News & Media
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", mt: 2 }}>
          Stay informed with the latest news, media coverage, and updates about Fulkoka's programs, initiatives, and contributions to social causes.
        </Typography>
      </Box>

      {/* Featured News Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}>
          Featured News
        </Typography>
        <Grid container spacing={4}>
          {/* Featured News 1 */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2, minHeight: "350px" }}>
              <img
                src="https://via.placeholder.com/600x350"
                alt="Featured News Image 1"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Fulkoka Launches Health Programs in Rural Communities
              </Typography>
              <Typography variant="body2" sx={{ color: "#555", mt: 2 }}>
                Fulkoka’s latest initiative aims to improve healthcare access for underserved rural populations. The program focuses on providing critical health services and education to the most vulnerable communities.
              </Typography>
              <Button sx={{ mt: 2, color: "#1A73E8" }} href="/news#read-more" variant="text">
                Read More
              </Button>
            </Paper>
          </Grid>
          {/* Featured News 2 */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2, minHeight: "350px" }}>
              <img
                src="https://via.placeholder.com/600x350"
                alt="Featured News Image 2"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Fulkoka Celebrates World Environment Day with New Initiatives
              </Typography>
              <Typography variant="body2" sx={{ color: "#555", mt: 2 }}>
                Fulkoka hosted a series of online and in-person events to commemorate World Environment Day, focusing on sustainability and environmental conservation efforts across the globe.
              </Typography>
              <Button sx={{ mt: 2, color: "#1A73E8" }} href="/news#read-more" variant="text">
                Read More
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Resources Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}>
          Resources & Articles
        </Typography>
        <Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Explore insightful articles and research on public health and social issues:
          </Typography>
          <ul>
            <li>
              <Link href="https://mhi.org.in/static/assets/files/asp/MHI-Suicide-Prevention-Changing-the-Narrative-Sept-2021.pdf" target="_blank" rel="noopener">
                Suicide Prevention: Changing the narrative (Mariwala Health Initiative, India)
              </Link>
            </li>
            <li>
              <Link href="https://unitedgmh.org/sites/default/files/2021-09/UNITEDGMH%20Suicide%20Report%202021%C6%92.pdf" target="_blank" rel="noopener">
                Decriminalising Suicide: Saving Lives, Reducing Stigma
              </Link>
            </li>
            <li>
              <Link href="https://idronline.org/article/health/it-takes-a-village-a-systemic-approach-to-suicide-prevention/" target="_blank" rel="noopener">
                It Takes a Village: A Systemic Approach to Suicide Prevention (IDR)
              </Link>
            </li>
            <li>
              <Link href="https://www.ideasforindia.in/topics/miscellany/how-can-public-health-become-political-priority-hindi1.html" target="_blank" rel="noopener">
                लोक-स्वास्थ्य कैसे बने राजनीतिक प्राथमिकता
              </Link>
            </li>
            <li>
              <Link href="https://www.jansatta.com/blog/corona-crisis-covid-19-jails-full-of-prisoners-can-become-super-spreader/1711063/?" target="_blank" rel="noopener">
                कोरोना संकट: सुपर स्प्रेडर बन सकती हैं क्षमता से अधिक भरी जेलें, आंकड़े दे रहे गवाही
              </Link>
            </li>
            <li>
              <Link href="https://www.livehindustan.com/blog/nazariya/story-hindustan-nazaria-column-23-december-2021-5390227.html" target="_blank" rel="noopener">
                एक जरूरी विमर्श से मुंह मोड़े बैठा समाज
              </Link>
            </li>
          </ul>
        </Box>
      </Box>

      {/* Media Coverage Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}>
          Media Coverage
        </Typography>
        <Grid container spacing={4}>
          {/* Media Coverage 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2, minHeight: "350px" }}>
              <img
                src="https://via.placeholder.com/600x350"
                alt="Media Coverage Image 1"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Fulkoka's Health Programs Featured on Global News
              </Typography>
              <Typography variant="body2" sx={{ color: "#555", mt: 2 }}>
                Global News covered Fulkoka’s health programs aimed at rural communities in improving healthcare access and outcomes.
              </Typography>
              <Button sx={{ mt: 2, color: "#1A73E8" }} href="/news#read-more" variant="text">
                Read More
              </Button>
            </Paper>
          </Grid>
          {/* Media Coverage 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ padding: 3, boxShadow: 3, borderRadius: 2, minHeight: "350px" }}>
              <img
                src="https://via.placeholder.com/600x350"
                alt="Media Coverage Image 2"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Fulkoka’s Efforts in Women's Empowerment
              </Typography>
              <Typography variant="body2" sx={{ color: "#555", mt: 2 }}>
                Local media outlet covered Fulkoka’s initiatives to promote women’s empowerment through educational and economic opportunities.
              </Typography>
              <Button sx={{ mt: 2, color: "#1A73E8" }} href="/news#read-more" variant="text">
                Read More
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default NewsMediaPage;
