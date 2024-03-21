import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

const cardsData = [
  {
    title: "New Delhi",
    image:
      "https://cdn.pixabay.com/photo/2013/03/14/16/46/lotus-temple-93564_1280.jpg",
    description:
      "Elevate Experiences: Crafting Intuitive and Inspiring UI/UX Designs for a Seamless Digital Journey.",
  },
  {
    title: "Agra",
    image:
      "https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_1280.jpg",
    description:
      "Building Tomorrow's Web Today: Innovative Solutions, Seamless Experiences.",
  },
  {
    title: "Himachal Pradesh",
    image:
      "https://cdn.pixabay.com/photo/2017/08/13/15/16/mountains-2637517_1280.jpg",

    description:
      "Power Your Presence: Strategic Digital Marketing for Growth and Impact.",
  },
  {
    title: "Jammu & Kashmir",
    image:
      "https://cdn.pixabay.com/photo/2017/03/26/19/37/landscape-2176348_1280.jpg",

    description:
      "Beyond Logos, Creating Legacies: Crafting Memorable Brands for Lasting Impressions.",
  },
];
const technologies = [
  {
    name: "Cars",
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/17/44/arches-national-park-1846759_1280.jpg",
  },
  {
    name: "Trains",
    image:
      "https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539_1280.jpg",
  },
  {
    name: "Flight",
    image:
      "https://cdn.pixabay.com/photo/2016/04/30/08/35/aircraft-1362586_1280.jpg",
  },
  {
    name: "Bus",
    image:
      "https://cdn.pixabay.com/photo/2017/09/08/23/54/bus-2730653_1280.jpg",
  },
];
const Services = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#000000",
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/08/17/06/37/road-2650211_1280.jpg')",

        backgroundSize: "100% auto",
        width: "94vw",
        height: "190vh",
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
          color: "black",
        }}
      >
        Domestic Tours
      </Typography>
      <Typography
        variant="h1"
        sx={{
          mr: 7,
          display: { xs: "flex", md: "none" },
          fontFamily: "sans-serif",
          fontSize: "3rem",
          fontWeight: 600,
          color: "black",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Domestice Tours
      </Typography>
      <Grid container spacing={1}>
        {cardsData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: 345,
                marginLeft: "2rem",
                marginTop: "4rem",
                marginRight: "2rem",
                display: "flex",
                transition: "transform 0.3s", // Added transition property
                "&:hover": {
                  transform: "scale(1.07)", // Scale-out effect on hover
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  image={card.image}
                  alt={card.title}
                  sx={{
                    display: {
                      xs: "flex-column",
                      md: "flex",
                      height: "20rem",
                    },
                  }}
                />
              </CardActionArea>
            </Card>
            <Card
              sx={{
                marginLeft: "2rem",
                marginRight: "2rem",
                marginBottom: "2rem",
                display: "flex",
                backgroundColor: "transparent",
                color: "#00000",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: "2.5rem",
                    fontWeight: 600,
                    fontFamily: "monospace",
                  }}
                >
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            justifyContent: "center",
            fontSize: "5rem",
            fontWeight: "600",
            marginTop: "4rem",
            display: { xs: "none", md: "flex" },
            color: "white",
          }}
        >
          Transportation Services
        </Typography>
        <Grid container spacing={1}>
          {technologies.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  maxWidth: 345,
                  marginLeft: "2rem",
                  marginTop: "4rem",
                  marginRight: "2rem",
                  display: "flex",
                  transition: "transform 0.3s", // Added transition property
                  "&:hover": {
                    transform: "scale(1.07)", // Scale-out effect on hover
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="160"
                    image={card.image}
                    alt={card.name}
                    sx={{
                      display: {
                        xs: "flex-column",
                        md: "flex",
                        height: "20rem",
                      },
                    }}
                  />
                </CardActionArea>
              </Card>
              <Card
                sx={{
                  marginLeft: "2rem",
                  marginRight: "2rem",
                  marginBottom: "2rem",
                  display: "flex",
                  backgroundColor: "transparent",
                  color: "#00000",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      marginLeft: "5rem",
                      fontSize: "2.5rem",
                      fontWeight: 600,
                      fontFamily: "monospace",
                    }}
                  >
                    {card.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
