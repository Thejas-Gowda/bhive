import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import GooglePlay from "../assets/img/googlePlay.png"; 
import AppStore from "../assets/img/appStore.png";
import MobileMockup1 from "../assets/img/Group 1000007102.png";

import Grid from "@mui/material/Grid2";

const AppDownloadSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ bgcolor: "#F8F9FC", py: 6, px: 2 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        
        <Grid
          size={{ xs: 12, sm: 7, md: 5, lg: 4 }}
          display="flex"
          justifyContent=""
          gap={2}
        >
          <Box
            component="img"
            src={MobileMockup1}
            alt="Mobile 1"
            sx={{ width: 390, height: "auto" }}
          />
          
        </Grid>

      
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
          <Typography variant="h2" color="textSecondary" fontWeight="bold" gutterBottom>
            Download our app now
          </Typography>
          {!isSmallScreen && (
            <Typography variant="body1" color="textSecondary" mb={3}>
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </Typography>
          )}
          <Box display="flex" gap={2}>
            <Button href="#" target="_blank">
              <Box
                component="img"
                src={GooglePlay}
                alt="Google Play"
                sx={{ height: 40 }}
              />
            </Button>
            <Button href="#" target="_blank">
              <Box
                component="img"
                src={AppStore}
                alt="App Store"
                sx={{ height: 40 }}
              />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppDownloadSection;
