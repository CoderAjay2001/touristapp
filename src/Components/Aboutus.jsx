import React from "react";
import { Box, Typography } from "@mui/material";

const Aboutus = () => {
  return (
    <Box
      sx={{
        backgroundImage:
        "url('https://cdn.pixabay.com/photo/2015/03/01/05/48/night-view-654393_1280.jpg')",
        backgroundSize: "100% auto",
       
        width: "94vw",
        height: "95vh",
        m: 0,
        p: 5,
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          justifyContent: "center",
          fontSize: "5rem",
          fontWeight: "600",
          marginTop: ".3rem",
          display: { xs: "none", md: "flex" },
          color: "white",
        }}
      >
        About us
      </Typography>
      <Typography
        variant="h1"
        sx={{
          mr: 7,
          display: { xs: "flex", md: "none" },
          fontFamily: "sans-serif",
          fontSize: "3rem",
          fontWeight: 600,
          color: "white",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        About us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          width: "98rem",
          color: "white",
          fontSize: "1.6rem",
          marginTop: "1.2rem",
          marginLeft: "2rem",
        }}
      >
        "Welcome to EasyMyTrip, your gateway to unforgettable adventures. At
        EasyMyTrip, we're passionate about curating immersive travel experiences
        that ignite the spirit of exploration. With a blend of expertise and
        personalized service, we specialize in crafting tailor-made journeys
        that cater to every traveler's preferences. From breathtaking natural
        landscapes to vibrant cultural encounters, our diverse range of
        destinations promises something extraordinary for every wanderlust
        seeker. Whether you're embarking on a solo adventure, a romantic
        getaway, or a family vacation, trust EasyMyTrip to turn your travel
        dreams into cherished memories."
      </Typography>
      <Typography
        variant="body1"
        sx={{
          width: "98rem",
          color: "white",
          fontSize: "1.6rem",
          marginTop: "6rem",
          marginLeft: "2rem",
        }}
      >
       "Established with a commitment to excellence, EasyMyTrip is a leading name in the travel industry, renowned for its dedication to quality, authenticity, and customer satisfaction. Our team of experienced professionals brings a wealth of knowledge and expertise to every aspect of trip planning, ensuring seamless logistics and unforgettable experiences. With a focus on responsible tourism practices, we strive to foster meaningful connections between travelers and the destinations they visit, promoting sustainability and cultural preservation. Whether you're seeking adventure, relaxation, or cultural immersion, let EasyMyTrip be your trusted companion on your journey to discovering the wonders of the world."
      </Typography>
    </Box>
  );
};

export default Aboutus;
