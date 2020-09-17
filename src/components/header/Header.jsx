import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import StyledInput from "../input/Input";

import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as UserPage } from "../../assets/bookmarks.svg";

import "./Header.css";

const StyledHeader = styled.header`
  position: sticky;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  left: 0px;
  top: 0px;
  z-index: 99;
  background-color: #1f0a42;
`;

// const translateX = keyframes`
// from {
//   transform: translateX(-200px)
// }
// to {
//   transform: translateX(0px)
// }
// `;

// const translateXReverse = keyframes`
// from {
//   transform: translateX(200px)
// }
// to {
//   transform: translateX(0px)
// }
// `;

const Title = styled.h1`
  font-family: "M PLUS Rounded 1c", sans-serif;
  color: #d33694;
  font-weight: 800;
  width: 319px;
  height: 64px;
  font-size: 48px;
  line-height: 71px;
  text-transform: uppercase;
  text-decoration: none;
`;
/* animation: ${translateX} 1.5s ease-in-out; */

const Icons = styled.div`
  display: flex;
  flex-basis: 10rem;
  justify-content: space-around;
`;
/* animation: ${translateXReverse} 1.5s ease-in-out; */

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Title>Grindhouse</Title>
      </Link>
      <StyledInput />
      <Icons>
        <Link to="/">
          <Home styled={{ cursor: "pointer" }} />
        </Link>
        <UserPage className="user-page-icon" />
      </Icons>
    </StyledHeader>
  );
};

export default Header;

// import React, { useEffect, useRef } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// import StyledInput from "../input/Input";

// import { ReactComponent as Home } from "../../assets/home.svg";
// import { ReactComponent as UserPage } from "../../assets/bookmarks.svg";

// import "./Header.css";

// const StyledHeader = styled.header`
//   position: sticky;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-around;
//   width: 100%;
//   height: 100px;
//   left: 0px;
//   top: 0px;
//   z-index: 99;
//   background-color: #1f0a42;
// `;

// // const translateX = keyframes`
// // from {
// //   transform: translateX(-200px)
// // }
// // to {
// //   transform: translateX(0px)
// // }
// // `;

// // const translateXReverse = keyframes`
// // from {
// //   transform: translateX(200px)
// // }
// // to {
// //   transform: translateX(0px)
// // }
// // `;

// const Title = styled.h1`
//   font-family: "M PLUS Rounded 1c", sans-serif;
//   color: #d33694;
//   font-weight: 800;
//   width: 319px;
//   height: 64px;
//   font-size: 48px;
//   line-height: 71px;
//   text-transform: uppercase;
//   text-decoration: none;
//   `;
//   /* animation: ${translateX} 1.5s ease-in-out; */

// const Icons = styled.div`
//   display: flex;
//   flex-basis: 10rem;
//   justify-content: space-around;
//   `;
//   /* animation: ${translateXReverse} 1.5s ease-in-out; */

// const Header = () => {
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   });

//   const setHiddenStyle = (currentRef, containsEvent, isTheChildrenHidden) => {
//     if (!isTheChildrenHidden[1]) {
//       return;
//     }

//     if (currentRef && !containsEvent && isTheChildrenHidden) {
//       return (isTheChildrenHidden[1].style.visibility = "hidden");
//     }
//     return (isTheChildrenHidden[1].style.visibility = "visible");
//   };

//   const handleClickOutside = (event) => {
//     const { current } = wrapperRef;
//     const { children } = wrapperRef.current;
// console.log(wrapperRef)
//     setHiddenStyle(current, current.contains(event.target), children);
//   };

//   return (
//     <StyledHeader>
//       <Link to="/" style={{ textDecoration: "none" }}>
//         <Title>Grindhouse</Title>
//       </Link>
//       <div className="dropdown-container" ref={wrapperRef}>
//         <StyledInput />
//       </div>
//       <Icons>
//         <Link to="/">
//           <Home styled={{ cursor: "pointer" }} />
//         </Link>
//         <UserPage className="user-page-icon" />
//       </Icons>
//     </StyledHeader>
//   );
// };

// export default Header;
