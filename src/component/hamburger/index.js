import React, { useRef } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const StyledHamburger = styled.div`
  cursor: pointer;

  .line {
    height: 4px;
    width: 36px;
    background-color: #ed3c69;
    border-radius: 5px;
    transition: 0.3s ease;
  }

  .line-1 {
    transform: translateY(-6px);
  }

  .line-3 {
    transform: translateY(6px);
  }

  &.menu-close {
    .line-1 {
      transform: translateY(4px) rotateZ(-45deg);
    }
    .line-2 {
      opacity: 0;
    }
    .line-3 {
      transform: translateY(-4px) rotateZ(45deg);
    }
  }
`;

const Hamburger = ({ open }) => {
  return (
    <StyledHamburger className={open ? "menu-close" : ""}>
      <Fade direction="down" cascade>
        <div className="line line-1" />
        <div className="line line-2" />
        <div className="line line-3" />
      </Fade>
    </StyledHamburger>
  );
};

export default Hamburger;
