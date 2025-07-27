"use client";
import React from "react";
import { Box, Typography, Container, Divider, Link, List, ListItem } from "@mui/material";
import { FaHeartbeat, FaBookOpen, FaRecycle, FaHandsHelping } from "react-icons/fa";

const ProgramsPage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        paddingY: { xs: "30px", sm: "40px", md: "60px" },
        fontFamily: "Georgia",
        // backgroundColor: "#FFF8F0",
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            fontSize: { xs: "2rem", md: "2.8rem" },
          }}
        >
           Focus areas
        </Typography>
        <Divider
          sx={{
            width: "100px",
            height: "3px",
            backgroundColor: "#F6B83A",
            margin: "16px auto",
          }}
        />
      </Box>

      <Box textAlign="center" mb={3}>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          Transforming lives through education, health initiatives, and environmental sustainability.
        </Typography>
      </Box>

      <Box mb={3} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img src="/images/Programs/target2.png"  />
      </Box>

      <Box mb={{ xs: 4, md: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Education
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          At Fulkoka, we firmly believe in the power of education as a catalyst for positive change. Education is
          not just about acquiring knowledge; it is about unlocking opportunities, fostering creativity, and nurturing
          empathy. By promoting education, we aim to address the root causes of poverty, improve health outcomes, and
          preserve our precious environment and climate for future generations.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          We recognize that health is not merely the absence of disease but a state of complete physical, mental,
          and social well-being. In today's world, the challenges to our health are manifold, ranging from
          non-communicable diseases (NCDs) to mental health issues and the impacts of climate change. Our Health
          Initiative is dedicated to addressing these interconnected challenges and promoting holistic well-being for
          all.
        </Typography>
      </Box>

      <Divider sx={{ my: 4, borderColor: "#C5A3C5" }} />

      <Box mb={{ xs: 4, md: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Community library & resource centre:
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            mb: 2,
            fontSize: { xs: "1.6rem", md: "1.9rem" },
          }}
        >
           Empowering learning in low-resource settings of bihar
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            mb: 2,
            fontSize: { xs: "1.2rem", md: "1.4rem" },
          }}
        >
          📖 Bridging the knowledge gap, one book at a time
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          Education is the foundation of empowerment, yet in many parts of Bihar, access to quality learning resources remains a challenge. Limited availability of books, digital content, and study spaces often hinders learning opportunities, especially for students from marginalized communities.        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          To address this, Fulkoka is launching a Community Library & Resource Centre—a safe, inclusive space where knowledge is accessible to all, regardless of socioeconomic background.
        </Typography>
      </Box>

      <Divider sx={{ my: 4, borderColor: "#C5A3C5" }} />
      <Box mb={{ xs: 4, md: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          📚 What is the community library & resource centre?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          The Community Library & Resource Centre (CLRC) is designed to be a hub for learning, creativity, and empowerment in low-resource settings. It aims to provide:
        </Typography>
        <ul
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.6",
          color: "#000",
          marginBottom: "2rem",
          listStyle:"none",
          listStyleType: "none",
        }}
        >
          <li>✅ Access to books, newspapers, and digital resources</li>
          <li>✅ A quiet, well-lit space for reading and studying</li>
          <li>✅ Workshops on literacy, career guidance, and skill development</li>
          <li>✅ Internet access and digital literacy training</li>
          <li>✅ Special programs for children, youth, and women</li>
        </ul>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          By fostering a culture of reading and self-learning, we aim to break barriers and enable individuals to explore new opportunities for personal and community growth.
        </Typography>
      </Box>

      <Divider sx={{ my: 4, borderColor: "#C5A3C5" }} />

      <Box mb={{ xs: 4, md: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          🌍 Why community libraries
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            // mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          🔹 High dropout rates: Many students discontinue education due to lack of learning materials.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            // mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          🔹 Limited access to educational resources: Rural areas have few public libraries or resource centers.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            // mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          🔹 Digital divide: Many children and youth lack access to online learning tools.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          🔹 Skill gap: Absence of career counseling and vocational training restricts job opportunities.
        </Typography>
      </Box>

      <Divider sx={{ my: 4, borderColor: "#C5A3C5" }} />

      <Box mb={{ xs: 4, md: 8 }} mt={{ xs: 4, md: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Public health
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            mb: 2,
            fontSize: { xs: "1.6rem", md: "1.9rem" },
          }}
        >
          Mental health & non-communicable diseases
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          Mental health is an essential component of overall well-being, yet it is often overlooked or stigmatized in
          many societies. The prevalence of mental health disorders is increasing globally, exacerbated by factors
          such as social isolation, economic instability, and traumatic experiences.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          Non-communicable diseases (NCDs)—such as cardiovascular diseases, diabetes, cancer, and chronic respiratory
          conditions—are the leading causes of death globally, accounting for over 70% of all deaths. Addressing these
          challenges requires understanding the commercial determinants of health (CDOH), which include the ways
          industries influence policy, behavior, and health outcomes.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            mb: 2,
            fontSize: { xs: "1.6rem", md: "1.9rem" },
          }}
        >
          Understanding the commercial determinants of health
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          The commercial determinants of health involve the ways industries influence policy, behavior, and health:
        </Typography>
        <Box sx={{ padding: "1rem" }}>
          <ul
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.6",
              color: "#000",
            }}
          >
            <li>
              <strong>Marketing and advertising:</strong> Aggressive promotion of unhealthy products like sugary drinks, ultra-processed foods, and tobacco.
            </li>
            <li>
              <strong>Policy influence:</strong> Lobbying to weaken public health regulations, such as taxes on sugary drinks or restrictions on alcohol advertising.
            </li>
            <li>
              <strong>Product accessibility and pricing:</strong> Ensuring affordability and wide availability of unhealthy products.
            </li>
            {/* <li>
              <strong>Corporate social responsibility:</strong> Tactics to improve public perception while deflecting attention from negative health impacts.
            </li> */}
          </ul>
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: "#000",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          Addressing these systemic issues is critical to reducing NCD prevalence and promoting healthier environments.
        </Typography>
      </Box>

      <Divider sx={{ my: 4, borderColor: "#C5A3C5" }} />

      <Box mb={{ xs: 4, md: 8 }} mt={{ xs: 4, md: 8 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "700",
            color: "#3B173B",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
        >
          Environment, climate change and health
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          The health of people and the planet are deeply interconnected. Environmental degradation—through air pollution, water contamination, and deforestation—undermines human health, contributing to respiratory diseases, waterborne illnesses, and loss of biodiversity. Climate change amplifies these challenges, driving extreme weather events, altering ecosystems, and worsening global health crises.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            mb: 2,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          Rising temperatures and unpredictable weather patterns are increasing the spread of vector-borne diseases like malaria and dengue, worsening food insecurity, and triggering mental health crises due to displacement and uncertainty. Vulnerable populations, especially in low-income settings, bear the brunt of these impacts, despite contributing the least to climate change.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#000",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            fontFamily: "Georgia",
          }}
        >
          Addressing these issues requires integrated action through initiatives like reducing greenhouse gas emissions, restoring ecosystems, promoting sustainable agriculture, and building climate-resilient health systems. Equity must remain central to these efforts, ensuring marginalized communities are empowered and protected.
        </Typography>
      </Box>
    </Container>
  );
};

export default ProgramsPage;
