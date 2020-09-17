import React from "react";
import styled from "styled-components";

import { ReactComponent as MovieDbLogo } from "../../assets/moviedb_logo.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";

import "./Footer.css";

const StyledFooter = styled.footer`
  width: 100%;
  height: 15em;
  background-color: #14d8cc;
  font-family: Roboto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 1120px) {
    height: 12em;
  }
`;

const Contact = styled.div`
  display: flex;
  margin-left: 5%;
  flex-direction: column;
  align-items: flex-start;
  letter-spacing: 0.125em;
  width: 50%;
  margin-top: 1em;

  @media (max-width: 1120px) {
    width: 50%;
    margin-left: -5px;
  }
`;

const Text = styled.h5`
  font-style: normal;
  font-weight: bold;
  color: #ffffff;
  font-size: 1em;
  line-height: 1em;
  margin: 1em;

  @media (max-width: 1120px) {
    font-size: 0.8em;
    margin: 0.1 0 0 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Contact>
        <Text>Made by Bruno Pedrosa</Text>
        <Text>Email: brunofellipep@gmail.com</Text>
        <Text>Phone: +55 82 996048003</Text>
      </Contact>
      <div className="footer-icons">
        <div className="git-and-linkedin">
          <Github id="git" width="50px" />
          <Linkedin id="linkedin" width="50px" style={{ marginLeft: "10px" }} />
        </div>
        <div className="moviedb">
          <h5 className="moviedb-text">Powered by</h5>
          <MovieDbLogo
            className="moviedblogo"
            width="100px"
            style={{ marginLeft: "1em" }}
          ></MovieDbLogo>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
