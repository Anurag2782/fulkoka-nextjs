import { Box, Grid, Typography, Card, CardContent, Avatar } from "@mui/material";

const teamMembers = [
  {
    name: "Bhawesh Jha",
    role: "Founder",
    image: "/images/team/bhawesh-jha.jpg",
    description:
      "Bhawesh Jha, founder of Fulkoka (2023), is a Project & Policy Officer at the University of Edinburgh. With experience in mental health policy in India, particularly in Bihar, he advocates for integrating social services like livelihoods and disability benefits into mental health care.",
  },
  {
    name: "Kartik Joya",
    role: "Director (Media & Communications)",
    image: "/images/team/kartik-joya.jpg",
    description:
      "Kartik Joya, co-founder of Fulkoka (2023), is an independent filmmaker and media strategist specializing in creating impactful narratives and enhancing content for creators and organizations.",
  },
  {
    name: "Dr. Sriram Subrahmanyan Swamy",
    role: "Director & Co-Founder",
    image: "/images/team/sriram-swamy.jpg",
    description:
      "Dr. Sriram Subrahmanyan Swamy, Co-Founder of Fulkoka Foundation, is currently serving as a Senior public health specialist at Tata Steel UISL, focusing on communicable diseases and public health initiatives.",
  },
];

export default function OurTeam() {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: "#f9f9f9" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#4B134F" }}
      >
        Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <CardContent>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: 100,
                    height: 100,
                    margin: "0 auto",
                    mb: 2,
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 2, fontSize: "0.9rem", color: "#555" }}
                >
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}