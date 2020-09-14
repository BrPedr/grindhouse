import React, { useState, useEffect } from "react";
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
`;

const Input = (props) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);

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

  return (
    <React.Fragment>
      <StyledInput
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        placeholder="Search"
      />
      {term.length ? <InputDropdown className="dropdown" /> : null}
    </React.Fragment>
  );
};

export default connect(null, { search })(Input);
