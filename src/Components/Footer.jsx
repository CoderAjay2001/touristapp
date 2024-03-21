import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#242582",
        color: "#FFFFFF",
        padding: "2rem 0",
        borderTop: ".2rem solid gray",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Container sx={{ margin: "0", paddding: "0" }}>
        <Typography
          variant="h5"
          sx={{
            marginLeft: "1rem",
            fontSize: "1.5rem",
            fontFamily: "sans-serif",
            fontWeight: 700,
            letterSpacing: ".2rem",
          }}
        >
          EasyMyTrip.com
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginLeft: "1rem", marginTop: "1rem", fontSize:"2rem" }}
        >
          #1 Best Tours & Travels Company in India
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginLeft: "1rem", marginTop: "5rem", fontSize: "1.3rem" }}
        >
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginLeft: "1rem", marginTop: ".6rem", fontSize: "1.3rem" }}
        >
          Designed and developed by DevGenius Technologies Pvt. Ltd.
        </Typography>
      </Container>
      <Box
        sx={{
          marginRight: "3rem",
        }}
      >
        <Typography sx={{ marginLeft: "2rem", fontSize: "1.5rem" }}>
          Follow Us On
        </Typography>
        <IconButton sx={{ color: "#FFFFFF" }}>
          <InstagramIcon sx={{ fontSize: "3rem" }} />
        </IconButton>
        <IconButton sx={{ color: "#FFFFFF" }}>
          <WhatsAppIcon sx={{ fontSize: "3rem" }} />
        </IconButton>
        <IconButton sx={{ color: "#FFFFFF" }}>
          <TwitterIcon sx={{ fontSize: "3rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
