import React, { useState } from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";

const paperStyle = {
  padding: 40,
  height: "70vh",
  width: 500,
  margin: "2rem 0 0 50rem",
  border: ".2rem solid blue",
  background:"transparent"
};

const textfieldStyle = {
  margin: "9px auto",
};
const btnStyle = {
  margin: "8px 0px",
  height:"5rem",
  fontSize:"2rem",
};

const Contactus = () => {
  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    City: "",
    Phone: "",
    Email: "",
    Businessname: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
  
    const formElement = document.querySelector("form");
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz_GWbx5aT7aIpmrpp2BdZtGiJjDMukBKbRFXh4Jwp6TrlkpYVc7fVdNEEYsRf9Hpxzkg/exec",
        {
          method: "POST",
          body: new FormData(formElement),
        }
      );
  
      console.log("Response status:", response.status);
  
      if (response.ok) {
        setFormData({
          Firstname: "",
          Lastname: "",
          City: "",
          Phone: "",
          Email: "",
          Businessname: "",
        });
  
        alert("Form submitted successfully!");
      } else {
        const errorMessage = await response.text();
        console.error("Error submitting form:", errorMessage);
        alert("Error submitting form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      alert("Error submitting form. Please try again later.");
    }
  }
  


  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2015/10/13/01/12/winter-985431_1280.jpg')",
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
          color: "#045CEC",
        }}
      >
        Contact us
      </Typography>
      <Typography
        variant="h1"
        sx={{
          mr: 7,
          display: { xs: "flex", md: "none" },
          fontFamily: "sans-serif",
          fontSize: "3rem",
          fontWeight: 600,
          color: "#045CEC",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Contact us
      </Typography>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <form  action="https://formspree.io/f/mpzvwjwz" method="POST">
            <TextField
              id="outlined-helperText"
              label="First Name"
              placeholder="Enter First Name"
              name="Firstname"
              value={formData.Firstname}
              onChange={handleChange}
              style={textfieldStyle}
              fullWidth
            />
            <TextField
              id="outlined-helperText"
              label="Last Name"
              placeholder="Enter Last Name"
              name="Lastname"
              value={formData.Lastname}
              onChange={handleChange}
              style={textfieldStyle}
              fullWidth
            />
            <TextField
              id="outlined-helperText"
              label="City"
              placeholder="Enter City"
              name="City"
              value={formData.City}
              onChange={handleChange}
              style={textfieldStyle}
              fullWidth
            />
            <TextField
              id="outlined-helperText"
              label="Phone"
              placeholder="Enter Phone number"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              style={textfieldStyle}
              fullWidth
            />
            <TextField
              id="outlined-helperText"
              label="Email"
              placeholder="Enter email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              style={textfieldStyle}
              fullWidth
            />
            <TextField
              id="outlined-helperText"
              label="Business name"
              placeholder="Enter Business name"
              name="Businessname"
              value={formData.Businessname}
              onChange={handleChange}
              style={textfieldStyle}
              fullWidth
            />
            <Button
              variant="contained"
              color="success"
              fullWidth
              style={btnStyle}
              type="submit"
            >
              Get in Touch
            </Button>
          </form>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Contactus;
