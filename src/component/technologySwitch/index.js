import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { node, android, ios } from "../../../images";
import { Fade } from "react-awesome-reveal";
const MainWrapper = styled.div`
  .un-selected-tech {
    border-radius: 6px;
    width: 250px;
    height: 60px;
    background: #fff;
    cursor: pointer;
    position: relative;
    margin: 0px;
    display: flex;
    align-items: center;
    color: gray;
    font-size: 18px;
    transition: 0.3s ease;
  }
  .un-selected-tech:nth-child(2) {
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
  }
  .selected-tech {
    border-radius: 6px;
    width: 250px;
    height: 60px;
    background: ${(props) =>
    props.btnColor ? props.btnColor : "linear-gradient(82deg, #1fa186 0, #46b971 91%)"};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
    color: #fff;
    font-size: 18px;
    transition: 0.3s ease;
  }

  @media (max-width: 1024px) {
    .btn-section {
      display: flex;
      margin-bottom: 10px;
      .selected-tech,
      .un-selected-tech {
        margin: 2rem 0 2rem 0;
        height: 42px;
        font-size: 16px;
        width: 80px;
        display: flex;
        justify-content: center;
      }
    }
    .un-selected-tech:nth-child(2) {
      border-top: 0px;
      border-bottom: 0px;
      border-right: 1px solid #e2e2e2;
      border-left: 1px solid #e2e2e2;
    }
    .selected-tech {
      &:before {
        content: "";
        border-left: 0;
        border-top: 0;
      }
    }
  }

  .tech-detail-list {
    border: 2px solid #cccccc;
    width: 100%;
    height: 180px;
    padding: 20px;
    display: flex;
    // justify-content: center;
    align-items: center;

    li {
      font-size: 18px;
    }
  }
`;

export const TechnologySwitch = (props) => {
  const [selectedTech, setSelectedTech] = useState("0");

  return (
    <MainWrapper className="container" {...props}>
      <div className="row align-items-center justify-content-center">
        <Fade direction="left" triggerOnce duration={1000} damping={0.2}>
          <div className="col-lg-4 btn-section " >
            {props.techDetailList.map((item, index) => {
              return (
                <p
                  onClick={() => setSelectedTech(index)}
                  className={selectedTech == index ? "selected-tech" : "un-selected-tech"}
                >
                  {item.btnName}
                </p>
              );
            })}
          </div>
        </Fade>
        <div class="col-lg-4">
          <div className="tech-detail-list">
            {
              props.techDetailList[selectedTech].detailList && 
              <ul>
              {props.techDetailList[selectedTech].detailList.map((item, index) => {
                return <li>{item.detail}</li>;
              })}
            </ul>
            }
    
          </div>
        </div>
        <div class="col-lg-4">
          <Fade direction="right" triggerOnce duration={1300} damping={0.2}>
            <div className="w-100">
              {
                props.techDetailList[selectedTech].image && <img
                  alt="img"
                  style={{ width: "100%" }}
                  src={props.techDetailList[selectedTech].image}
                  width="250px"
                />
              
              }

            </div>
          </Fade>
        </div>
      </div>
    </MainWrapper>
  );
};

export default TechnologySwitch;
