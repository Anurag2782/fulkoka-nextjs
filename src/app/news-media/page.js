"use client";
import React from "react";
import { Box, Typography, Container, Divider, Link, Card, CardContent, Button } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article"; // Importing the icon

const theme = {
  secondaryColor: "#3B173B",
  tertiaryColor: "#F6B83A",
  backgroundColor: "#FFF8F0",
  textColor: "#4A4A4A",
  fontFamily: "Poppins",
  headingFontFamily: "Montserrat",
};

const NewsMediaPage = () => {
  const resources = [
    {
      href: "https://hindi.idronline.org/article/can-bihars-bimhas-change-how-mental-health-is-viewed-in-india/",
      text: "क्या बिहार का बिमहास मानसिक अस्पतालों को लेकर आम नज़रिए को बदल सकता है?",
      summary:"सितंबर, 2022 में बिहार के मुख्यमंत्री नीतीश कुमार ने राज्य के पहले और नवनिर्मित मानसिक अस्पताल, ‘बिहार मानसिक स्वास्थ्य एवं सम्बद्ध विज्ञान संस्थान (बिहार इंस्टीट्यूट ऑफ मेंटल हेल्थ एंड अलाइड साइंसेज़ – बिमहास)’ का उद्घाटन किया। ऐसा करते हुए उन्होंने राज्य में शारीरिक स्वास्थ्य के साथ-साथ मानसिक स्वास्थ्य को सुलभ बनाने के लिए जरूरी हर संभव प्रयास करने का वादा भी किया। 272 बिस्तरों की उपलब्धता वाला यह अस्पताल राजधानी से लगभग 40 किलोमीटर दूर कोइलवर में, पटना और आरा के बीच स्थित है। इससे पहले यह इलाक़ा अब्दुल बाड़ी रेल-सड़क पुल के लिए जाना जाता था। 1862 में सोन नदी पर बनाया गया यह पुल आज भी उपयोग में है। "
    },
    {
      href: "https://mhi.org.in/static/assets/files/asp/MHI-Suicide-Prevention-Changing-the-Narrative-Sept-2021.pdf",
      text: "Suicide Prevention: Changing the narrative. Mariwala Health Initiative, India. ",
      summary:" Almost every suicide is a death that can be avoided. And for every death that happens by suicide, there are about 60 people who are impacted due to the loss of a loved one, and more than 20 who attempt suicide. In India, almost 140,000 people died by suicide in 2019 alone, accounting for 17 percent of the global deaths by suicide. In spite of these numbers, there is almost no conversation on suicide prevention, both globally and in India. "
    },
    {
      href: "https://unitedgmh.org/sites/default/files/2021-09/UNITEDGMH%20Suicide%20Report%202021%C6%92.pdf",
      text: "Decriminalising Suicide: SAVING LIVES, REDUCING STIGMA.",
      summary: "Youth mental health is drawing more attention than ever before, with national and global efforts increasingly calling for improved policy, programmes and financing. The idea of focusing on prevention and promotion to mitigate future mental health challenges, address social determinants of health and increase access to mental health care,  is gaining traction."
    },
    {
      href: "https://idronline.org/article/health/it-takes-a-village-a-systemic-approach-to-suicide-prevention/",
      text: "It takes a village: A systemic approach to suicide prevention | IDR. India Development Review.",
      summary: "Due to the prevailing COVID-19 situation, many Indians are experiencing depression, anxiety, or some other form of mental health concern. The pandemic is set to compound mental distress. It is likely to be worse for those who are already on the socio-economic margins, considering the lack of sufficient social security nets. Cases of familial conflicts and gendered violence are on the rise, as evidenced by reports from government crisis helplines."
    },
    {
      href: "https://www.ideasforindia.in/topics/miscellany/how-can-public-health-become-political-priority-hindi1.html",
      text: "लोक-स्वास्थ्य कैसे बने राजनीतिक प्राथमिकता",
      summary: "नीति-निर्माताओं, शोधकर्ताओं व लोक स्वास्थ्य विशेषज्ञों का एक बड़ा वर्ग है जो राजनितिक व्यवस्था के साथ जूझने से कतराते है। वैज्ञानिक सिद्धांत को मानने वाले पेशेवर लोक-स्वाथ्यकर्मियों के लिए राजनीतिक वर्ग के साथ काम करना कष्टकर व थकाने वाला लगता है। इन्हें कम समय में नये शोध को सरल भाषा में नीति-निर्माताओं को समझाना होता है। यह सब राजनीतिक वर्ग के विषय वस्तु की समझ व नए विषय सिखने समझने की रूचि पर भी निर्भर करता है। नए शोध को समान्य भाषा में उपलब्ध न होने की वजह से भी व्यवहार में लोक-स्वास्थ्य के समान्य नियमों का पालन नहीं हो पाता है। "
    },
    {
      href: "https://www.jansatta.com/blog/corona-crisis-covid-19-jails-full-of-prisoners-can-become-super-spreader/1711063/?",
      text: "कोरोना संकट: सुपर स्प्रेडर बन सकती हैं क्षमता से अधिक भरी जेलें, आंकड़े दे रहे गवाही",
      summary: "पिछले साल के एक आंकड़े के अनुसार देश भर के जेलों में 18,000 से ज्यादा कोरोना के मामले सामने आये थे। इस साल 1 मार्च 2021 से 21 अप्रैल 2021 तक देश के जेलों में 938 कोरोना के मामले आ चुके है। (Commonwealth Human Rights Initiative, 2021) भारत दुनिया भर के जेलों में बंद कैदियों के जनसंख्या के आधार अमेरिका, चीन, ब्राजील और रूस के बाद पाँचवे स्थान पर है। (वर्ल्ड प्रिज़न ब्रीफ, 2021) कोरोना महामारी के दूसरे लहर में जहाँ देश में अफरातफरी का माहौल है वही इस दौरान देश के जेलों में बंद कैदियों की स्वास्थ्य चिंता का सबब बनी हुई है। कई जेलों में संक्रमण फैलने की खबरें आ रही है।"
    },
    {
      href: "https://www.livehindustan.com/blog/nazariya/story-hindustan-nazaria-column-23-december-2021-5390227.html",
      text: "एक जरूरी विमर्श से मुंह मोड़े बैठा समाज",
      summary: "एक बेहतर शासन-व्यवस्था में आंकड़े काफी अहमियत रखते हैं। इनके संग्रह का उद्देश्य किसी समस्या का ठोस समाधान ढूंढना होता है। लेकिन कुछ आंकड़े लोक-स्वास्थ्य के नजरिए से काफी महत्वपूर्ण होने के बावजूद सामाजिक विमर्श का हिस्सा नहीं बन पाते। आत्महत्या एक ऐसी ही उपेक्षित समस्या है। हाल ही में नेशनल क्राइम रिकॉर्ड्स ब्यूरो ने सुसाइड्स एंड एक्सीडेंटल डेथ्स इन इंडिया नाम की रिपोर्ट जारी की है। इस रिपोर्ट के अनुसार, पिछले वर्ष आत्महत्या से होने वाली मौतों की संख्या डेढ़ लाख को पार कर गई। यह एक साल में खुदकुशी से होने वाली मौतों का सबसे बड़ा आंकड़ा है। 2019 के मुकाबले 2020 में आत्महत्या से मृत्यु के आंकड़े में लगभग 10 प्रतिशत की वृद्धि दर्ज की गई है। "

// कोरोना और लॉकडाउन की वजह से उपजी विपरीत आर्थिक परिस्थितियों ने असंगठित क्षेत्र और व्यापारी वर्ग को काफी प्रभावित किया है। साल 2019 की तुलना में 2020 में व्यापारियों की खुदकुशी में 50 फीसदी की वृद्धि दर्ज की गई।
// "
    },
  ];

  return (
    <Container
      maxWidth="md"
      sx={{
        paddingY: { xs: "30px", sm: "40px", md: "60px" },
        fontFamily: theme.fontFamily,
      }}
    >
      {/* Header Section */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: theme.headingFontFamily,
            fontWeight: "700",
            color: theme.secondaryColor,
            fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
            mb: 2,
          }}
        >
          News & media
        </Typography>
        <Divider sx={{ width: "100px", height: "3px", backgroundColor: theme.tertiaryColor, margin: "0 auto" }} />
      </Box>

      {/* News List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 4 }}>
        {resources.map((resource, index) => (
          <Card key={index} sx={{ display: "flex", alignItems: "center", p: 2, borderRadius: "10px", boxShadow: 2 }}>
            <ArticleIcon sx={{ color: theme.secondaryColor, mr: 2 }} />
            <CardContent sx={{ flex: 1, p: 0 }}>
              <Typography variant="h6" sx={{ fontWeight: "600", color: theme.textColor, mb: 1 , fontFamily:"Georgia"}}>
                {resource.text}
              </Typography>
              <Typography variant="body2" sx={{ color: theme.textColor, mb: 1 , fontFamily:"Georgia"}}>
                {resource.summary}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                href={resource.href}
                target="_blank"
                sx={{
                  backgroundColor: theme.secondaryColor,
                  "&:hover": { backgroundColor: "#2A0D2A" },
                  textTransform : "none",
                  marginLeft:"auto", 
                  fontFamily:"Georgia"
                }}
              >
                Learn more
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Divider sx={{ borderColor: "#C5A3C5", mt: 8 }} />
    </Container>
  );
};

export default NewsMediaPage;
