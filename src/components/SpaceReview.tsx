import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/dataSlice";
import { RootState, AppDispatch } from "../store/store";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LocationOnIcon from "../assets/img/assistant_direction.png";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { getDistance } from "geolib";
const SpaceReview: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((state: RootState) => state.data);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [destination, setDestination] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const currentLocation = { lat: latitude, lon: longitude };
        console.log("currentg", currentLocation);
        setUserLocation(currentLocation);
     
        if (destination) {
          const calculatedDistance =
            getDistance(
              { latitude, longitude },
              { latitude: destination.lat, longitude: destination.lon }
            ) / 1000; 
          console.log("distance", calculatedDistance);
          setDistance(calculatedDistance);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);
  
  const getAssetUrl = (fileName: any) => {
    return `https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/${fileName}`;
  };
  const getDestinations = (data: any) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${data.latitude},${data.longitude}`,
      "_blank"
    );
  };
  const calculateDistance = (lat: number, lon: number) => {
    if (!userLocation || !lat || !lon) return null;

    const distanceInMeters = getDistance(
      { latitude: userLocation.lat, longitude: userLocation.lon },
      { latitude: lat, longitude: lon }
    );

    return Number(distanceInMeters / 1000).toFixed(2);
  };
 
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
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
            {!isSmallScreen ? "Our Space Overview" : "Our Spaces"}
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
      <Grid mt={4} container spacing={3}>
        {data &&
          data.map((space: any, index: number) => {
            const discountKeys = Object.keys(space?.day_pass_discounts_percentage || {}).filter(k => k !== "1");
            
            const dynamicKey = discountKeys.length > 0 ? discountKeys[0] : "1"; 
        return( <Grid
          key={index}
         
          size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box
            sx={{
              borderRadius: "16px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              backgroundColor: "#fff",
              padding: "16px",
              width: "370px",
              height: "384px",
            }}
          >
           
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className="w-75" variant="h4" fontWeight="bold">
                {space.name}
              </Typography>
              <Box
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent={"center"}
                mr={1}
                ml={1}
                sx={{
                  color: "#555",
                  border: "0.47px solid #EEE7E7",
                  height: "52px",
                  width: "52px",
                  cursor:'pointer'
                }}
                onClick={() => getDestinations(space)}
              >
                <Box
                  mt={1}
                  mb={1}
                  sx={{ width: "18px", height: "18px" }}
                  component={"img"}
                  src={LocationOnIcon}
                />

                <Typography variant="body2">
                  {calculateDistance(space.latitude, space.longitude)} Kms
                </Typography>
              </Box>
            </Box>

           
            <Box sx={{ position: "relative", marginTop: "8px" }}>
              <Box
                component="img"
                src={getAssetUrl(space.images[0])}
                alt="Workspace"
                sx={{
                  width: "100%",
                  height: "202px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            
              <Box
                sx={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background:
                    "linear-gradient(100.27deg, #263238 22.66%, #2F4B59 67.67%)",
                  boxShadow: "0px 2px 6px 0px #00000014",
                  border: "0.5px solid #FFBB0080",
                  color: "primary",
                  width: "120px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                <Typography variant="body1" color="primary">
                  Workspace
                </Typography>
              </Box>
            </Box>

            
            <Box mt={4} display={"flex"} justifyContent="space-between">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  border: "0.5px solid #EEE7E7",
                  borderRadius: "6px",
                  color: "#F9F9F9",
                  width: "167px",
                }}
                padding="8px"
              >
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    Day Pass
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    ₹ {space.day_pass_price}
                    <span
                      style={{ fontSize: "14px", fontWeight: "normal" }}
                    >
                      /Day
                    </span>
                  </Typography>
                </Box>
                <KeyboardDoubleArrowRightIcon
                  color="secondary"
                  fontSize="small"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  bgcolor: "#FFEB3B",
                  borderRadius: "6px",
                  padding: "12px",
                  width: "fit-content",
                  position: "relative",
                }}
              >
               
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  sx={{
                    position: "absolute",
                    top: "-12px",
                    left: "25px",
                    backgroundColor: "#263238",
                    color: "white",
                    padding: "3px 6px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {dynamicKey}% Discount
                </Box>

               
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    Bulk Pass
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    ₹ {parseInt(dynamicKey) * parseInt(space.day_pass_discounts_percentage[dynamicKey]?.value)*10}
                    <span
                      style={{ fontSize: "14px", fontWeight: "normal" }}
                    >
                      {" "}
                      /{dynamicKey} Days
                    </span>
                  </Typography>
                </Box>

               
                <KeyboardDoubleArrowRightIcon fontSize="small" />
              </Box>
            </Box>
          </Box>
        </Grid>)
           
})}
      </Grid>
    </>
  );
};

export default SpaceReview;
