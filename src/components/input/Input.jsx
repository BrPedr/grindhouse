import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { search } from "../../actions";

import InputDropdown from "../input-dropdown/Input-dropdown";

import "./Input.css";

const StyledInput = styled.input`
  width: 524px;
  height: 28px;
  background: #f4f4f4;
  border-radius: 20px;
  border: none;
  margin-bottom: 0.2em;
  outline: none;
  placeholder {
    text-align: center;
    font-size: 1em;
  }
`;

const Input = (props) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  // const wrapperRef = useRef(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    if (debouncedTerm) {
      props.search(debouncedTerm);
    }
  }, [debouncedTerm]);

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [wrapperRef]);

  // const setHiddenStyle = (currentRef, containsEvent, isTheChildrenHidden) => {
  //   if (!isTheChildrenHidden[1]) {
  //     return;
  //   }

  //   if (currentRef && !containsEvent && isTheChildrenHidden) {
  //     return (isTheChildrenHidden[1].style.visibility = "hidden");
  //   }
  //   return (isTheChildrenHidden[1].style.visibility = "visible");
  // };

  // const handleClickOutside = (event) => {
  //   const { current } = wrapperRef;
  //   const { children } = wrapperRef.current;

  //   setHiddenStyle(current, current.contains(event.target), children);
  // };

  return (
    // <div ref={wrapperRef}>
    <React.Fragment>
      <StyledInput
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        placeholder="Search"
      />
      {term.length ? <InputDropdown className="dropdown" /> : null}
    </React.Fragment>
    // </div>
  );
};

export default connect(null, { search })(Input);
