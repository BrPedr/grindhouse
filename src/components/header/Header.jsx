import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import StyledInput from '../input/Input'

import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as UserPage } from "../../assets/bookmarks.svg";

import "./Header.css";

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  left: 0px;
  top: 0px;
`;

const Title = styled.h1`
  font-family: "M PLUS Rounded 1c", sans-serif;
  color: #d33694;
  font-weight: 800;
  width: 319px;
  height: 64px;
  font-size: 48px;
  line-height: 71px;
  text-transform: uppercase;
`;

const Header = () => {
  const wrapperRef = useRef(null);
  
   useEffect(() => {
     document.addEventListener("mousedown", handleClickOutside);

     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, [wrapperRef]);

   const setHiddenStyle = (currentRef, containsEvent, isTheChildrenHidden) => {
     if (!isTheChildrenHidden[1]) {
       return;
     }

     if (currentRef && !containsEvent && isTheChildrenHidden) {
       return (isTheChildrenHidden[1].style.visibility = "hidden");
     }
     return (isTheChildrenHidden[1].style.visibility = "visible");
   };

   const handleClickOutside = (event) => {
     const { current } = wrapperRef;
     const { children } = wrapperRef.current;

     setHiddenStyle(current, current.contains(event.target), children);
  };
  
  return (
    <StyledHeader>
      <Title>Grindhouse</Title>
      <div className="dropdown-container" ref={wrapperRef}>
        <StyledInput />
      </div>
      <div className="icons">
        <Home />
        <UserPage className="user-page-icon" />
      </div>
    </StyledHeader>
  );
};

export default Header;
