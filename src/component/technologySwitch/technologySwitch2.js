import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { node, android, ios } from "../../../images";
import { Fade } from "react-awesome-reveal";
const MainWrapper = styled.div`
  .main-div {
    padding: 0px 10%;
  }
  .un-selected-tech {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 25px 70px rgb(0 0 0 / 20%);
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
    transition: 0.5s ease;
    &:hover {
      // img {
      //   transition: 0.5s ease;
      //   transform: rotate(360deg);
      // }
    }
  }
  .selected-tech {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 60px;
    width: 60px;
    background-color: #fff;
    box-shadow: 0 25px 70px rgb(0 0 0 / 20%);
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 2px solid #c9cccf;
    &:hover {
      // img {
      //   transition: 0.5s ease;
      //   transform: rotate(360deg);
      // }
    }
  }
  .techName {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .tech-detail-list {
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 25px 70px rgb(0 0 0 / 7%);
    padding: 42px;
    display: flex;
    flex-direction: column;
    min-height: 350px;
    justify-content: center;
    width: 100%;
  }
  .tech-img {
    width: 48px;
    object-fit: contain;
    height: 48px;
  }

  @media (max-width: 1024px) {
    .main-div {
      padding: 0px 4%;
    }
    .btn-section {
      // display: flex;
      margin-bottom: 10px;
      .selected-tech,
      .un-selected-tech {
        // width: 100px;
        display: flex;
        justify-content: center;
      }
    }
    .selected-tech {
      &:before {
        content: "";
        border-left: 0;
        border-top: 0;
      }
    }

    .tech-detail-list {
      margin-top: 30px;
      padding: 24px;
    }
  }
`;

export const technologySwitch2 = (props) => {
  const [selectedTech, setSelectedTech] = useState("0");
  const [selectedTechData, setSelectedTechData] = useState("");

  React.useEffect(() => {
    if (props.techDetailList) {
      setSelectedTechData(props.techDetailList[0].languageList[0]);
      setSelectedTech(1);
    }
  }, []);

  return (
    <MainWrapper className="container" {...props}>
      <div className="main-div row align-items-center justify-content-center">
        <div className="col-lg-5 btn-section">
          {props.techDetailList.map((item, index) => {
            return (
              <>
                <p className="techName">{item.techName}</p>
                <div className="d-flex flex-wrap">
                  {item.languageList.map((item1, index) => {
                    return (
                      <div
                        title={item1.langName}
                        onClick={() => {
                          setSelectedTech(item1.id), setSelectedTechData(item1);
                        }}
                        className={
                          selectedTech == item1.id ? "selected-tech" : "un-selected-tech"
                        }
                      >
                        <img alt="img" className="tech-img" src={item1.img} />
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
        <div class="col-lg-7 d-flex justify-content-center">
          <div className="tech-detail-list">
            <div className="mb-3 d-flex align-items-center">
              <div
                style={{
                  height: 80,
                  width: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                }}
              >
                <img
                  alt="img"
                  src={selectedTechData.img}
                  style={{ width: 85, height: 85, objectFit: "contain" }}
                />
              </div>
              <h5 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>
                {selectedTechData.langName}
              </h5>
            </div>
            <p>{selectedTechData.langDescription}</p>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default technologySwitch2;
