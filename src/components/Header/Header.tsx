import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import "./Header.css";
import { Box } from "@mui/material";
import logo from "../../assets/img/logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import call from "../../assets/svg/call.svg"
const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        border: "1px solid #F2B304",
        boxShadow: "none",
        height: isMobile ? "72px" : "90px",
        width: "100%",

        left: 0,
        top: 0,
        zIndex: 1100,
        padding: "0 20px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          paddingX: isMobile ? "25px" : "120px",
        }}
      >
        <Typography variant="h6" color="inherit">
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: isMobile ? "100px" : "125px",
              height: isMobile ? "32px" : "40px",
            }}
          />
        </Typography>
        <IconButton edge="end" sx={{ color: "#263238",border:"solid 1px #F2B304",borderRadius:"4px" }}>
        <Box
            component="img"
            src={call}
            alt="Logo"
            sx={{
              width:"24px" ,
              height: "24px",
              border:"1px #F2B304"
            }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
