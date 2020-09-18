import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { search } from "../../actions";

import InputDropdown from "../input-dropdown/Input-dropdown";

import "./Input.css";

const StyledInput = styled.input`
  width: 23.3em;
  height: 28px;
  background: #f4f4f4;
  border-radius: 20px;
  border: none;
  margin-bottom: 0.2em;
  outline: none;

  @media (max-width: 1120px) {
    height: 20px;
  }

  @media (max-width: 630px) {
    width: 15em;
    height: 20px;
  }
`;

const Input = (props) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const wrapperRef = useRef(null);

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
  }, [debouncedTerm, props]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const setHiddenStyle = (currentRef, containsEvent, isTheChildrenHidden) => {
    if (!isTheChildrenHidden[1]) {
      return;
    }

    if (currentRef && !containsEvent && isTheChildrenHidden) {
      return (isTheChildrenHidden[1].firstChild.style.visibility = "hidden");
    }
    return (isTheChildrenHidden[1].firstChild.style.visibility = "visible");
  };

  const handleClickOutside = (event) => {
    const { current } = wrapperRef;
    const { children } = wrapperRef.current;
  
    setHiddenStyle(current, current.contains(event.target), children);
  };

  return (
    <div className="dropdown-container" ref={wrapperRef}>
      <StyledInput
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        placeholder="Search"
      />
      {term.length ? (
        <div onClick={() => setTerm('')}>
          <InputDropdown className="dropdown" />
        </div>
      ) : null}
    </div>
  );
};

export default connect(null, { search })(Input);
