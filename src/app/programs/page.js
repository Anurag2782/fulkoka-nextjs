"use client";
import React from "react";
import { Box, Typography, Container, Grid, Divider } from "@mui/material";
import { FaHeartbeat, FaBookOpen, FaRecycle, FaHandsHelping } from "react-icons/fa";

const programsData = [
  {
    title: "Healthcare Initiatives",
    description:
      "Providing essential healthcare services and education to underserved communities. Our healthcare programs focus on preventive measures, regular check-ups, and medical camps to improve health awareness.",
    icon: <FaHeartbeat size={80} color="#1A73E8" />,
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Education Support",
    description:
      "Promoting education through scholarships, resources, and community programs. We aim to bridge the education gap in rural and underprivileged areas with sustainable initiatives.",
    icon: <FaBookOpen size={80} color="#1A73E8" />,
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Environmental Sustainability",
    description:
      "Driving initiatives focused on clean energy, waste reduction, and green living. Join us in making the planet greener with tree plantation drives and eco-awareness campaigns.",
    icon: <FaRecycle size={80} color="#1A73E8" />,
    image: "https://via.placeholder.com/600x400",
  },
  {
    title: "Social Empowerment",
    description:
      "Empowering marginalized communities through advocacy and skills development. We work to provide equal opportunities and foster a sense of dignity among all individuals.",
    icon: <FaHandsHelping size={80} color="#1A73E8" />,
    image: "https://via.placeholder.com/600x400",
  },
];

const strategicFocusContent = `
At Fulkoka, we firmly believe in the power of education as a catalyst for positive change. Education is not just about acquiring knowledge; it is about unlocking opportunities, fostering creativity, and nurturing empathy. By promoting education, we aim to address the root causes of poverty, improve health outcomes, and preserve our precious environment and climate for future generations.

We recognize that health is not merely the absence of disease, but a state of complete physical, mental, and social well-being. In today's world, the challenges to our health are manifold, ranging from non-communicable diseases (NCDs) to mental health issues and the impacts of climate change. Our Health Initiative is dedicated to addressing these interconnected challenges and promoting holistic well-being for all.
`;

const commercialDeterminants = `
Non-communicable diseases (NCDs)—such as cardiovascular diseases, diabetes, cancer, and chronic respiratory conditions—are the leading causes of death globally, accounting for over 70% of all deaths. 
While traditional risk factors like unhealthy diets, tobacco use, alcohol consumption, and physical inactivity are widely recognized, an equally critical but often overlooked aspect is the commercial determinants of health (CDOH). These determinants refer to the strategies and practices of private sector entities that influence health outcomes, often to the detriment of public health.
`;

const ProgramsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingY: "60px" }}>
      {/* Header Section */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#1A73E8", mb: 2 }}>
          Our Programs
        </Typography>
        <Typography variant="h6" sx={{ color: "#555" }}>
          Learn about our impactful initiatives shaping a better world.
        </Typography>
      </Box>

      {/* Timeline Design */}
      {programsData.map((program, index) => (
        <Grid container spacing={6} key={index} mb={6} alignItems="center">
          {/* Icon and Description */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: index % 2 === 0 ? 1 : 2 }}>
            <Box textAlign="center">
              {program.icon}
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1A73E8", mt: 2 }}>
                {program.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#555", mt: 1 }}>
                {program.description}
              </Typography>
            </Box>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: index % 2 === 0 ? 2 : 1 }}>
            <Box
              sx={{
                height: "300px",
                borderRadius: "12px",
                backgroundImage: `url(${program.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
        </Grid>
      ))}

      <Divider sx={{ my: 8 }} />

      {/* Strategic Focus Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#1A73E8" }}>
          Strategic Focus Areas
        </Typography>
        <Typography variant="h6" sx={{ color: "#555", mt: 2 }}>
          Transforming lives through education, health initiatives, and environmental sustainability.
        </Typography>
      </Box>

      {/* Section: Education */}
      <Box mb={8}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1A73E8", mb: 2 }}>
          Education
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
          At Fulkoka, we firmly believe in the power of education as a catalyst for positive change. 
          Education is not just about acquiring knowledge; it is about unlocking opportunities, fostering 
          creativity, and nurturing empathy. By promoting education, we aim to address the root causes 
          of poverty, improve health outcomes, and preserve our precious environment and climate for 
          future generations.
        </Typography>
        <Typography variant="body1" sx={{ color: "#555" }}>
          We recognize that health is not merely the absence of disease but a state of complete physical, 
          mental, and social well-being. In today's world, the challenges to our health are manifold, ranging 
          from non-communicable diseases (NCDs) to mental health issues and the impacts of climate change. 
          Our Health Initiative is dedicated to addressing these interconnected challenges and promoting 
          holistic well-being for all.
        </Typography>
      </Box>

      <Divider />

      {/* Section: Public Health */}
      <Box mb={8} mt={8}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1A73E8", mb: 2 }}>
          Public Health
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333", mb: 2 }}>
          Mental Health & Non-Communicable Diseases
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
          Mental health is an essential component of overall well-being, yet it is often overlooked or 
          stigmatized in many societies. The prevalence of mental health disorders is increasing globally, 
          exacerbated by factors such as social isolation, economic instability, and traumatic experiences.
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
          Non-communicable diseases (NCDs)—such as cardiovascular diseases, diabetes, cancer, and chronic 
          respiratory conditions—are the leading causes of death globally, accounting for over 70% of all deaths. 
          Addressing these challenges requires understanding the commercial determinants of health (CDOH), which 
          include the ways industries influence policy, behavior, and health outcomes.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333", mb: 2 }}>
          Understanding the Commercial Determinants of Health
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
          The commercial determinants of health involve the ways industries influence policy, behavior, and health:
        </Typography>
        <ul>
          <li><strong>Marketing and Advertising:</strong> Aggressive promotion of unhealthy products like sugary drinks, ultra-processed foods, and tobacco.</li>
          <li><strong>Policy Influence:</strong> Lobbying to weaken public health regulations, such as taxes on sugary drinks or restrictions on alcohol advertising.</li>
          <li><strong>Product Accessibility and Pricing:</strong> Ensuring affordability and wide availability of unhealthy products.</li>
          <li><strong>Corporate Social Responsibility:</strong> Tactics to improve public perception while deflecting attention from negative health impacts.</li>
        </ul>
        <Typography variant="body1" sx={{ color: "#555" }}>
          Addressing these systemic issues is critical to reducing NCD prevalence and promoting healthier environments.
        </Typography>
      </Box>

      <Divider />

      {/* Section: Environment, Climate Change, and Health */}
      <Box mb={8} mt={8}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1A73E8", mb: 2 }}>
          Environment, Climate Change, and Health
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
          The health of people and the planet are deeply interconnected. Environmental degradation—through air 
          pollution, water contamination, and deforestation—undermines human health, contributing to respiratory 
          diseases, waterborne illnesses, and loss of biodiversity. Climate change amplifies these challenges, 
          driving extreme weather events, altering ecosystems, and worsening global health crises.
        </Typography>
        <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
          Rising temperatures and unpredictable weather patterns are increasing the spread of vector-borne 
          diseases like malaria and dengue, worsening food insecurity, and triggering mental health crises 
          due to displacement and uncertainty. Vulnerable populations, especially in low-income settings, 
          bear the brunt of these impacts, despite contributing the least to climate change.
        </Typography>
        <Typography variant="body1" sx={{ color: "#555" }}>
          Addressing these issues requires integrated action through initiatives like reducing greenhouse gas 
          emissions, restoring ecosystems, promoting sustainable agriculture, and building climate-resilient 
          health systems. Equity must remain central to these efforts, ensuring marginalized communities are 
          empowered and protected.
        </Typography>
      </Box>
    </Container>
  );
};




export default ProgramsPage;
