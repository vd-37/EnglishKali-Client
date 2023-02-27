import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React from "react";
import logo from "../assets/Logo.jpeg";

const Container = styled(Box)`
  display: flex;
  width: 100%;
  margin: 30px 0;
  justify-content: space-between;
`;

const LeftContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light mt-5">
      <Container>
        <LeftContainer>
          <a className="navbar-brand" href="/">
            <img className="logo" alt="logo" src={logo} />
          </a>
          <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Lessons
              </a>
            </li>
          </ul>
          </div>
        </LeftContainer>
        <Box>&copy; {year} All rights reserved. EnglishKali</Box>
      </Container>
    </nav>
  );
};

export default Footer;
