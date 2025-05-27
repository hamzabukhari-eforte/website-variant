import React, { useEffect } from "react";
import { InlineWidget, PopupWidget } from "react-calendly";
import styled from "styled-components";

const StyledDiv = styled.div`
  button:focus {
    outline: none !important;
  }
  input:focus {
    outline: none !important;
  }
  textarea:focus {
    outline: none !important;
  }
  a:focus {
    outline: none !important;
  }
`;

const Calendly = () => {
  return (
    <StyledDiv>
      <div id="form">
        <InlineWidget url="https://calendly.com/eforte-spdp" />
      </div>
    </StyledDiv>
  );
};

export default Calendly;
