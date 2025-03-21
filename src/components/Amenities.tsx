import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  
  FitnessCenter,
  Wifi,
  LocalCafe,
  AttachMoney,
  Weekend,
  AccessTime,
  SportsSoccer,
} from "@mui/icons-material";
import EventIcon from "@mui/icons-material/Event";
const Amenities: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const amenities = [
    {
      icon: <EventIcon color="primary" fontSize="large" />,
      label: "Community Events",
      description:
        "Engage in vibrant community events and networking opportunities.",
    },
    {
      icon: <FitnessCenter color="primary" fontSize="large" />,
      label: "Gym Facilities",
      description: "Stay fit with our state-of-the-art gym facilities.",
    },
    {
      icon: <Wifi color="primary" fontSize="large" />,
      label: "High-Speed WiFi",
      description: "Enjoy blazing-fast internet connectivity.",
    },
    {
      icon: <LocalCafe color="primary" fontSize="large" />,
      label: "Cafe & Tea Bar",
      description: "Relax at our premium cafe and tea bar.",
    },
    {
      icon: <AttachMoney color="primary" fontSize="large" />,
      label: "Affordable",
      description: "Get the best amenities at an affordable price.",
    },
    {
      icon: <Weekend color="primary" fontSize="large" />,
      label: "Comfort Lounges",
      description:
        "Experience cozy and stylish lounges for work and relaxation.",
    },
    {
      icon: <AccessTime color="primary" fontSize="large" />,
      label: "Quick Booking",
      description: "Book your workspace effortlessly within minutes.",
    },
    {
      icon: <SportsSoccer color="primary" fontSize="large" />,
      label: "Sports Area",
      description: "Enjoy recreational activities in our sports area.",
    },
  ];
  return (
    <>
      <Grid container direction={{ xs: "row", sm: "row" }} spacing={0.5}>
        <Grid
          size={{ xs: 7, sm: 7, md: 6, lg: 4 }}
        
          sx={{
            display: "flex",
            justifyContent: isSmallScreen ? "start" : "center",
            
          }}
        >
          <Typography variant={isSmallScreen ? "h3" : "h2"}>
            Why Choose Us?
          </Typography>
        </Grid>
        {isSmallScreen && (
          <Grid
            size={{ xs: 4, sm: 4, md: 6, lg: 4 }}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <ArrowRightAltIcon sx={{ width: "24px" }} color="primary" />
          </Grid>
        )}
      </Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        paddingRight={"2rem"}
        paddingLeft={"2rem"}
        justifyContent="center"
        alignItems={"center"}
        className="mt-4 mr-10 ml-10"
      >
        {amenities.map((item, index) => (
          <Grid
            key={index}
            justifyContent={"center"}
            size={{ xs: 6, sm: 6, md: 4, lg: 3 }}
            spacing={1}
          >
            <Box
              display="flex"
              flexDirection={isSmallScreen ? "column" : "row"}
              justifyContent={"center"}
              alignItems="center"
              gap={0.5}
              sx={
                isSmallScreen
                  ? {
                      borderRadius: "6px",
                          height: "80px",
                          background:"#FFFFFF"
                    }
                  : {
                      borderRadius: "6px",
                      height: "80px",
                      cursor: "pointer",
                      transition: "all 0.3s ease-in-out",
                      transform:
                        hoveredIndex === index ? "scale(1.15)" : "scale(1)",
                      boxShadow:
                        hoveredIndex === index
                          ? "0px 2px 4px 0px #0000000F"
                          : "none",
                      background: hoveredIndex === index ? "#FFFFFF" : "none",
                    }
              }
              bgcolor={hoveredIndex === index ? "#FFFFFF" : "transparent"}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Box>{item.icon}</Box>
              <Box
                display={"flex"}
                flexDirection="column"
                alignItems="center"
                mt={1}
              >
                {!isSmallScreen ? (
                  <Typography textAlign={'center'}  variant="h5">{item.label}</Typography>
                ) : (
                  <Typography textAlign={'center'} variant="body1">{item.label}</Typography>
                )}
                {hoveredIndex === index && !isSmallScreen && (
                  <Typography variant="body2" color="textSecondary" mt={1} className="w-75">
                    {item.description}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Amenities;
