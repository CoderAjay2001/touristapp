import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import "../Components/Home.css";
import { Link } from "react-router-dom";


const cardsData = [
  {
    image:
      "https://cdn.pixabay.com/photo/2017/06/15/18/55/chinese-garden-2406350_1280.jpg",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/04/07/21/29/monument-101632_1280.jpg",
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2017/04/08/10/42/burj-khalifa-2212978_1280.jpg",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/18/14/06/trevi-fountain-1834787_1280.jpg",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/07/48/louvre-1868203_1280.jpg",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2010/12/13/10/21/bridge-2715_1280.jpg",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/05/28/22/07/paris-114323_1280.jpg",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/08/13/13/44/moscow-887047_1280.jpg",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/05/03/19/57/passau-7968535_1280.jpg",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2021/01/01/14/29/skiing-5878729_1280.jpg",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2022/05/04/09/13/bordeaux-7173548_1280.jpg",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2020/10/21/12/21/sea-bridge-5672967_1280.jpg",
  },
];



const Home = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#242582",
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2019/10/20/11/51/mountains-4563464_1280.jpg')",
          backgroundSize: "100% auto",
        width: "94vw",
        height: "310vh",
        m: 0,
        p: 5,
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          ml: "3rem",
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "500",
          marginTop: ".2rem",
          display: { xs: "none", md: "flex" },
          color: "white",
        }}
      >
        Tours & Travels Company
      </Typography>
      <Typography
        variant="h1"
        sx={{
          mr: "2rem",
          textAlign: "center",
          fontSize: "1.7rem",
          fontWeight: "500",
          marginTop: ".2rem",
          display: { xs: "flex", md: "none" },
          color: "white",
        }}
      >
        Tours & Travels Company
      </Typography>
      <Typography
        variant="h1"
        sx={{
          mt: 3,
          mr: 2,
          display: { xs: "flex", md: "none" },
          fontFamily: "sans-serif",
          fontSize: "3rem",
          fontWeight: 600,
          // letterSpacing: ".1rem",
          color: "white",
        }}
      >
        Let Your Wanderlust Soar: Explore the World with Us!....
      </Typography>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontSize: "5rem",
          fontWeight: "600",
          marginTop: "2rem",
          display: { xs: "none", md: "flex" },
          color: "white",
        }}
      >
        Let Your Wanderlust Soar: Explore the World with Us!....
      </Typography>
      <Typography
        variant="h3"
        sx={{
          ml: "3rem",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "200",
          marginTop: "3rem",
          display: { xs: "none", md: "flex" },
          fontFamily: "roboto",
          color: "white",
        }}
      >
        Uncover the wonders of the world, each step a new tale to be told. Start your journey with us and let adventure unfold....
      </Typography>
      <Typography
        variant="h3"
        sx={{
          mt: 3,
          mr: 4,
          display: { xs: "flex", md: "none" },
          fontFamily: "roboto",
          fontSize: "2rem",
          fontWeight: "200",
          color: "white",
        }}
      >
        "Your Success, Our Priority: Client Satisfaction, Strategic Approach,
        Timely Deliveries—Building Digital Triumphs Together."
      </Typography>
      <Button
        variant="outlined"
        sx={{
          height: "6rem",
          width: "20rem",
          fontSize: "1.5rem",
          ml: "40rem",
          mt: 8,
          display: { xs: "none", md: "flex" },
          border:"2px solid white",
          borderRadius: "10rem",
          background:"transparent",
          color:"white"
        }}
        component={Link}
        to="/contactus"
      >
         Plan your trip now
      </Button>
      <Button
        variant="outlined"
        sx={{
          height: "5rem",
          width: "18rem",
          fontSize: "1.5rem",
          ml: "3rem",
          mt: 6,
          display: { xs: "flex", md: "none" },
          border:"2px solid white",
          borderRadius: "10rem",
          background:"transparent",
          color:"white"

        }}
      >
        Plan your trip now
      </Button>
      <Box>
        <Typography
          sx={{
            marginTop: "5rem",
            marginLeft: "2rem",
            color: "#FFFFFF",
            fontSize: "3rem",
            fontWeight: "600",
            fontFamily: "monospace",
          }}
        >
          Top Tourist Places..
        </Typography>
        <Grid container spacing={1}>
          {cardsData.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  maxWidth: 345,
                  height: "23rem",
                  width: "30rem",
                  marginLeft: "2rem",
                  marginTop: "4rem",
                  marginRight: "2rem",
                  marginBottom: "2rem",
                  display: "flex",
                  transition: "transform 0.8s", // Added transition property
                  "&:hover": {
                    transform: "scale(1.2)", // Scale-out effect on hover
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="380"
                    image={card.image}
                    alt={card.title}
                    sx={{
                      display: { xs: "none", md: "flex" },
                      transition: "transform 0.3s", // Added transition property
                      "&:hover": {
                        transform: "scale(1.2)", // Scale-out effect on hover
                      },
                    }}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          style={{
            display: "inline-block",
            animation: "moveTextFadeIn 25s linear infinite",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              width: "108rem",
              color: "#FFFFFF",
              fontSize: "1.8rem",
              marginTop: "1.2rem",
            }}
          >
            "🌟 Limited Time Offer! 🌟  Book now and enjoy unbeatable discounts on select travel packages. 
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
