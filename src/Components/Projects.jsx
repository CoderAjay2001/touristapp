import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const cardsData = [
  {
    title: "Saudi Arabia",
    image:
      "https://cdn.pixabay.com/photo/2019/10/04/09/20/mosque-4525144_1280.jpg",
  },
  {
    title: "London",
    image:
      "https://cdn.pixabay.com/photo/2022/02/15/13/00/building-7014904_1280.jpg",
 },
  {
    title: "United States Of America",
    image:
      "https://cdn.pixabay.com/photo/2013/06/02/08/49/new-york-115626_1280.jpg",

 },
  {
    title: "SwitzerLand",
    image:
      "https://cdn.pixabay.com/photo/2018/02/17/22/15/water-3161063_1280.jpg",
},
  {
    title: "Germany",
    image:
      "https://cdn.pixabay.com/photo/2015/12/05/19/49/bridge-1078671_1280.jpg",
},
  {
    title: "France",
    image:
      "https://cdn.pixabay.com/photo/2017/07/13/03/15/paris-2499022_1280.jpg",
},
  {
    title: "Russia",
    image:
      "https://cdn.pixabay.com/photo/2018/12/13/14/24/the-kremlin-3872941_1280.jpg",
},
    {
      title: "Thailand",
      image:
        "https://cdn.pixabay.com/photo/2016/09/15/01/57/temple-1670926_1280.jpg",
},
];

const Projects = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#000000",
        backgroundImage:
        "url('https://cdn.pixabay.com/photo/2022/11/05/22/11/venice-7572877_1280.jpg')",
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
          color: "Black",
        }}
      >
        International Tours
      </Typography>
      <Typography
        variant="h1"
        sx={{
          mr: 7,
          display: { xs: "flex", md: "none" },
          fontFamily: "sans-serif",
          fontSize: "3rem",
          fontWeight: 600,
          color: "Black",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        International Tours
      </Typography>
      <Typography
        variant="h3"
        sx={{
          ml: "35rem",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "200",
          marginTop: "2rem",
          display: { xs: "none", md: "flex" },
          fontFamily: "roboto",
          color: "Black",
        }}
      >
       Beyond Borders, Beyond Expectations.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          mt: 3,
          mr: 4,
          display: { xs: "flex", md: "none" },
          fontFamily: "roboto",
          fontSize: "1.8rem",
          fontWeight: "200",
          color: "Black",
        }}
      >
      Beyond Borders, Beyond Expectations.
      </Typography>

      <Grid container spacing={1}>
        {cardsData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: 345,
                marginLeft: "2rem",
                marginTop: "5rem",
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
                backgroundColor: "#F7C8CF",
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
    </Box>
  );
};

export default Projects;
