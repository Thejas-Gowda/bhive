import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import backgroundImage from "../assets/img/backGroundHero.png";
import VectorImage from "../assets/img/Vector7.png";
import CoworkingImage from "../assets/img/Coworking video1.png";

const Hero: React.FC = () => {
  const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      direction={{ xs: "column-reverse", sm: "row" }}
      spacing={0.5}
      sx={{
        minHeight: { lg: "754px", sm: "496px" },
      }}
    >
      <Grid
        size={{ xs: 12, sm: 6, md: 6, lg: 7 }}
        
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: isSmallScreen?"":`url(${backgroundImage})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: { lg: "754px", sm: "166px" },
        }}
      >
        <Typography variant={isSmallScreen ? "h4" : "h1"} sx={{ width: "65%" }}>
          Host your meeting with world-class amenities.{" "}
          {!isSmallScreen && <br />}Starting at{" "}
          <Typography
            component="span"
            variant={isSmallScreen ? "h4" : "h1"}
            color="primary"
          >
            ₹199/-!
          </Typography>
        </Typography>
      </Grid>
      <Grid
        justifyContent="center" 
        alignItems="center"
        size={{ xs: 12, sm: 6, md: 6, lg: 5 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${VectorImage})`, 
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% -100%",
          minHeight: { lg: "754px", sm: "320px" },
        }}
      >
        <Box
          sx={{
            height: isSmallScreen ? "320px" : "388px",
            width: isSmallScreen ? "320px" : "388px",
          }}
        >
          <img
            style={{
              height: isSmallScreen ? "320px" : "388px",
              width: isSmallScreen ? "320px" : "388px",
              mixBlendMode: "multiply",
            }}
            alt="coworking"
            src={CoworkingImage}
          />
        </Box>
      </Grid>
    </Grid>
  );
};


export default Hero;
