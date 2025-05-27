import styled from "styled-components";
import { Row, Col, Rate } from "antd";
import { BsStarFill } from "react-icons/bs";

const ReferenceWrapper = (props) => {
  const {
    name,
    description,
    catgegory,
    duration,
    serviceOfferings,
    size,
    comment,
    commentDate,
    feedback,
    rating,
    reviewerImg,
    reviewerName,
    reviewerDesignation,
  } = props;

  return (
    <StyledWrapper>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="project_name">{name}</div>
          <div className="project_description">{description}</div>

          <Row align="middle" className="reference_fact">
            <Col>
              <img
                src="/images/html_icon.svg"
                alt="html_icon"
                style={{ marginRight: 20, width: 40 }}
              />
            </Col>
            <Col>
              <div>Project Category</div>
              <div className="about_project">{catgegory}</div>
            </Col>
          </Row>

          <Row align="middle" className="reference_fact" wrap={false}>
            <Col>
              <img
                src="/images/calendar_icon.svg"
                alt="calendar_icon"
                style={{ marginRight: 20, width: 40 }}
              />
            </Col>
            <Col>
              <div>Project Duration</div>
              <div className="about_project">{duration}</div>
            </Col>
          </Row>

          {size && (
            <Row align="middle" className="reference_fact">
              <Col>
                <img
                  src="/images/time_icon.svg"
                  alt="time_icon"
                  style={{ marginRight: 20, width: 40 }}
                />
              </Col>
              <Col>
                <div>Project Size</div>
                <div className="about_project">{size}</div>
              </Col>
            </Row>
          )}

          {!size && (
            <Row align="middle" className="reference_fact">
              <Col>
                <img
                  src="/images/time_icon.svg"
                  alt="time_icon"
                  style={{ marginRight: 20, width: 40 }}
                />
              </Col>
              <Col>
                <div>Service Offerings</div>
                <div className="about_project">{serviceOfferings}</div>
              </Col>
            </Row>
          )}
        </Col>

        <Col xs={24} sm={24} md={12} lg={12}>
          <blockquote className="comment">{comment}</blockquote>
          <div className="commented_at">{commentDate}</div>
          <div className="rating_container">
            <div className="rating">
              {/* {typeof rating == "number" ? rating.toFixed(1) : ""} */}
              {rating}
            </div>
            <div>
              <Rate
                allowHalf
                disabled
                defaultValue={parseFloat(rating)}
                style={{ fontSize: "2.125rem" }}
              />
            </div>
          </div>
          <div style={{ fontSize: 20, marginBottom: 8 }}>Feedback Summary</div>
          <div className="feedback">{feedback}</div>

          <h1 style={{ fontSize: 20, margin: "24px 0" }}>The Reviewer</h1>

          <Row align="middle">
            <Col>
              <img alt="review-img" src={reviewerImg} className="reviewer_image" />
            </Col>
            <Col>
              <div style={{ color: "#757575", lineHeight: "12px" }}>
                <p style={{ fontSize: 18 }}>{reviewerDesignation}</p>
                <p style={{ fontSize: 20 }}>{reviewerName}</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledWrapper>
  );
};

ReferenceWrapper.defaultProps = {
  rating: 0,
};

export default ReferenceWrapper;

const StyledWrapper = styled.section`
  padding: 80px 10%;
  border-bottom: 2px solid #f5f5f5;

  .project_name {
    font-size: 2.125rem;
    font-weight: 600;
    padding-bottom: 24px;
  }
  .project_description {
    font-size: 20px;
    color: #757575;
  }
  .reference_fact {
    padding-top: 46px;
  }
  .about_project {
    color: #ed3c69;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .comment {
    color: #ed3c69;
    font-size: 2.125rem;
    font-weight: 600;
    :after {
      display: block;
      content: "";
      width: 35%;
      position: absolute;
      height: 4px;
      background-color: #ed3c69;
    }
  }
  .commented_at {
    font-size: 1.25rem;
    position: relative;
    margin-bottom: 24px;

    // :after {
    //   display: block;
    //   content: "";
    //   width: 100px;
    //   position: absolute;
    //   bottom: -8px;
    //   height: 4px;
    //   background-color: #ed3c69;
    // }
  }

  .rating_container {
    display: flex;
    align-items: center;
    line-height: 56px;
    margin-bottom: 12px;

    .rating {
      font-size: 2.125rem;
      font-weight: 600;
      margin-right: 12px;
    }
  }

  .feedback {
    color: #757575;
    font-size: 1.25rem;
    line-height: 1.8rem;
  }

  .reviewer_image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    padding: 4px;
    margin-right: 24px;
    border: 1px solid green;
  }

  @media only screen and (max-width: 576px) {
    .about_project {
      font-size: 16px;
    }
    .comment {
      font-size: 1.5rem;
    }
  }
`;
