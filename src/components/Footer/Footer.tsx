import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const FooterContainer = styled(Box)({
  backgroundColor: "#222E34", 
  color: "#DDDDDD",
  textAlign: "center",
  padding: "12px 0",
  width: "100%",
});

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2">
        © Copyright 2024. Bhive Private Limited
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
